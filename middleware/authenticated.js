export default ({ store, redirect }) => {
  if (!store.getters.isAuth) {
    redirect('/login')
  }
}
