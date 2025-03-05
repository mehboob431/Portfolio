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
  },
  publicDir: "public", // Ensure public assets are accessible
});
