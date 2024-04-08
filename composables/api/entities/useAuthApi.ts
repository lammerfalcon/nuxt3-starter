import { useApi } from '~/composables/api/useApi'
import type { User } from '~/types/User'

export function useAuthApi() {
  const { setTokens } = useAuthTokens()

  async function login(credentials: { email: string, password: string }) {
    try {
      const response = await useApi('/auth/login', {
        method: 'POST',
        body: {
          ...credentials,
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

  async function profile(): Promise<User> {
    return await useApi<User>('auth/profile')
  }

  return {
    login,
    profile,
  }
}
