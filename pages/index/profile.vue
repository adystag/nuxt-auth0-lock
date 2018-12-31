<template>
  <div
    id="profile-page"
    v-show="profile.loaded"
  >
    <img
      :src="profile.picture"
      style="width: 80px; height: 80px; border-radius: 50%;"
    >

    <p>
      <b>Name:</b> {{ profile.name }}
    </p>

    <p>
      <b>Email:</b> {{ profile.email }}
    </p>

    <p>
      <b>Email verified:</b> {{ profile.email_verified }}
    </p>
  </div>
</template>

<style>
#profile-page {
  padding-top: 32px;
}
</style>

<script>
export default {
  middleware: ['authenticated'],

  data () {
    return {
      profile: {
        loaded: false
      }
    }
  },

  mounted () {
    this.fetchUser()
  },

  methods: {
    async fetchUser () {
      try {
        if (!this.$store.state.profile) {
          const profile = await this.$auth0Lock.getProfile(this.$store.state.auth.accessToken)

          this.$store.commit('setProfile', {
            picture: profile.picture,
            name: profile.name,
            email: profile.email,
            email_verified: profile.email_verified
          })
        }

        this.profile = this.$store.state.profile
        this.profile.loaded = true
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
