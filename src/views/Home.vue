<template>
  <div class="home">
    <Introduction />

    <Designer />
    <Portfolio />

    <div class="service"></div>
  </div>
</template>

<script>
import userConfig from "../../user.config.js"; //TODO: Change on ENV

import Introduction from "../components/Introduction.vue";
import Designer from "../components/Designer.vue";
import Portfolio from "../components/Portfolio.vue";

export default {
  data() {
    return {
      user: userConfig,
    };
  },

  components: {
    Introduction,
    Designer,
    Portfolio,
  },
};
</script>

<style lang="scss" scoped>
</style>
