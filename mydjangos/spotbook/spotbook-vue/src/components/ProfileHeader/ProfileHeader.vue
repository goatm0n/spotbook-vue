<template>
<div>
    <profile-header-username
     :username="username">
    </profile-header-username>
    <profile-header-full-name
     :fullName="fullName">
    </profile-header-full-name>
    <profile-header-profile-picture
     :profilePicture="profilePicture">
    </profile-header-profile-picture>
    <profile-header-bio
     :bio="bio">
    </profile-header-bio>
    <profile-follow
     :username="username"
     :key="followComponentKey"
     v-on:unfollow-event="forceFollowRerender"
     v-on:follow-event="forceFollowRerender">
    </profile-follow>
</div>
</template>

<script>
import ProfileHeaderUsername from './ProfileHeaderUsername.vue'
import ProfileHeaderFullName from './ProfileHeaderFullName.vue'
import ProfileHeaderProfilePicture from './ProfileHeaderProfilePicture.vue'
import ProfileHeaderBio from './ProfileHeaderBio.vue'
import ProfileFollow from './ProfileFollow.vue'

export default {
    name: 'ProfileHeader',
    props: ['username'],
    components: {
        ProfileHeaderUsername,
        ProfileHeaderFullName,
        ProfileHeaderProfilePicture,
        ProfileHeaderBio,
        ProfileFollow,
    },
    data: function () {
        return {
            profile: {
                user: Number,
                full_name: String,
                profile_picture: String,
                bio: String,
            },
            // changing :key forces rerender
            followComponentKey: 0,
        }
    },
    computed: {
        fullName: function () {
            return this.profile.full_name
        },
        profilePicture: function () {
            return this.profile.profile_picture
        },
        bio: function () {
            return this.profile.bio
        }
    },
    methods: {
        getProfile: function () {
            const axios = require('axios').default;
            axios
            .get(`http://127.0.0.1:8000/profiles/api/profile-detail/${this.username}/`)
            .then(response => (this.profile = response.data))
        },
        forceFollowRerender: function () {
            this.followComponentKey += 1;
        },
    },
    created () {
        this.getProfile();
    }
}
</script>

<style>

</style>