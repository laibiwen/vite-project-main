import { createApp } from "vue";
import Router from "./router/index.js";
import "./style.css";
import App from "./App.vue";

const app = createApp(App).use(Router);
Router.isReady().then(() => app.mount("#app"));
