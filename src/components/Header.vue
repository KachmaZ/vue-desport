<template>
  <header>
    <div class="designer-data">
      <span class="name">{{ name }}</span
      ><br />
      <span class="profession">{{ profession }}</span>
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
@import url('https://fonts.googleapis.com/css2?family=Rosario:ital@0;1&display=swap');


header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Rosario;

  background-color: rgba(166, 166, 166, 0.45)
}

.designer-data {
  margin: 0 30px;
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