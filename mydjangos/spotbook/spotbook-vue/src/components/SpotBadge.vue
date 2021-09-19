<template>
    <div>
        <a :href="url">{{ title }}</a>
    </div>
</template>

<script>
export default {
    name: 'SpotBadge',
    props: ['title', 'spotId'],
    data: function () {
        return {
            url: null,
        }
    },
    mounted () {
        let str = `http://127.0.0.1:8000/spotbook/spotpage/${this.spotId}/`;
        this.url = str;
    }
}
</script>