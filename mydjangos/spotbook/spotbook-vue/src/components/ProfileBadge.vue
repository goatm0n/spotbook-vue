<template>
<div>
    <a :href="url">{{username}}</a>
</div>
</template>

<script>
export default {
    name: 'ProfileBadge',
    props: ['username'],
    data: function () {
        return {
            url: `http://127.0.0.1:8000/spotbook/profile/${this.username}/`,
        }
    },
}
</script>

<style>

</style>