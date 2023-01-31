<template>
  <header class="header">
    <div class="header__logo mr-lg-5">
      <div class="logo p-lg-2">
        <span class="logo__name">{{ name }}</span
        ><br />
        <span class="logo__profession">{{ profession }}</span>
      </div>
    </div>
    <div class="header__nav">
      <div class="nav">
        <router-link
          class="nav__link"
          active-class="active"
          v-for="page in getSitePages"
          :key="page.id"
          :data-name="page.name"
          :to="page.link"
          >{{ page.desc }}</router-link
        >
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import userConfig from "../../user.config";

export default {
  data() {
    return {
      name: userConfig.name,
      profession: userConfig.profession,
    };
  },

  computed: {
    ...mapGetters(["getSitePages"]),
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  font-family: Lato;

  background-color: $greyTransparent;
}

.nav {
  display: flex;
  &__link {
    width: 130px;
    padding: 6px;

    display: flex;
    justify-content: center;

    font-size: 14px;

    transition: 0.5s linear;

    &:hover {
      background-color: $colorHover;
    }

    &.active {
      background-color: $colorActive;
    }
  }
}

.logo {
  display: none;

  @include respond-above(lg) {
    width: 240px;
    height: 100%;

    display: block;

    background-color: $greyLight;

    &__name {
      font-size: 14px;
      line-height: 16px;
    }

    &__profession {
      font-size: 10px;
      line-height: 12px;
      font-style: italic;
    }
  }
}
</style>
