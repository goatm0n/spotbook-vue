<template>
  <div id="app">
    <navbar></navbar>
    <spot-clip
     :clip="clip"
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
      clip: {
        user: 1,
        spot: 1,
        textContent: 'test clip',
        image: '/media/images/image001_1_RpnbM80.png',
        id: 1,
        likes: [],
      }
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
