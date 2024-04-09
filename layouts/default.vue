<script setup lang="ts">
const { user, isLogged } = useUser()
useHead({
  meta: [
    { name: 'referrer', content: 'no-referrer' },
  ],
})
</script>

<template>
  <div>
    <header>
      <UContainer class="py-7">
        <UAlert
          :description="user?.email"
          :avatar="{ src: user?.avatar }"
          :title="user?.name"
        />
      </UContainer>
      <ul>
        <li>
          <NuxtLink to="/">
            main
          </NuxtLink>
          <NuxtLink to="/login">
            login
          </NuxtLink>
        </li>
      </ul>
    </header>
    <slot />
  </div>
</template>

<style scoped>

</style>
