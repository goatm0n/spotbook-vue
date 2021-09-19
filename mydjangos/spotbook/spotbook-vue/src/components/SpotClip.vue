<template>
    <div>
        {{ spot }}
        <spot-badge
         v-if="spot"
         :title="spot.properties.title"
         :spotId="spot.id">
        </spot-badge>
        <profile-badge
         v-if="spot"
         :userId="spot.properties.user">
        </profile-badge>
    </div>
</template>

<script>
import ProfileBadge from './ProfileBadge.vue';
    import SpotBadge from './SpotBadge.vue';

    export default {
        name: 'SpotClip',
        props: ['clip'],
        components: {
            SpotBadge,
                ProfileBadge,
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
