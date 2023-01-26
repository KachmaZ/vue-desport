<template>
  <div class="home">
    <section class="screen introduction">
      <img
        class="intro-img"
        src="../assets/introductionImg.png"
        alt=""
        srcset=""
      />
      <div class="intro-desc">
        <h1 class="intro-head">Interior Design</h1>
        <p class="intro-text">
          Предварительные выводы неутешительны: понимание сути
          ресурсосберегающих технологий позволяет выполнить важные задания по
          разработке вывода текущих активов.
        </p>
        <div class="intro-more more-btn">
          <router-link to="/about">More</router-link>
        </div>
      </div>
    </section>
    <section class="screen designer">
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
    </section>
    <section class="screen portfolio">
      <div class="title">
        <h1>PORTFOLIO</h1>
        <div class="port-more more-btn">
          <router-link to="/portfolio">More</router-link>
        </div>
      </div>
      <DemosGrid />
    </section>
    <section class="screen service"></section>
  </div>
</template>

<script>
import userConfig from "../../user.config.js";
import Signature from "@/components/Signature.vue";
import DemosGrid from "@/components/DemosGrid.vue";

export default {
  data() {
    return {
      user: userConfig,
    };
  },

  components: {
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

.introduction {
  position: relative;
  height: 720px;
  margin: 50px 140px 125px;

  overflow: hidden;
  .intro-img {
    position: absolute;
    bottom: 0;
    z-index: -1;

    width: 75%;

    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .intro-desc {
    position: absolute;
    left: 50%;

    width: 50%;
    height: 80%;
    padding-top: 200px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;

    text-align: right;

    .intro-head {
      font-family: Bodoni;
      font-weight: 400;
      font-size: 96px;
    }

    .intro-text {
      width: 45%;
      align-self: flex-end;

      font-size: 18px;
      font-weight: 300;
    }

    .intro-more {
      position: absolute;
      bottom: 0;
      left: 75%;
    }
  }
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
    align-items: end;
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
