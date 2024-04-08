<script setup lang="ts">
import { type InferType, object, string } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

type Schema = InferType<typeof schema>

const { login } = useAuthApi()

definePageMeta({
  layout: 'login',
})

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
})

const state = reactive({
  email: 'john@mail.com',
  password: 'changeme',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    await login(event.data)
    navigateTo('/')
  }
  catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen ">
    <UCard class="max-w-md w-full backdrop-blur shadow">
      <template #header>
        <h2 class="text-2xl">
          Login
        </h2>
      </template>
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>
