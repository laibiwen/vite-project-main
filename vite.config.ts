import { defineConfig, loadEnv } from "vite";
// import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [vue()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    // build: {
    //   // 在这里配置打包时的rollup配置
    //   rollupOptions: {
    //     output: {
    //       plugins: [visualizer({ open: true })],
    //       // manualChunks: {
    //       //   vue: ["vue"],
    //       //   vender: ["lodash"],
    //       // },
    //       // manualChunks(id) {
    //       //   if (id.includes("node_modules")) {
    //       //     return "vendor";
    //       //   }
    //       // },
    //     },
    //   },
    // },
  };
});
