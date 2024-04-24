<script setup lang="ts">
const { user, isLogged } = useUser()
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
const themeIcon = computed(() => isDark.value ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid')
useHead({
  meta: [
    { name: 'referrer', content: 'no-referrer' },
  ],
})

function changeColorMode() {
  return isDark.value = !isDark.value
}

const links = computed(() => [
  [{
    label: 'Welcome',
    icon: 'i-heroicons-chart-bar',
    to: '/welcome',
  }, {
    label: 'Login',
    icon: 'i-heroicons-command-line',
    to: '/login',
  }, {
    label: 'Protrected',
    icon: 'i-heroicons-home',
    to: '/',
  }],
  [
    isLogged ? { label: user.value?.email } : { label: 'Guest' },
    {
      icon: themeIcon.value,
      click: changeColorMode,
    },
  ],
])
</script>

<template>
  <div>
    <header class="pb-7">
      <UHorizontalNavigation :links="links" />
    </header>
    <slot />
  </div>
</template>

<style scoped>

</style>
