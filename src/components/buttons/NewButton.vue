<template>
  <router-link
      :to="URL"
      class="h-10 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
  >
    <Plus class="h-4 w-4" />
    {{ label }}
  </router-link>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { defineProps } from 'vue'

defineProps<{
  label: string,
  URL: string
}>()

</script>