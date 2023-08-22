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
  {
    path: "/",
    // component: Home,
    components: {
      default: Home,
      Header,
      Footer,
    },
    name: "Home",
    children: [
      {
        path: "/users/:id",
        component: User,
        props: true,
        meta: { transition: "slide-left" },
        children: [
          {
            // 当 /user/:id/profile 匹配成功
            // UserProfile 将被渲染到 User 的 <router-view> 内部
            path: "profile",
            component: UserProfile,
            // 只有经过身份验证的用户才能创建帖子
            meta: { requiresAuth: true },
            // beforeEnter: (to, from) => {
            //   console.log("beforeEnter===", to, from);
            //   // reject the navigation
            //   return true;
            // },
          },
          {
            // 当 /user/:id/posts 匹配成功
            // UserPosts 将被渲染到 User 的 <router-view> 内部
            path: "posts",
            name: "posts",
            component: UserPosts,
          },
        ],
      },
      { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    console.log("scrollBehavior===", to, from, savedPosition);
    return new Promise((resolve) => {
      setTimeout(() => {
        // resolve({ left: 0, top: 0 });
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ top: 0 });
        }
      }, 500);
    });
  },
});

router.beforeEach((to) => {
  console.log("router.beforeEach===", to);
  // if (to.name == "posts") {
  //   return { name: "Home" };
  // }
  return true;
});

router.afterEach((to) => {
  console.log("router.afterEach===", to);
});

router.beforeResolve(async (to) => {
  console.log("router.beforeResolve===", to);
  if (to.path === "/HelloWorld" && !router.hasRoute("HelloWorld")) {
    router.addRoute({
      path: "/HelloWorld",
      name: "HelloWorld",
      components: {
        default: HelloWorld,
        Header,
        Footer,
      },
    });
    return to.fullPath;
  }
});

export default router;
