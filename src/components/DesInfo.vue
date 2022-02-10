<template>
  <div class="designer-info">
    <img
      src="../assets/designer-photo.png"
      alt="Designer's photo"
      class="designer-photo"
    />
    <div class="designer-description">
      <h1 class="desc-head">Создание дизайна интерьеров</h1>
      <p class="desc-text">
        Предварительные выводы неутешительны: понимание сути ресурсосберегающих
        технологий позволяет выполнить важные задания по разработке вывода
        текущих активов. Повседневная практика показывает, что высокое качество
        позиционных исследований прекрасно подходит для реализации
        своевременного выполнения сверхзадачи. <br />
        В частности, базовый вектор развития выявляет срочную потребность
        инновационных методов управления процессами.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.designer-info {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
}

.designer-photo {
  width: 25%;
  min-width: 500px;
}

.designer-description {
  width: 40%;
}

.desc-head {
  margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 72px;
  line-height: 98px;
  color: #582500;
}

.desc-text {
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 33px;
  color: #ffffff;
}
</style>