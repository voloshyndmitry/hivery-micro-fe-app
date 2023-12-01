import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // from https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      react(),
      federation({
        name: "app",
        remotes: {
          remoteApp: process.env.VITE_SHARED_COMPONENTS,
          hiveryStore: process.env.VITE_HIVERY_STORE,
          hiveryMicroApp1: process.env.VITE_HIVERY_MICRO_APP1,
          hiveryMicroApp2: process.env.VITE_HIVERY_MICRO_APP2,
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
