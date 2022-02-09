import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Portfolio from "../views/Portfolio.vue";
import Prices from "../views/Prices.vue"
import Contacts from "../views/Contacts.vue"


const routes = [
  {
    path: "/desport/",
    name: "Home",
    component: Home,
  },
  {
    path: "/desport/about",
    name: "About",
    component: About,
  },
  {
    path: "/desport/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/desport/prices",
    name: "Prices and Services",
    component: Prices,
  },
  {
    path: "/desport/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
