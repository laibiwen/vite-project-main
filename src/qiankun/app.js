import { registerMicroApps, start } from "qiankun";

export function registerApps() {
  const entry =
    import.meta.env.MODE === "development" ? "//localhost:8089" : "/app-vue";
  registerMicroApps([
    {
      name: "vueApp",
      entry,
      container: "#sub-container",
      activeRule: "/app-vue",
    },
  ]);
  // 启动 qiankun
  start();
}
