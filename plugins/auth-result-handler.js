import Cookie from 'js-cookie'

export default ({ store }, inject) => {
  inject('handleAuthResult', (authResult) => {
    const idToken = authResult.idToken

    Cookie.set('_itkn', idToken)

    store.commit('setAuth', idToken)
  })
}
