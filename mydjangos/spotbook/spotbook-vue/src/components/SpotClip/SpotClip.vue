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
         @like-event="handleLikeEvent"
         @unlike-event="handleUnlikeEvent">
        </clip-like>
        <clip-like-counter
         :likesCount="likesCount">
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
            handleLikeEvent: function () {
                this.getClip();
            },
            handleUnlikeEvent: function () {
                this.getClip();
            },
        },
        computed: {
            likesCount: function () {
                return this.clip.likesCount
            }
        },
        created () {
            this.getClip();
        },
        
    }
</script>
