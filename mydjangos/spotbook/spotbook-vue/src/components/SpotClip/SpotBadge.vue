<template>
    <div>
        <a :href="url">{{ title }}</a>
    </div>
</template>

<script>
export default {
    name: 'SpotBadge',
    props: ['spotId'],
    data: function () {
        return {
            url: null,
            title: null,
        }
    },
    methods: {
        getTitle: function () {
            const axios = require('axios').default;
            axios
            .get(`http://127.0.0.1:8000/spots/api/spot-title/${this.spotId}`)
            .then(response => (this.title = response.data))
        },
    },
    mounted () {
        let str = `http://127.0.0.1:8000/spotbook/spotpage/${this.spotId}/`;
        this.url = str;
        this.getTitle();
    }
}
</script>