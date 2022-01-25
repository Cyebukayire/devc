<template>
  <Join/>
  <router-view/>
</template>

<script>
import Join from './components/Join.vue'
export default {
  name: 'App',
  components: {
    Join
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* background: #e6dffa; */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
