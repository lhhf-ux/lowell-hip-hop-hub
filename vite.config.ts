// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Every page of the site, prerendered to a static HTML file at build time.
// Upload dist/client/ to Cloudflare Pages; dist/server/ is unused.
const STATIC_PAGES = [
  "/",
  "/lineup",
  "/schedule",
  "/calendar",
  "/events",
  "/venues",
  "/sponsors",
  "/get-involved",
  "/about",
];

const SERVER_DIR = resolve(process.cwd(), "dist/server");
const CLIENT_DIR = resolve(process.cwd(), "dist/client");

// TanStack's own prerenderer asks the preview server for `/lineup/`, gets a
// 307 to `/lineup`, and then its in-process redirect follower loops until
// `maxRedirects` runs out — so it never writes those pages. Render the pages
// straight from Nitro's built worker instead: over a plain Request the worker
// answers each canonical path with 200 HTML, and we write the result to disk.
async function renderStaticPages() {
  let vars = {};
  try {
    const raw = JSON.parse(await readFile(join(SERVER_DIR, "wrangler.json"), "utf8"));
    if (raw?.vars && typeof raw.vars === "object") vars = raw.vars;
  } catch {
    // no wrangler config: render with an empty env
  }

  const { default: server } = await import(pathToFileURL(join(SERVER_DIR, "index.mjs")).href);
  const ctx = { waitUntil() {}, passThroughOnException() {}, props: {} };

  for (const page of STATIC_PAGES) {
    const request = new Request(`http://localhost${page}`, {
      headers: { accept: "text/html" },
    });
    // srvx's NodeRequest exposes `ip` as a getter-only accessor and nitro's
    // cloudflare module handler assigns to it; shadow it with a writable one.
    Object.defineProperty(request, "ip", { value: undefined, writable: true, configurable: true });

    const response = await server.fetch(request, vars, ctx);
    if (!response.ok) {
      throw new Error(`Static render failed for ${page}: HTTP ${response.status}`);
    }
    const html = await response.text();
    const target =
      page === "/"
        ? join(CLIENT_DIR, "index.html")
        : join(CLIENT_DIR, page.replace(/^\//, ""), "index.html");
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html, "utf8");
  }
}

export default defineConfig({
  // Pin the deploy target. On Cloudflare Pages the CI environment otherwise
  // auto-selects the `cloudflare-pages` preset, which writes the server to
  // dist/_worker.js/ and the client to dist/ — a layout the prerender step
  // can't find.
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
    // Nitro's own options include `hooks`; the wrapper's narrow nitro type doesn't.
    ...({
      hooks: {
        // Runs after Nitro has written dist/server/index.mjs.
        compiled: async () => {
          await renderStaticPages();
        },
      },
    } as Record<string, unknown>),
    cloudflare: { nodeCompat: true },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: { enabled: false },
  },
});
