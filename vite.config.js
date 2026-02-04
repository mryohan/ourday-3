import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tagger from "@dhiwise/component-tagger";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // This changes the out put dir from dist to build
  // comment this out if that isn't relevant for your project
  build: {
    outDir: "build",
    chunkSizeWarningLimit: 2000,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      contexts: path.resolve(__dirname, "src/contexts"),
      hooks: path.resolve(__dirname, "src/hooks"),
      lib: path.resolve(__dirname, "src/lib"),
      utils: path.resolve(__dirname, "src/utils"),
      styles: path.resolve(__dirname, "src/styles"),
    },
  },
  plugins: [react(), tagger()],
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ['.amazonaws.com', '.builtwithrocket.new']
  }
});