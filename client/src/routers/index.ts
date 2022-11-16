import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/index-page.vue"),
    },
    {
      path: "/login",
      component: () => import("@/pages/login-page.vue"),
    },
    {
      path: "/register",
      component: () => import("@/pages/register-page.vue"),
    },
    {
      path: "/:id",
      component: () => import("@/pages/home/home-page.vue"),
      children: [
        {
          path: "connection",
          children: [
            {
              path: "mysql",
              component: () =>
                import("@/pages/home/connection/mysql/mysql-page.vue"),
            },
            {
              path: "mongodb",
              component: () =>
                import("@/pages/home/connection/mongodb/mongodb-page.vue"),
            },
          ],
        },
        {
          path: "details",
          component: () => import("@/pages/home/detail/detail-page.vue"),
        },
        {
          path: "settings",
          component: () => import("@/pages/home/setting/setting-page.vue"),
        },
        {
          path: "logs",
          component: () => import("@/pages/home/log/log-page.vue"),
        },
      ],
    },
  ],
});
export default router;
