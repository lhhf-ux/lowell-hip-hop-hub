// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Pin the deploy target. On Cloudflare Pages the CI environment otherwise
  // auto-selects the `cloudflare-pages` preset, which writes the server to
  // dist/_worker.js/ and the client to dist/ — the prerender step then can't
  // find dist/server/server.js and every route 500s.
  nitro: {
    preset: "cloudflare-module",
    output: {
      dir: "dist",
      serverDir: "dist/server",
      publicDir: "dist/client",
    },
    cloudflare: { nodeCompat: true },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static site: every page is prerendered to HTML at build time.
    // Upload dist/client/ to Cloudflare Pages; dist/server/ is unused.
    pages: [
      { path: "/" },
      { path: "/lineup" },
      { path: "/schedule" },
      { path: "/calendar" },
      { path: "/events" },
      { path: "/venues" },
      { path: "/sponsors" },
      { path: "/get-involved" },
      { path: "/about" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
  // Nitro emits its server entry as dist/server/index.mjs, but TanStack's
  // preview server (which drives prerendering) imports dist/server/server.js.
  // The build wrapper writes that shim into the SSR environment's outDir, and
  // Nitro points that environment at node_modules/.nitro/vite/services/ssr, so
  // the import fails and every route except "/" falls back to SSR instead of
  // static HTML. Write the shim where the preview server looks for it, once
  // Nitro has emitted its entry.
  vite: {
    plugins: [
      {
        name: "lhhf-prerender-preview-shim",
        apply: "build",
        buildApp: {
          order: "post",
          async handler() {
            console.log("[shim] buildApp fired");
            const { mkdir, readFile, writeFile } = await import("node:fs/promises");
            const { join, resolve } = await import("node:path");
            const serverDir = resolve(process.cwd(), "dist/server");
            let vars = {};
            try {
              const raw = JSON.parse(await readFile(join(serverDir, "wrangler.json"), "utf8"));
              if (raw?.vars && typeof raw.vars === "object") vars = raw.vars;
            } catch {
              // no wrangler config: prerender with an empty env
            }
            await mkdir(serverDir, { recursive: true });
            await writeFile(
              join(serverDir, "server.js"),
              `// Prerender preview shim: runs Nitro's module worker under Node.
import server from "./index.mjs";
const env = ${JSON.stringify(vars)};
const ctx = { waitUntil() {}, passThroughOnException() {}, props: {} };
export default {
  fetch(request) {
    // srvx's NodeRequest exposes \`ip\` as a getter-only accessor and nitro's
    // cloudflare module handler assigns to it; shadow it with a writable one.
    Object.defineProperty(request, "ip", { value: undefined, writable: true, configurable: true });
    return server.fetch(request, env, ctx);
  },
};
`,
              "utf8",
            );
          },
        },
      },
    ],
  },
});
