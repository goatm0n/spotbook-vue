<template>
<div>
    <a>{{userId}}</a>
</div>
</template>

<script>
export default {
    name: 'ProfileBadge',
    props: ['userId', 'username'],
    data: function () {
        return {
            url: null,
        }
    },
    mounted () {
        let str = `http://127.0.0.1:8000/spotbook/profile/${this.username}/`;
        this.url = str;
    }

}
</script>

<style>

</style>