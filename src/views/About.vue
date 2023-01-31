<template>
  <div class="about mb-lg-9">
    <img
      src="../assets/designer-photo.png"
      alt="Designer's photo"
      class="about__photo"
    />
    <div class="about__description">
      <h1 class="h-lg-1 mb-lg-7">Обо Мне</h1>
      <div class="desc-text text-2">
        <p class="mb-lg-4">
          Создаю красивые и функциональные дизайны жилых интерьеров.
        </p>

        <p class="mb-lg-4">
          Главная задача при работе над проектами - обустроить пространство так,
          чтобы заказчик максимально комфортно чувствовал себя дома и
          вдохновлялся на новые свершения.
        </p>

        <span>Образование:</span>
        <ul class="ml-lg-5 mb-lg-7">
          <li>Курсы дизайна интерьера в Современной школе дизайна 2021г.</li>
          <li>Курсы 3д визуализации 3d club</li>
        </ul>
      </div>
      <div class="about__quote text-lg-2">
        <div class="quote mb-lg-7">
          «В хорошем дизайне функциональность всегда первична, независимо от
          форм. Но она не должна угнетать эмоции».
        </div>
        <b class="author">Giorgio Saporiti</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__photo {
    width: 373px;

    border-radius: 32px;
  }

  &__description {
    display: flex;
    flex-direction: column;

    width: 55%;
    font-size: 24px;
  }

  &__quote {
    width: 400px;
    align-self: flex-end;
    text-align: right;
  }
}
</style>
