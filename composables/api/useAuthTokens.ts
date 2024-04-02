export function useAuthTokens() {
  const accessToken = useState('accessToken', () => null)

  const refreshToken = useState('refreshToken', () => null)

  const cookieAccessToken = useCookie('accessToken', {
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
    sameSite: 'lax',
  })

  const cookieRefreshToken = useCookie('refreshToken', {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
  })

  const setTokens = ({ accessToken: newAccessToken, refreshToken: newRefreshToken }) => {
    accessToken.value = newAccessToken
    refreshToken.value = newRefreshToken
    cookieAccessToken.value = newAccessToken
    cookieRefreshToken.value = newRefreshToken
  }

  const getTokens = () => {
    return {
      accessToken: accessToken.value || cookieAccessToken.value,
      refreshToken: refreshToken.value || cookieRefreshToken.value,
    }
  }

  const clearTokens = () => {
    accessToken.value = null
    refreshToken.value = null
    cookieAccessToken.value = null
    cookieRefreshToken.value = null
  }

  return { setTokens, getTokens, clearTokens }
}
