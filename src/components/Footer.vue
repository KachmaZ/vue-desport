<template>
  <footer class="footer p-5 p-sm-6 text-1">
    <div class="footer__contacts">
      <div>+7(999)999-99-99</div>
      <div class="mb-lg-3">designer_int@yandex.com</div>
      <div>
        г.Санкт-Петербург, Кронверский проспект 41, офис 3
      </div>
    </div>
    <SocLinks :isInline="true" />
    <div class="footer__copyright">
      © 2013 — 2022 Молчанова Вероника Дизайн и проектирование интерьеров
    </div>
  </footer>
</template>

<script>
import userConfig from "../../user.config";
import SocLinks from "@/components/parts/SocLinks.vue";

export default {
  data() {
    return {
      user: userConfig,
    };
  },

  components: {
    SocLinks,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  height: 290px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: $grey;

  &__contacts {
    text-align: center;
  }

  &__copyright {
    width: 320px;
    text-align: center;
  }
  .signature {
    position: absolute;
    top: 140px;
    left: 90px;
  }
}
</style>
