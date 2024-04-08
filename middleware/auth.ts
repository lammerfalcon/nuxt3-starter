export default defineNuxtRouteMiddleware(async (to, from) => {
  const { me, isLogged } = useUser()
  if (!isLogged.value) {
    try {
      await me()
    }
    catch (error) {
      console.error(error)
    }
  }

  if (!isLogged.value)
    return navigateTo('/login')
})
