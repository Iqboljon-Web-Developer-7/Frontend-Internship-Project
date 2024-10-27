import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@' will point to 'src' directory
      "@components": path.resolve(__dirname, "src/components"), // Example for components
      "@utils": path.resolve(__dirname, "src/utils"), // Example for utils
    },
  },
});
