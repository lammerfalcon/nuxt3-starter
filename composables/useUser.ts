import type { User } from '~/types/User'

export function useUser() {
  const { profile } = useAuthApi()

  const user = useState<User | null>('user', () => null)

  async function me() {
    user.value = await profile()
    return user.value
  }

  const isLogged = computed<boolean>(() => {
    return !!user.value
  })

  return {
    me,
    user,
    isLogged,
  }
}
