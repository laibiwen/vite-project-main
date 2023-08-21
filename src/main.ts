import { createApp } from "vue";
import { createPinia } from "pinia";
import Router from "./router/index.ts";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App).use(Router).use(pinia);
Router.isReady().then(() => app.mount("#app"));
