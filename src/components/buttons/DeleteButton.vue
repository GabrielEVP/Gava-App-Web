<template>
  <button
      @click="onConfirm"
      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
  >
    Borrar
  </button>
</template>

<script setup lang="ts">
import {defineEmits} from 'vue';

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>