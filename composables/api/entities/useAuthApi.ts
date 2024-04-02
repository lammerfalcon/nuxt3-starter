import { useApi } from '~/composables/api/useApi'
import { useAuthTokens } from '~/composables/api/useAuthTokens'

export function useAuthApi() {
  const { setTokens } = useAuthTokens()
  async function login(credentials) {
    try {
      const response = await useApi('/auth/login', {
        method: 'POST',
        body: {
          email: 'john@mail.com',
          password: 'changeme',
        },
      })
      setTokens({
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
      })
    }
    catch (error) {
      console.error(error)
    }
  }
  async function profile() {
    return await useApi('auth/profile')
  }
  return {
    login,
    profile,
  }
}
