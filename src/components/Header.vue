<template>
  <header>
    <div class="designer-data">
      <div class="des-data-wrapper">
        <span class="name">{{ name }}</span
        ><br />
        <span class="profession">{{ profession }}</span>
      </div>
    </div>
    <div class="nav-menu">
      <div class="nav-button">
        <router-link to="/">Главная</router-link>
      </div>
      <div class="nav-button">
        <router-link to="/about">Обо Мне</router-link>
      </div>
      <div class="nav-button">
        <router-link to="/portfolio">Портфолио</router-link>
      </div>
      <div class="nav-button">
        <router-link to="/prices">Цены и Услуги</router-link>
      </div>
      <div class="nav-button">
        <router-link to="/contacts">Контакты</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import userConfig from "../../user.config";

export default {
  data() {
    return {
      name: userConfig.name,
      profession: userConfig.profession,
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: Lato;
  src: url("../fonts/Lato_Light.ttf");
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Lato;

  background-color: #bababa24;
}

.designer-data {
  width: 320px;
  margin: 0 30px;
  padding: 8px 0 8px 30px;

  display: flex;
  align-items: center;

  background-color: #c9c9c866;
}

.name {
  font-size: 14px;
  line-height: 16px;
}

.profession {
  font-size: 10px;
  line-height: 12px;
  font-style: italic;
}

.nav-menu {
  display: flex;
}

.nav-button {
  font-size: 14px;
  margin: 30px;
}

a {
  text-decoration: none;
  color: #000;
}
</style>