<template>
  <div id="login-page" />
</template>

<style>
#login-page {
  padding-top: 32px;
}
</style>

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
