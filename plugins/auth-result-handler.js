import Cookie from 'js-cookie'

export default ({ store }, inject) => {
  inject('handleAuthResult', (authResult) => {
    const accessToken = authResult.accessToken
    const idToken = authResult.idToken

    Cookie.set('_tkn', accessToken)
    Cookie.set('_itkn', idToken)

    store.commit('setAuth', {
      accessToken,
      idToken
    })
  })
}
