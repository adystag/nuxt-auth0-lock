export const state = () => ({
  idToken: '',
  profile: {}
})

export const mutations = {
  setAuth (state, payload) {
    state.idToken = payload
  },

  resetAuth (state) {
    state.idToken = ''
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (process.server && req.headers.cookie) {
      const cookies = require('cookieparser').parse(req.headers.cookie)
      const idToken = cookies._itkn

      commit('setAuth', idToken)
    }
  }
}

export const getters = {
  isAuth (state) {
    return !!state.idToken
  }
}
