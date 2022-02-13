<template>
  <div>
    <Header />
    <SocLinks :isRegular="true"/>
    <router-view />
    <Footer />
  </div>  
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SocLinks from './components/SocLinks.vue'
export default {
  components: {
    Header,
    Footer,
    SocLinks,
  },
}
</script>


<style>
html {
  margin: 0;
}

body {
  margin: 0;
  position: relative;
}
</style>
