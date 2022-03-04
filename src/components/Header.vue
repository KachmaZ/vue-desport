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
      <router-link
        class="nav-link"
        active-class="active"
        v-for="page in getSitePages"
        :key="page.id"
        :class="page.name == getCurrPage ? 'current' : ''"
        :data-name="page.name"
        :to="page.link"
        >{{ page.desc }}</router-link>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import userConfig from "../../user.config";

export default {
  data() {
    return {
      name: userConfig.name,
      profession: userConfig.profession,
    };
  },

  computed: {
    ...mapGetters(["getCurrPage", "getSitePages"]),
  },

  methods: {
    ...mapActions(["setCurrPage"]),

    setCurrent: function (event) {
      this.setCurrPage(event.target.getAttribute("data-name"));
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: Lato;

  background-color: #bababa24;
}

.designer-data {
  width: 320px;
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

.nav-link {
  width: 130px;
  padding: 6px;

  display: flex;
  justify-content: center;

  font-size: 14px;

  transition: 0.5s linear;

  &:hover {
    background-color: #8bb3bc36;
  }

  &.active {
    background-color: #8bb3bc9c;
  }
}

a {
  text-decoration: none;
  color: #000;
}
</style>
