import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "Main",
      filename: "main.js",
      remotes: {
        auth: "http://127.0.0.1:3001/assets/auth.js",
        repos: "http://127.0.0.1:3002/assets/repos.js",
      },
      shared: ["react", "react-router-dom"],
    }),
  ],
});
