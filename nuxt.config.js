export default {
  dev: process.env.NODE_ENV !== 'production',

  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ]
  },

  plugins: [
    { src: '~/plugins/auth0-lock.js', ssr: false },
    { src: '~/plugins/auth-result-handler.js', ssr: false }
  ]
}
