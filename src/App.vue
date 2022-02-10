<template>
  <div>
    <Header />
    <router-view />
  </div>  
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header,
  },
}
</script>


<style>
html {
  margin: 0;
}

body {
  margin: 0;
  
  background-color: #E5E5E5;
}
</style>
