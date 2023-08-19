import { createRouter, createWebHistory } from "vue-router";

const Header = () => import("@/components/Header.vue");
const Footer = () => import("@/components/Footer.vue");

const Home = () => import("@/pages/index.vue");
const HelloWorld = () => import("@/components/HelloWorld.vue");
const User = () => import("@/pages/user.vue");
const NotFound = () => import("@/pages/NotFound.vue");
const UserProfile = () => import("@/components/UserProfile.vue");
const UserPosts = () => import("@/components/UserPosts.vue");

const routes = [
  { path: "/", component: Home },
  {
    path: "/HelloWorld",
    components: {
      default: HelloWorld,
      Header,
      Footer,
    },
  },
  {
    path: "/users/:id",
    component: User,
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: "profile",
        component: UserProfile,
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: "posts",
        component: UserPosts,
      },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
