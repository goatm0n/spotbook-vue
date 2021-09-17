<template>
    <div>
        {{ spot }}
        <spot-badge
         v-if="spot"
         :title="spot.properties.title"
         :spotId="spot.id"></spot-badge>
    </div>
</template>

<script>
    import SpotBadge from './SpotBadge.vue';

    export default {
        name: 'SpotClip',
        props: ['clip'],
        components: {
            SpotBadge,
        },
        data: function () {
            return {
                spot: null,
            }
        },
        mounted () {
            const axios = require('axios').default;
            axios
            .get(`http://127.0.0.1:8000/spots/api/spot-detail/${this.clip.spot}/`)
            .then(response => (this.spot = response.data))
        },
    }
</script>
