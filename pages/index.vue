<script lang="ts" setup>
useHead({
  meta: [
    { name: 'referrer', content: 'no-referrer' },
  ],
})
const { list } = useCategoriesApi()
const { data: categories } = useLazyAsyncData('categories', async () => list())
</script>

<template>
  <UContainer class="grid grid-cols-4 gap-2 ">
    <div v-for="category in categories" class="relative rounded-xl">
      <UBadge variant="solid" size="lg" :label="category.name" color="primary" class="absolute top-2 left-2" />
      <NuxtImg class="w-full h-48 object-cover rounded-xl" fit="cover" :src="category.image" :alt="category.image" />
    </div>
  </UContainer>
</template>
