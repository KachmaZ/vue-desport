<template>
  <div class="intro mb-lg-6">
    <div class="intro__desc">
      <div class="desc mb-lg-8">
        <h1 class="desc__title h-lg-1 mb-lg-5">Interior Design</h1>
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
  position: relative;
  height: 720px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-image: linear-gradient(
      to right,
      #ffffff00 0%,
      #ffffff00 30%,
      #ffffff 100%
    ),
    url("~@/assets/introductionImg.png");
  background-size: cover;

  &__desc {
    width: 50%;

    display: flex;
    flex-direction: column;

    align-items: flex-end;

    .desc {
      display: flex;
      flex-direction: column;
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
</style>