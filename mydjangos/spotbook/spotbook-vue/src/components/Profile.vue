<template>
<div>
    <profile-header
     :username="username">
    </profile-header>
    <profile-feed
     :username="username">
    </profile-feed>
</div>
</template>

<script>
import ProfileHeader from './ProfileHeader/ProfileHeader.vue'
import ProfileFeed from './ProfileFeed.vue'

export default {
    name: 'Profile',
    props: ['username'],
    components: {
        ProfileHeader,
        ProfileFeed,
    }
}
</script>

<style>

</style>