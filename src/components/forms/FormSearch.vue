<template>
  <div class="relative flex-1 max-w-md">
    <input
      autofocus
      type="text"
      v-model="searchQuery"
      class="w-full h-10 pl-4 pr-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
      :placeholder="placeholder"
    >
    <Search class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500"/>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Search } from 'lucide-vue-next'

const props = defineProps<{
  modelValue: string | number
  placeholder: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const searchQuery = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>