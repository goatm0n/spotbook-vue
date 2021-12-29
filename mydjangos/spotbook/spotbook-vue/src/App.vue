<template>
<!-- 
    app structure:
    he
 -->
<div id="app">
    
    
</div>
</template>

<script>
import ThemeButton from './components/ThemeButton.vue'
import UserBadge from './components/UserBadge.vue'
import Profile from './components/Profile.vue'

export default {
    name: 'App',
    components: {
        ThemeButton,
        UserBadge,
        Profile,
    },
    data: function () {
        return {
            username: "admin",
            profileToggle: false,
        }
    },
    methods: {
        toggleProfile: function () {
            this.profileToggle = true;
        }
    },


}
</script>

<style>

:root {
    --background-color-primary: #1e1e1e;
    --background-color-secondary: #3d3d3d;
    --accent-color: #2d2d30;
    --text-primary-color: #ddd;
    --element-size: 4rem;
}

:root.light-theme {
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --accent-color: #cacaca;
    --text-primary-color: #222;
}

p {
    color: var(--text-primary-color);
}

#app {
    background-color: var(--background-color-primary);
    width: 100vw;
    height: 100vh;
}

.left-container {
    width: 15%;
    height: 100%;
    float: left;
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    background-color: var(--background-color-primary);
}

.center-container {
    width: 68.5%;
    height: 100%;
    float: left;
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    background-color: var(--background-color-primary);
}

.right-container {
    width: 15%;
    height: 100%;
    float: right;
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    background-color: var(--background-color-primary);
}

.center-container-header {
    width: 100%;
    height: 5.5%;
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
}

.center-container-main {
    width: 100%;
    height: 94.5%;
    border: calc(var(--element-size) * 0.025) solid var(--accent-color);
    overflow: auto;
    
}

</style>
