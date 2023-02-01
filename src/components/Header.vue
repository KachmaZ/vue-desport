<template>
  <header class="header">
    <div class="header__logo mr-lg-5">
      <div class="logo p-lg-2">
        <span class="logo__name">{{ name }}</span
        ><br />
        <span class="logo__profession">{{ profession }}</span>
      </div>
    </div>
    <div class="header__nav mr-lg-8">
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
    <img
      class="header__menu-btn ml-4"
      :class="{ opened: isOpened }"
      @click="setMenu"
      src="~@/assets/icons/menu-burger-icon.svg"
      alt=""
    />
    <div class="header__mobile-menu" :class="{ opened: isOpened }">
      <div class="mobile-nav">
        <router-link
          class="mobile-nav__link"
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
      isOpened: false,
    };
  },

  computed: {
    ...mapGetters(["getSitePages"]),
  },

  methods: {
    setMenu() {
      this.isOpened = !this.isOpened;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 64px;
  width: 100%;

  position: fixed;

  display: flex;
  align-items: center;

  font-family: Lato;

  background-color: $greyTransparent;

  &__nav {
    display: none;
  }

  &__logo {
    display: none;
  }

  &__menu-btn {
    width: 32px;
    height: 32px;

    transition: ease-in 100ms;
    cursor: pointer;

    &.opened {
      transform: rotate(90deg);
    }
  }

  &__mobile-menu {
    display: none;

    height: 100vh;
    width: 200px;

    position: fixed;
    top: 64px;
    left: -200px;

    background-color: $greyTransparent;

    transition: ease-out 500ms;
    &.opened {
      display: block;
      transform: translateX(200px);
    }
    .mobile-nav {
      display: flex;
      flex-direction: column;

      &__link {
        height: 50px;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@include respond-above(sm) {
  .header {
    justify-content: center;
    &__nav {
      display: flex;
      justify-content: center;

      .nav {
        display: flex;
        &__link {
          width: 110px;
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
    }

    &__menu-btn {
      display: none;
    }
  }
}

@include respond-above(lg) {
  .header {
    justify-content: space-between;

    &__logo {
      display: block;

      .logo {
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
  }
}
</style>
