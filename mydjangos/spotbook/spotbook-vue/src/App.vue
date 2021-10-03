<template>
  <div id="app">
    <navbar></navbar>
    <profile
     :username="username"></profile>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Profile from './components/Profile.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Profile,
  },
  data: function () {
    return {
      username: 'admin'
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
