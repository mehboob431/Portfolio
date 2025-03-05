import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Fix Vercel Deployment
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist", // Ensures Vercel detects the build output
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
  optimizeDeps: {
    exclude: ["three-stdlib"], // Fix eval issue
  },
  publicDir: "public", // Ensure public assets are accessible
});
