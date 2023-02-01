<template>
  <div class="soc-links" :class="{ sided: isSided, inline: isInline }">
    <a
      class="inst"
      target="_blank"
      href="https://www.instagram.com/alnika.design/"
    >
      <img src="~@/assets/icons/instagram.svg" />
    </a>
    <a
      class="behance"
      target="_blank"
      href="https://www.behance.net/molchanova3796"
    >
      <img src="~@/assets/icons/behance.svg" />
    </a>
    <a
      class="whatsapp"
      target="_blank"
      href="https://api.whatsapp.com/send/?phone=%2B79518717933&text&app_absent=0"
    >
      <img src="~@/assets/icons/whatsapp.svg" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    isSided: Boolean,
    isInline: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.soc-links {
  display: flex;
  justify-content: space-between;

  color: $black;
}

.sided {
  width: 35px;
  height: 130px;

  position: fixed;
  top: 100px;
  left: 97%;
  display: none;
  margin-right: 20px;
  z-index: 10;

  flex-direction: column;

  @include respond-above(md) {
    display: flex;
  }
}

.inline {
  width: 130px;
  height: 35px;
}
</style>
