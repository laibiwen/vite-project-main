import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("@/pages/index.vue");
const HelloWorld = () => import("@/components/HelloWorld.vue");
const User = () => import("@/pages/user.vue");
const NotFound = () => import("@/pages/NotFound.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/HelloWorld", component: HelloWorld },
  { path: "/users/:id", component: User },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
