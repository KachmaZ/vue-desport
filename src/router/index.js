import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import Portfolio from "../views/Portfolio.vue";
import Prices from "../views/Prices.vue"
import Contacts from "../views/Contacts.vue"


const routes = [
  {
    path: "/desport-vue/",
    name: "Home",
    component: Home,
  },
  {
    path: "/desport-vue/about",
    name: "About",
    component: About,
  },
  {
    path: "/desport-vue/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: "/desport-vue/prices",
    name: "Prices and Services",
    component: Prices,
  },
  {
    path: "/desport-vue/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
