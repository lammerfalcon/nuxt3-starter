<script setup lang="ts">
const firstVisit = useCookie('firstVisit')
const showAlert = ref(!firstVisit.value)
const items = [
  { label: '1. Packages', slot: 'packages' },
  { label: '2. Showcases', slot: 'showcases' },
  { label: '3. Theming', slot: 'theming' },
]
const showcases = [
  {
    title: '$fetch wrapper composable',
    description: 'Base url — Interceptors — JWT — Refresh token — api service directory',
  },
  {
    title: 'Middleware',
    description: 'Auth middleware — Protected routes',
  },
  {
    title: 'UI state',
    description: 'Nuxt UI — Tailwind — Route Transitions — Color mode',
  },
]
</script>

<template>
  <div>
    <UCard class="flex justify-center flex-col">
      <template #header>
        <h1 class="text-4xl font-bold tracking-wide">
          Welcome to Nuxt 3 Starter
        </h1>
        <p class="text-xl">
          here you can fine some useful examples and use it in your own project
        </p>
      </template>
      <template #default>
        <UAccordion
          color="primary"
          variant="soft"
          size="xl"
          :items="items"
        >
          <template #theming>
            <UAlert
              variant="soft" color="gray" :ui="{ title: 'text-xl', description: 'text-lg' }"
              title="Customizable UI kit" description="You can check Nuxt UI docs for more info"
            />
          </template>
          <template #showcases>
            <div class="grid grid-cols-3 gap-4">
              <UAlert
                v-for="showcase in showcases" variant="soft" color="gray"
                :ui="{ title: 'text-xl', description: 'text-lg' }" :title="showcase.title"
                :description="showcase.description"
              />
            </div>
          </template>
          <template #packages>
            <ul class="text-center text-lg">
              <li>
                Nuxt UI
              </li>
              <li>
                Tailwind
              </li>

              <li>
                Eslint config by Antfu
              </li>
              <li>
                Yup for validation
              </li>
              <li>
                Simple git hooks + lint staged
              </li>
            </ul>
          </template>
        </UAccordion>
      </template>
      <template #footer>
        <div class="flex flex-col gap-4">
          <UAlert
            v-if="showAlert"
            :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }"
            variant="soft" color="yellow" title="This site use cookies for show how cookie based JWT token works. Clicking on '          Ok, lets see what we have
' button you agree with policy of using cookies" @close="showAlert = !showAlert"
          />
          <UButton
            class="self-end"
            @click="() => {
              firstVisit = true
              navigateTo('/login')
            }"
          >
            Ok, lets see what we have
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>

</style>
