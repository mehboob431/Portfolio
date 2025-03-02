
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
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
            return "vendor"; // Sab dependencies alag vendor chunk me daal dega
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500, // Warning ka limit badha sakte hain
  },
});
