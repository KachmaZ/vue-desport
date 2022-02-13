<template>
  <div class="designer-info">
    <img
      src="../assets/designer-photo.png"
      alt="Designer's photo"
      class="designer-photo"
    />
    <div class="designer-description">
      <h1 class="desc-head">Обо Мне</h1>
      <div class="desc-text">
        <p>Создаю красивые и функциональные дизайны жилых интерьеров.</p>

      <p>
        Главная задача при работе над проектами - обустроить пространство так,
        чтобы заказчик максимально комфортно чувствовал себя дома и вдохновлялся
        на новые свершения.
      </p>
      <p>
        <span>Образование:</span> 
        <ul>
          <li>Курсы дизайна интерьера в Современной школе дизайна 2021г.</li>
          <li>Курсы 3д визуализации 3d club</li>
        </ul>
      </p>
      <div class="quote">
        «В хорошем дизайне функциональность всегда первична, независимо от форм.
        Но она не должна угнетать эмоции».
      </div>
      <p class="author">Giorgio Saporiti</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.designer-info {
  margin: 80px 150px 160px;
  display: flex;
  justify-content: space-between;

  font-family: Lato;
}

.designer-photo {
  width: 35%;
}

.designer-description {
  display: flex;
  flex-direction: column;

  width: 55%;
  font-size: 24px;
}

.desc-head {
  margin: 0;

  align-self: center;


  font-family: Bodoni;
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 98px;
}

.desc-text {
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
}

.quote {
  width: 400px;
  align-self: flex-end;
  text-align: right;
}

.author {
  align-self: flex-end;
  font-weight: bold;
}
</style>