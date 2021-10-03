<template>
<div>
    <p>
        clip like counter: {{likesCount}}
    </p>
</div>
</template>

<script>
export default {
    name:"ClipLikeCounter",
    props: ["clipId"],
    data: function () {
        return {
            likesCount: null,
        }
    },
    methods: {
        getLikesCount: function () {
            const axios = require('axios').default;
            axios
            .get(`http://127.0.0.1:8000/clips/api/likes-count/${this.clipId}/`)
            .then(response => (this.likesCount = response.data))
        }
    },
    created () {
        this.getLikesCount();
    },
    mounted () {
        this.getLikesCount();
    }
    
}
</script>

<style>

</style>