<template>
  <div id="app">
    <navbar></navbar>
    <spot-clip
     :clipId="clipId"
    ></spot-clip>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import SpotClip from './components/SpotClip.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SpotClip,
  },
  data: function () {
    return {
      clipId: 1
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
