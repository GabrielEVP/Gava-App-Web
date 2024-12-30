<template>
  <button
      type="button"
      class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      :disabled="disabled"
  >
    Aceptar
  </button>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';

defineProps<{
  disabled: boolean;
}>();
</script>