<template>
  <footer>
    <div class="contacts">
      <div class="phone">+7(999)999-99-99</div>
      <div class="email">designer_int@yandex.com</div>
      <br />
      <div class="address">
        г.Санкт-Петербург, Кронверский проспект 41, офис 3
      </div>
    </div>
    <SocLinks :isInline="true" />
    <div class="copyright">
      © 2013 — 2022 Молчанова Вероника Дизайн и проектирование интерьеров
    </div>
    <Signature :name="user.name" />
  </footer>
</template>

<script>
import userConfig from "../../user.config";
import Signature from "@/components/parts/Signature.vue";
import SocLinks from "@/components/parts/SocLinks.vue";

export default {
  data() {
    return {
      user: userConfig,
    };
  },

  components: {
    Signature,
    SocLinks,
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  height: 290px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: Lato;

  background-color: $grey;
}

.contacts {
  text-align: center;
}

.copyright {
  width: 320px;
  text-align: center;

  color: $black;
}

.signature {
  position: absolute;
  top: 140px;
  left: 90px;
}
</style>
