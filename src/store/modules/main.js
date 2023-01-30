export default {
  actions: {},

  mutations: {},

  state: {
    sitePages: [
      { name: "home", desc: "Главная", id: 0, link: "/" },
      { name: "about", desc: "Обо мне", id: 1, link: "/about" },
      { name: "portfolio", desc: "Портфолио", id: 2, link: "/portfolio" },
      { name: "prices", desc: "Цены и услуги", id: 3, link: "/prices" },
      { name: "contacts", desc: "Контакты", id: 4, link: "/contacts" },
    ],
  },

  getters: {
    getSitePages(state) {
      return state.sitePages;
    },
  },
};
