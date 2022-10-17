import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login-page.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("@/pages/register-page.vue"),
    },
  ],
});
export default router;
