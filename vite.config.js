import { defineConfig } from "vite"; // Correct Import
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Local build ke liye "/" hona chahiye
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Vendor chunk banane ke liye
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
