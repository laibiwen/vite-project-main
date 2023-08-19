import { createApp } from "vue";
import Router from "./router/index.js";
import "./style.css";
import App from "./App.vue";

createApp(App).use(Router).mount("#app");
