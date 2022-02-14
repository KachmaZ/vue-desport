<template>
  <div class="soc-links" :class="{ regular: isRegular, inline: isInline }">
    <a class="inst" href="https://www.instagram.com/alnika.design/">
      <img src="../assets/icons/instagram.svg" />
    </a>
    <a class="behance" href="https://www.behance.net/molchanova3796">
      <img src="../assets/icons/behance.svg" />
    </a>
    <a class="whatsapp" href="https://vk.com/away.php?to=https%3A%2F%2Fwa.me%2F%2B79518717933&el=snippet">
      <img src="../assets/icons/whatsapp.svg" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    isRegular: Boolean,
    isInline: Boolean,
  },
};
</script>

<style scoped>
.soc-links {
  
  display: flex;
  justify-content: space-between;

  color: #000;
}

.regular {
  width: 35px;
  height: 130px;
  position: fixed;
  top: 100px;
  left: 97%;
  margin-right: 20px;

  flex-direction: column;
}

.inline {
  width: 130px;
  height: 35px;
}
</style>