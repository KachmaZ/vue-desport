<template>
  <div class="designer mb-lg-6">
    <div class="designer__desc">
      <div class="desc">
        <h4 class="desc__subtitle h-lg-4 mb-lg-4">
          Создание дизайна интерьеров
        </h4>
        <h2 class="desc__title h-3 h-lg-2 mb-3 mb-md-6">Воплощаем мечты</h2>
        <p class="desc__text text-lg-1 mb-lg-4">
          Предварительные выводы неутешительны: понимание сути
          ресурсосберегающих технологий позволяет выполнить важные задания по
          разработке вывода текущих активов. Повседневная практика показывает,
          что высокое качество позиционных исследований прекрасно подходит для
          реализации своевременного выполнения сверхзадачи.
        </p>
        <p class="desc__text text-lg-1">
          В частности, базовый вектор развития выявляет срочную потребность
          инновационных методов управления процессами.
        </p>
      </div>
    </div>
    <img src="../assets/designer-photo-2.png" alt="" class="designer__img" />
  </div>
</template>

<script>
import userConfig from "../../user.config.js"; //TODO: Change on ENV

export default {
  data() {
    return {
      user: userConfig,
    };
  },
};
</script>

<style lang="scss">
.designer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  &__img {
    width: 100%;
    border-radius: 32px;
  }

  &__desc {
    .desc {
      &__subtitle {
        text-align: center;
      }
      &__text {
        display: none;
      }
    }
  }
}

@include respond-above(md) {
  .designer {
    flex-direction: row;
    &__desc {
      width: 50%;

      .desc {
        &__subtitle {
          text-align: left;
        }

        &__text {
          display: block;
        }
      }
    }

    &__img {
      width: 400px;
    }
  }
}
</style>
