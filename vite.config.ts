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
});
