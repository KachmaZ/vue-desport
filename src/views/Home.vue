<template>
  <div class="home">
    <Introduction />

    <div class="designer">
      <div class="des-desc">
        <span class="desc-subtitle">Создание дизайна интерьеров</span>
        <h2 class="desc-head">Воплощаем мечты</h2>
        <p class="desc-text">
          Предварительные выводы неутешительны: понимание сути
          ресурсосберегающих технологий позволяет выполнить важные задания по
          разработке вывода текущих активов. Повседневная практика показывает,
          что высокое качество позиционных исследований прекрасно подходит для
          реализации своевременного выполнения сверхзадачи.
        </p>
        <br />
        <p class="desc-text">
          В частности, базовый вектор развития выявляет срочную потребность
          инновационных методов управления процессами.
        </p>
      </div>
      <div class="des-img-wrapper">
        <img src="../assets/designer-photo-2.png" alt="" class="des-img" />
      </div>
      <div class="signature-wrapper">
        <Signature :name="user.name" />
      </div>
    </div>
    <div class="portfolio">
      <div class="title">
        <h1>PORTFOLIO</h1>
        <div class="port-more more-btn">
          <router-link to="/portfolio">More</router-link>
        </div>
      </div>
      <DemosGrid />
    </div>
    <div class="service"></div>
  </div>
</template>

<script>
import userConfig from "../../user.config.js"; //TODO: Change on ENV

import Introduction from "../components/Introduction.vue";
import Signature from "@/components/parts/Signature.vue";
import DemosGrid from "@/components/DemosGrid.vue";

export default {
  data() {
    return {
      user: userConfig,
    };
  },

  components: {
    Introduction,
    Signature,
    DemosGrid,
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

.designer {
  position: relative;

  margin-left: 150px;
  display: flex;
  margin-bottom: 125px;

  .des-desc {
    width: 50%;

    .desc-subtitle {
      font-family: Bodoni;
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 27px;
    }

    .desc-head {
      margin-top: 30px;
      margin-bottom: 100px;
      font-family: Bodoni;
      font-style: normal;
      font-weight: normal;
      font-size: 64px;
      line-height: 71px;
    }

    .desc-text {
      margin-right: 190px;
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 22px;
      text-align: justify;
    }
  }

  .des-img-wrapper {
    width: 50%;
    padding: 50px 0 240px 0;

    text-align: center;

    background-color: #dedede;

    .des-img {
      width: 60%;
    }
  }

  .signature-wrapper {
    position: absolute;
    top: 0;
    left: 0px;

    width: 100%;
    height: 100%;
    padding-bottom: 10%;

    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
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
