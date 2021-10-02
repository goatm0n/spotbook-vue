<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-brand>Spotbook</b-navbar-brand>
            <b-navbar-nav>
                <b-nav-item v-for="navItem in navItems" :key="navItem.id" :href="navItem.url">
                    {{ navItem.label }}
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
    import Vue from 'vue'
    import BootstrapVue from 'bootstrap-vue'
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'


    Vue.use(BootstrapVue)

    export default {
        data: function () {
            return {
                navItems: [
                    {label:'spotmap', url:'#', id: 'nav-item-0'},
                    {label:'profile', url:'http://127.0.0.1:8000/spotbook/profile/', id: 'nav-item-1'},
                ],
            }
        },
    };
</script>

<style>

</style>

