<script setup lang="ts">
definePageMeta({
  layout: 'login',
})
const firstVisit = useCookie('firstVisit')
</script>

<template>
  <UContainer class="py-10">
    <UCard class="flex justify-center flex-col">
      <template #header>
        <h1 class="text-4xl font-bold tracking-wide">
          Welcome to Nuxt 3 Starter
        </h1>
        <p>here you can fine some useful examples and use it in your own project</p>
      </template>
      <template #default>
        <UAccordion
          color="primary"
          variant="soft"
          size="xl"
          :items="[{ label: '1. What is Nuxt UI?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '2. Getting Started', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '3. Theming', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '4. Components', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }]"
        />
      </template>
    </UCard>
  </UContainer>
</template>

<style scoped>

</style>
