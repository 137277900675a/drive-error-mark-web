import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.153.146:40001/mock/10",

        changeOrigin: true, //用于跨域的欺骗的跳过请求。
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
