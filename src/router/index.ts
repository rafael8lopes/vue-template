import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/home.vue";
import About from "../views/About/about.vue";
import Profile from "../views/Profile/profile.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
  ],
});

export default router;
