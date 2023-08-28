import { createPinia } from "pinia";
import Router from "./router/index.ts";
import "./style.css";
import { createApp } from "vue";
import { initActions } from "./qiankun/actions.ts";
import App from "./App.vue";
// import ElementPlus from "element-plus";

const actions = initActions();

const pinia = createPinia();
const app = createApp(App)
  .use(Router)
  .use(pinia)
  // .use(ElementPlus, { namespace: "main" })
  .provide("$QK_ACTIONS", actions);
Router.isReady().then(() => app.mount("#app"));
