export default defineNuxtRouteMiddleware(async (to, from) => {
  const { me, isLogged } = useUser()
  const excepted = ['/login', '/welcome']
  if (!isLogged.value && !excepted.includes(to.path)) {
    try {
      await me()
    }
    catch (error) {
      console.error(error)
    }
  }
  if (!isLogged.value && !excepted.includes(to.path))
    return navigateTo('/login')
})
