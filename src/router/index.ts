import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/index.vue";
import ProfileView from "../views/Profile/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
