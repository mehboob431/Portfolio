import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Sab external libraries ek chunk me ajayengi
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Warning limit increase karne ke liye
  },
});
