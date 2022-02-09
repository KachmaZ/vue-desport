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

<style lang="scss" scoped>
</style>