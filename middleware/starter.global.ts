export default defineNuxtRouteMiddleware(async (to, from) => {
  const firstVisit = useCookie('firstVisit')
  // navigate to /welcome but if route is /welcome return
  if (!firstVisit.value && to.path !== '/welcome')
    return navigateTo('/welcome')
})
