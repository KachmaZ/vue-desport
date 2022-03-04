import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Prices from "../views/Prices.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/prices",
    name: "Prices and Services",
    component: Prices,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

export default router;
