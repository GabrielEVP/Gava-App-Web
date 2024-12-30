<template>
  <div class="p-4">
    <button
        @click="router.back()"
        class="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
    >
      <ArrowLeft class="w-5 h-5" />
      <span>Volver</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const router = useRouter()
</script>