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
    <Signature :name="userName" />
  </footer>
</template>

<script>
import userConfig from "../../user.config";
import Signature from "../components/Signature.vue";
import SocLinks from "../components/SocLinks.vue";

export default {
  data() {
    return {
      userName: userConfig.name,
    };
  },

  components: {
    Signature,
    SocLinks,
  },
};
</script>

<style scoped>
@font-face {
  font-family: Lato;
  src: url("../fonts/Lato_Light.ttf");
}

footer {
  position: relative;
  height: 290px;
  padding: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: Lato;

  background-color: #a6a6a673;
}

.contacts {
  text-align: center;
}

.copyright {
  width: 320px;
  text-align: center;

  color: #00000075;
}

.signature { 
  position: absolute;
  top: 220px;
  left: 90px;
}
</style>