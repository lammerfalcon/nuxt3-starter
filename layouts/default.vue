<script setup lang="ts">
const { user, isLogged } = useUser()
</script>

<template>
  <div>
    <header>
      {{ user }}
      {{ isLogged }}
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
