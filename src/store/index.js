import { createStore } from "vuex";
import main from "./modules/main";
// import projects from "./modules/projects";

export default createStore({
  modules: {
    main,
    // projects,
  },
});
