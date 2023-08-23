import { registerMicroApps, start } from "qiankun";

export function registerApps() {
  registerMicroApps([
    {
      name: "vueApp",
      entry: "//localhost:8089",
      container: "#sub-container",
      activeRule: "/app-vue",
    },
  ]);
  // 启动 qiankun
  start();
}
