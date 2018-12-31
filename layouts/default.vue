<template>
  <nuxt />
</template>

<style>
body, html {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.container {
  box-sizing: border-box;
}

@media screen and (min-width: 1200px) {
  .container {
    width: 1024px;
    margin: 0 auto;
  }
}
</style>

<script>
export default {
  mounted () {
    if (this.$store.getters.isAuth) {
      this.$auth0Lock.checkSession()
        .then((authResult) => {
          this.$handleAuthResult(authResult)
          this.$auth0Lock.silentCheck(this.$handleAuthResult)
        })
        .catch((err) => {
          if (err) console.log(err)

          this.$store.commit('resetAuth')
        })
    }
  }
}
</script>
