<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
      {{ label }}
    </label>
    <select
        :id="id"
        :value="modelValue"
        @change="updateValue($event)"
        class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white text-black"
    >
      <option :value="null" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="optionKey(option)" :value="optionValue(option)">
        {{ optionLabel(option) }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  id?: string;
  label?: string;
  placeholder?: string;
  options: any[];
  modelValue: any;
  optionKey?: (option: any) => string | number;
  optionValue?: (option: any) => any;
  optionLabel?: (option: any) => string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit('update:modelValue', target.value);
};
</script>