<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {{ label }}
    </label>
    <textarea
        :id="id"
        :value="modelValue"
        @input="updateValue($event)"
        :rows="rows"
        :placeholder="placeholder"
        class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-black"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';

defineProps<{
  id: string;
  label: string;
  placeholder: string;
  modelValue: string;
  rows: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value);
};
</script>