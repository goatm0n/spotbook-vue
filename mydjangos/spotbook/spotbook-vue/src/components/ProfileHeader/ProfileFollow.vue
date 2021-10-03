<template>
<div>
    <button
        v-if="following"
        v-on:click="unfollowMethod"
        type="submit"
        class="btn btn-danger">
        unfollow
    </button>
    <button
        v-else-if="following==false"
        v-on:click="followMethod"
        type="submit"
        class="btn btn-primary"
        >
        follow
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
    name: 'ProfileFollow',
    props: ['username'],
    data: function () {
        return {
            following: null,
        }
    },
    methods: {
        unfollowMethod: function (event) {
            console.log("unfollow method invoked");
            console.log(event.target.tagName);
            this.postForm();
            this.$emit('unfollow-event');
        },
        followMethod: function (event) {
            console.log("follow method invoked");
            console.log(event.target.tagName);
            this.postForm();
            this.$emit('follow-event');
        },
        doesUserFollow: function () {
            const axios = require('axios').default;
            axios
            .get(`http://127.0.0.1:8000/profiles/api/does-user-follow/${this.username}/`)
            .then(response => (this.following = response.data))
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
        postForm: function () {
            let cookie = this.getCookie('csrftoken');
            const axios = require('axios').default;
            axios({
                method: 'post',
                url: `http://127.0.0.1:8000/profiles/api/follow-toggle/${this.username}/`,
                headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json',
                'X-CSRFToken': cookie
                },
            });
        },
    },
    created () {
        this.doesUserFollow()
    },
    mounted () {
        this.doesUserFollow()
    },
    
}
</script>

<style>

</style>