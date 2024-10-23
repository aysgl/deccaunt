import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../views/ServicesView.vue"),
      children: [
        {
          path: "preparation_sites",
          name: "PreparationOfSites",
          component: () => import("../views/services/PreparationOfSites.vue"),
        },
        {
          path: "development_erp_systems",
          name: "DevelopmentOfErpSystems",
          component: () =>
            import("../views/services/DevelopmentofErpSystems.vue"),
        },
      ],
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
