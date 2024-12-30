<template>
  <div>
    <p class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ title }}</p>
    <p class="w-full py-1 rounded-md dark:text-white text-black">
      {{ content }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  content: string
}>()
</script>
