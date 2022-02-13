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

.signature {
  font-family: HamiltoneG;
  font-size: 48px;
  line-height: 90px;
}
</style>