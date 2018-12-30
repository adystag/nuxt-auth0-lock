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
          to="/profile"
          class="header-item"
        >
          Profile
        </nuxt-link>

        <nuxt-link
          to="/login"
          class="header-item"
        >
          Login
        </nuxt-link>

        <nuxt-link
          to="#"
          class="header-item"
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
body, html {
  margin: 0;
  padding: 0;
  font-size: 16px;
}

.container {
  box-sizing: border-box;
}

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

@media screen and (min-width: 1200px) {
  .container {
    width: 1024px;
    margin: 0 auto;
  }
}
</style>
