<template>
  <div class="lined-btn text-2">
    <router-link :to="to">
      <slot><!-- optional fallback --></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    to: String,
  },
};
</script>

<style lang="scss">
.lined-btn {
  width: 170px;

  text-align: left;

  border-bottom: 1px solid #000;
}
</style>
