<template>
  <div
    id="login-page"
    style="padding-top: 32px;"
  />
</template>

<script>
export default {
  middleware: ['guest'],

  mounted () {
    this.$store.commit('resetAuth')

    this.$auth0Lock.instance.on('authenticated', (authResult) => {
      this.$handleAuthResult(authResult)
      this.$auth0Lock.silentCheck(this.$handleAuthResult)
      this.$router.replace('/profile')
    })

    this.$auth0Lock.show()
  },

  destroyed () {
    this.$auth0Lock.hide()
  }
}
</script>
