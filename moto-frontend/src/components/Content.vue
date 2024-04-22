<script setup>
  import { defineProps } from "vue";
  const {content} = defineProps(['content'])
</script>

<template>
  <div class="mx-auto max-w-7xl sm:px-6 sm:py-4 lg:py-6 lg:px-8">
    <div class="bg-whitish py-24 sm:py-32 rounded-md">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <p class="text-base font-semibold leading-7 text-indigo-600">{{content.header}}</p>
          <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{{content.title}}</h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">{{content.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  