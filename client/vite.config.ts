import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: path.resolve(__dirname, "../node_modules/.vite"),
  root: path.resolve(__dirname),
  base: "/",

  // But serve from the client directory
  publicDir: path.resolve(__dirname, "../public"),
  build: {
    emptyOutDir: true,
    outDir: path.resolve(__dirname, "../dist"),
  },
});

