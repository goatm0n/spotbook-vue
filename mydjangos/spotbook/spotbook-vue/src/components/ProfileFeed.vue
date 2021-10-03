<template>
<div>
    <spot-clip
     v-for="clipId in clipList"
     :clipId="clipId"
     :key="clipId">
    </spot-clip>
</div>
</template>

<script>
import SpotClip from './SpotClip/SpotClip.vue'

export default {
    name: 'ProfileFeed',
    props: ['username'],
    components: {
        SpotClip,
    },
    data : function () {
        return {
            clipList: [],
        }
    },
    methods: {
        getClipList: function () {
            const axios = require('axios').default
            axios
            .get(`http://127.0.0.1:8000/clips/api/clip-list/${this.username}/`)
            .then(response => (this.clipList = response.data.clip_id_list))
        }
    },
    created () {
        this.getClipList()
    },

}
</script>

<style>

</style>