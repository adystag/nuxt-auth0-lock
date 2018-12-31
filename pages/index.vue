<template>
  <div>
    <header>
      <div class="container">
        <nuxt-link
          to="/"
          class="header-item"
        >
          Home
        </nuxt-link>

        <nuxt-link
          v-show="$store.getters.isAuth"
          to="/profile"
          class="header-item"
        >
          Profile
        </nuxt-link>

        <nuxt-link
          v-show="!$store.getters.isAuth"
          to="/login"
          class="header-item"
        >
          Login
        </nuxt-link>

        <nuxt-link
          v-show="$store.getters.isAuth"
          to="#"
          class="header-item"
          @click.native="logout"
        >
          Logout
        </nuxt-link>
      </div>
    </header>

    <div
      class="container"
      style="padding: 0 16px;"
    >
      <nuxt-child />
    </div>
  </div>
</template>

<style>
header {
  border-bottom: 1px solid rgba(0, 0, 0, .15);
}

header .header-item {
  display: inline-block;
  padding: 16px;
}

header a.header-item {
  text-decoration: none;
  color: #000000;
  opacity: .5;
}
</style>

<script>
import Cookie from 'js-cookie'

export default {
  methods: {
    logout () {
      Cookie.remove('_itkn')

      this.$store.commit('resetAuth')
      this.$auth0Lock.logout()
    }
  }
}
</script>
