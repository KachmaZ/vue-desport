<template>
  <div class="intro mb-4 mb-sm-6">
    <div class="intro__desc">
      <div class="desc mb-6 mb-lg-8">
        <h1 class="desc__title h-3 h-sm-1 mb-7 mb-sm-4 mb-lg-5">Interior Design</h1>
        <p class="desc__content text-1">
          Предварительные выводы неутешительны: понимание сути
          ресурсосберегающих технологий позволяет выполнить важные задания по
          разработке вывода текущих активов.
        </p>
      </div>
      <LinedButton to="/about">More</LinedButton>
    </div>
  </div>
</template>

<script>
import LinedButton from "./parts/LinedButton.vue";

export default {
  components: {
    LinedButton,
  },
};
</script>

<style lang="scss">
.intro {
  height: calc(100vh - 64px);

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 0 32px 32px;
  background-image: linear-gradient(
      to bottom,
      #ffffff 0%,
      #ffffff88 60%,
      #ffffff00 100%
    ),
    url("~@/assets/introductionImg.png");
  background-size: cover;
  background-position: center center;

  &__desc {
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;

    .desc {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
}

@include respond-above(sm) {
  .intro {
    justify-content: flex-end;

    background-image: linear-gradient(
        to right,
        #ffffff00 0%,
        #ffffff00 30%,
        #ffffff 100%
      ),
      url("~@/assets/introductionImg.png");

    &__desc {
      width: 50%;
      align-items: flex-end;
      .desc {
        align-items: flex-end;

        &__title {
          text-align: right;
        }

        &__content {
          width: 60%;
          text-align: right;
        }
      }
    }
  }
}
</style>
