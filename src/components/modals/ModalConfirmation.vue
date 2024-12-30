<template>
  <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
  >
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-sm lg:max-w-lg">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Confirmar acción
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          {{ message }}
        </p>
        <div class="flex justify-end space-x-4">
          <cancel-button @click="onCancel"/>
          <DeleteButton @click="onConfirm"/>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';
import CancelButton from "@/components/buttons/CancelButton.vue";
import DeleteButton from "@/components/buttons/DeleteButton.vue";

defineProps<{
  isOpen: boolean;
  message: string;
}>();

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();

const onConfirm = () => {
  emit('confirm');
};

const onCancel = () => {
  emit('cancel');
};
</script>

