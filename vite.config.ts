import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://10.10.244.58:18084",
        changeOrigin: true, //用于跨域的欺骗的跳过请求。
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
