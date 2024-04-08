export function useAuthTokens() {
  const initToken = (key, options) => {
    const state = useState(key, () => null)
    const cookie = useCookie(key, options)

    state.value = cookie.value

    return [state, cookie]
  }

  const [accessToken, cookieAccessToken] = initToken('accessToken', {
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
    sameSite: 'lax',
  })

  const [refreshToken, cookieRefreshToken] = initToken('refreshToken', {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
  })

  const setToken = (state, cookie, value) => {
    state.value = value
    cookie.value = value
  }

  const setTokens = ({ accessToken: newAccessToken, refreshToken: newRefreshToken }) => {
    setToken(accessToken, cookieAccessToken, newAccessToken)
    setToken(refreshToken, cookieRefreshToken, newRefreshToken)
  }

  const getTokens = () => ({
    accessToken: accessToken.value,
    refreshToken: refreshToken.value,
  })

  const clearTokens = () => {
    setTokens({ accessToken: null, refreshToken: null })
  }

  return { setTokens, getTokens, clearTokens }
}
