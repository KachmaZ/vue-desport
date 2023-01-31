<template>
  <div>
    <Header />
    <SocLinks :isSided="true" />
    <div class="container pt-lg-7">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SocLinks from "@/components/parts/SocLinks.vue";
export default {
  components: {
    Header,
    Footer,
    SocLinks,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: 0;
  color: $black;
}

body {
  position: relative;
}
</style>
