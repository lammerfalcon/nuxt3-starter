export default defineNuxtRouteMiddleware(async (to, from) => {
  const firstVisit = useCookie('firstVisit')
  if (!firstVisit.value && to.path !== '/welcome')
    return navigateTo('/welcome')
})
