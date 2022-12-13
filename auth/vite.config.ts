import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "Auth",
      filename: "auth.js",
      exposes: {
        "./Login": "./src/pages/login.tsx",
        "./Logout": "./src/pages/logout.tsx",
      },
      shared: ["react", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 3001,
  },
});
