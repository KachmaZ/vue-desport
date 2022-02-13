<template>
  <div class="home">
    <section class="screen introduction">
      <img
        class="intro-img"
        src="../assets/introductionImg.png"
        alt=""
        srcset=""
      />
    </section>
    <section class="screen designer"></section>
    <section class="screen portfolio"></section>
    <section class="screen service"></section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.introduction {
  height: 720px;
  margin: 50px 140px;
  position: relative;

  overflow: hidden;
}

.intro-img {
  position: absolute;
  bottom: 0;
  width: 75%;

  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>
