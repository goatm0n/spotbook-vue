<template>
    <div>
        <button
         v-if="like"
         v-on:click="unlikeMethod"
         type="submit"
         class="btn btn-danger">
         unlike
        </button>
        <button
         v-else-if="like==false"
         v-on:click="likeMethod"
         type="submit"
         class="btn btn-primary"
         >
         like
        </button>
        <button
         v-else
         type="submit"
         class="btn btn-secondary">
         sign in
        </button>

    </div>
</template>

<script>
export default {
    name: "ClipLike",
    props: ["clipId"],
    data: function () {
        return {
            like: null,
        }
    },
    methods: {
        unlikeMethod: function (event) {
            console.log("unlike method invoked");
            console.log(event.target.tagName);
            this.postForm();
            this.like = false;
            this.$emit('unlike-event');
        },
        likeMethod: function (event) {
            console.log("like method invoked");
            console.log(event.target.tagName);
            this.postForm();
            this.like = true;
            this.$emit('like-event');
        },
        postForm: function () {
            let cookie = this.getCookie('csrftoken');
            const axios = require('axios').default;
            axios({
                method: 'post',
                url: `http://127.0.0.1:8000/clips/api/clip-like/${this.clipId}/`,
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'X-CSRFToken': cookie
                },
            });
        },
        getCookie: function (name) {
            let cookieValue = null;
            if (document.cookie && document.cookie !== '') {
                const cookies = document.cookie.split(';');
                for (let i = 0; i < cookies.length; i++) {
                    const cookie = cookies[i].trim();
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        doesUserLike: function () {
            const axios = require('axios').default;
            axios
            .get(`http://127.0.0.1:8000/clips/api/does-user-like/${this.clipId}/`)
            .then(response => (this.like = response.data))
        }
    },
    mounted () {
        const axios = require('axios').default;
        axios
        .get(`http://127.0.0.1:8000/clips/api/does-user-like/${this.clipId}/`)
        .then(response => (this.like = response.data))
    },
}
</script>

<style>

</style>