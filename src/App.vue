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
@font-face {
  font-family: Lato;
  src: url("fonts/Lato_Light.ttf");
}

@font-face {
  font-family: Bodoni;
  src: url("fonts/bodoni.ttf");
}

@font-face {
  font-family: HamiltoneG;
  src: url("fonts/HamiltoneG.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  position: relative;
}
</style>
