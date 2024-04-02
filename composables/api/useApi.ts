import { defu } from 'defu'
import type { FetchContext, FetchOptions, FetchResponse } from 'ofetch'
import type { NitroFetchRequest } from 'nitropack'
import type { UseFetchOptions } from '#app'
import { useAuthTokens } from '~/composables/api/useAuthTokens'

export function useApi<T>(url: NitroFetchRequest, options: UseFetchOptions<T> = {}) {
  const isRefreshing = useState('isRefreshing', () => false)
  const refreshPromise = useState('refreshPromise', () => null)
  const { getTokens, setTokens, clearTokens } = useAuthTokens()
  const config = useRuntimeConfig()
  const fetchOptions: FetchOptions = {
    baseURL: config.public.baseApiUrl,
    retry: 1,
    retryStatusCodes: [401],
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    async onRequest({ options }) {
      const { accessToken } = getTokens()
      if (accessToken) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${accessToken}`,
        }
      }
    },
    async onResponseError(context: FetchContext & { response: FetchResponse<ResponseType> }): Promise<void> {
      if (context.response.status === 401) {
        const { refreshToken } = getTokens()
        if (!isRefreshing.value && refreshToken) {
          isRefreshing.value = true
          refreshPromise.value = $fetch('https://api.escuelajs.co/api/v1/auth/refresh-token', {
            method: 'POST',
            body: {
              refreshToken,
            },
          }).then((data) => {
            clearTokens()
            setTokens({
              accessToken: data.access_token,
              refreshToken: data.refresh_token,
            })
            isRefreshing.value = false
            refreshPromise.value = null
            return data
          }).catch((e) => {
            isRefreshing.value = false
            refreshPromise.value = null
            throw e
          })
        }

        try {
          await refreshPromise.value
        }
        catch (e) {
          console.error(e)
        }
      }
    },
  }

  const params = defu(options, fetchOptions)
  return $fetch<T>(url, params)
}
