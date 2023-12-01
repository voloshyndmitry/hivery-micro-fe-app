import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // from https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  console.log("ENV >>>", process.env.VITE_TEST)
  return {
    plugins: [
      react(),
      federation({
        name: "app",
        remotes: {
          remoteApp:
            "https://unpkg.com/hivery-shared-components@0.0.10/dist/assets/remoteEntry.js",
          hiveryStore:
            "https://unpkg.com/hivery-store@0.0.2/dist/assets/remoteEntry.js",
          hiveryMicroApp1:
            "https://unpkg.com/hivery-micro-app1@0.0.3/dist/assets/remoteEntry.js",
          hiveryMicroApp2:
            "https://unpkg.com/hivery-micro-app2@0.0.2/dist/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
