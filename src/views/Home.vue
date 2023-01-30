<template>
  <div class="home">
    <Introduction />

    <Designer />
    <!-- <div class="portfolio">
      <div class="title">
        <h1>PORTFOLIO</h1>
        <div class="port-more more-btn">
          <router-link to="/portfolio">More</router-link>
        </div>
      </div>
      <DemosGrid />
    </div> -->
    <div class="service"></div>
  </div>
</template>

<script>
import userConfig from "../../user.config.js"; //TODO: Change on ENV

import Introduction from "../components/Introduction.vue";
import Designer from "../components/Designer.vue";
// import DemosGrid from "@/components/DemosGrid.vue";

export default {
  data() {
    return {
      user: userConfig,
    };
  },

  components: {
    Introduction,
    Designer,
    // DemosGrid,
  },
};
</script>

<style lang="scss" scoped>
.more-btn {
  width: 170px;
  margin-left: 25px;

  text-align: left;

  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;

  border-bottom: 1px solid #000;
}

.portfolio {
  width: 100%;
  height: 100vh;

  .title {
    position: relative;

    text-align: center;

    font-family: Bodoni Moda;
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 152px;

    .port-more {
      position: absolute;
      bottom: 0;
      right: 40px;
    }
  }
}
</style>
