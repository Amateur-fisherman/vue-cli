<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <index msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import index from './components/index/index.vue'


export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>

</style>
