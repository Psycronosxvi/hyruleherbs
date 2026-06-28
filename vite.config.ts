import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      // Route TanStack's SSR entry through our custom worker (src/server.ts),
      // which mounts the /api/* handlers and SSR error wrapping.
      server: { entry: "server" },
    }),
    viteReact(),
    nitro({
      preset: "cloudflare-module",
      output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
      cloudflare: { nodeCompat: true, deployConfig: true },
    }),
  ],
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-start",
      "@tanstack/react-query",
    ],
  },
});
