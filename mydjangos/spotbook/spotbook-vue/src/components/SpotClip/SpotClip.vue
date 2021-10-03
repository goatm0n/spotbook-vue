<template>
    <div>
        <spot-badge
         :spotId="clip.spot">
        </spot-badge>
        <profile-badge
         :username="clip.username">
        </profile-badge>
        <clip-text-content
         :textContent="clip.textContent">
        </clip-text-content>
        <clip-image
         :image="clip.image">
        </clip-image>
        <clip-like
         :clipId="clip.id"
         v-on:like-event="handleLikeEvent"
         v-on:unlike-event="handleLikeEvent"
         :key="clipLikeKey">
        </clip-like>
        <clip-like-counter
         :clipId="clipId"
         :key="clipCountKey">
        </clip-like-counter>
    </div>
</template>

<script>
    import ProfileBadge from './ProfileBadge.vue';
    import SpotBadge from './SpotBadge.vue';
    import ClipTextContent from './ClipTextContent.vue';
    import ClipImage from './ClipImage.vue';
    import ClipLike from './ClipLike.vue';
    import ClipLikeCounter from'./ClipLikeCounter.vue';

    export default {
        name: 'SpotClip',
        props: ['clipId'],
        components: {
            SpotBadge,
            ProfileBadge,
            ClipTextContent,
            ClipImage,
            ClipLike,
            ClipLikeCounter,
        },
        data: function () {
            return {
                clip: null,
                clipLikeKey: 0,
                clipCountKey: 0,
            }
        },
        methods: {
            getClip: function () {
                console.log('grtting');
                const axios = require('axios').default;
                axios
                .get(`http://127.0.0.1:8000/clips/api/clip-detail/${this.clipId}/`)
                .then(response => (this.clip = response.data))
            },
            forceLikeRerender: function () {
                this.clipLikeKey += 1;
            },
            forceCountRerender: function () {
                this.clipCountKey += 1;
            },
            handleLikeEvent: function () {
                this.forceLikeRerender();
                this.forceCountRerender();
            }
        },
        computed: {
            likesCount: function () {
                return this.clip.likesCount
            }
        },
        created () {
            this.getClip();
        },
        mounted () {
            this.getClip();
        }
        
    }
</script>
