import Auth0Lock from 'auth0-lock'

const lock = new Auth0Lock(
  'f2h2z6GnFLqj9l9zJqfSwpAzjcGlX8X4',
  'mytestdev21.auth0.com',
  {
    container: 'login-page',
    auth: {
      redirectUrl: 'http://localhost:3000/login', // If not specified, defaults to the current page
      responseType: 'token id_token',
      params: {
        scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
  }
)

export default (context, inject) => {
  const checkSession = new Promise((resolve, reject) => {
    lock.checkSession({}, (err, authResult) => {
      if (err || !authResult) {
        return reject(err || new Error('No auth result'))
      }

      resolve(authResult)
    })
  })

  inject('auth0Lock', {
    on: lock.on,

    show () {
      lock.show()
    },

    async silentCheck (time, next) {
      try {
        const defaultTime = 15 * 60 * 1000
        const authResult = await checkSession()

        if (next) {
          next(authResult)
        }

        setTimeout(this.checkSession, time || defaultTime)
      } catch (err) {
        throw err
      }
    }
  })
}
