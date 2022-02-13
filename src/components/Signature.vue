<template>
  <div class="signature">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
@font-face {
  font-family: HamiltoneG;
  src: url("../fonts/HamiltoneG.ttf");
}

.signature {
  font-family: HamiltoneG;
  font-size: 48px;
  line-height: 90px;
}
</style>