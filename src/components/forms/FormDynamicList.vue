<template>
  <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white">{{ title }}</h2>
      <button
          @click="onAdd"
          type="button"
          class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      >
        + {{ addLabel }}
      </button>
    </div>
    <div class="space-y-4">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  addLabel: string
}>()

const emit = defineEmits<{
  (e: 'add'): void
}>()

const onAdd = () => emit('add')
</script>