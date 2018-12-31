export const state = () => ({
  auth: null,
  profile: null
})

export const mutations = {
  setAuth (state, payload) {
    state.auth = payload
  },

  setProfile (state, payload) {
    state.profile = payload
  },

  resetAuth (state) {
    state.auth = null
  },

  resetProfile (state) {
    state.profile = null
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (process.server && req.headers.cookie) {
      const cookies = require('cookieparser').parse(req.headers.cookie)
      const accessToken = cookies._tkn
      const idToken = cookies._itkn

      commit('setAuth', {
        accessToken,
        idToken
      })
    }
  }
}

export const getters = {
  isAuth (state) {
    return state.auth && state.auth.accessToken && state.auth.idToken
  }
}
