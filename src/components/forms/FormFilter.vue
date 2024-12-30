<template>
  <div>
    <button
        @click="toggleFilter"
        class="h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
    >
      <SlidersHorizontal class="h-4 w-4"/>
      Filtros
      <ChevronDown class="h-4 w-4" :class="{ 'rotate-180': isFilterOpen }"/>
    </button>
    <div v-if="isFilterOpen"
         class="absolute right-0 top-12 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-10">
      <div class="space-y-4">
        <div v-for="(selectField, index) in selectFields" :key="index">
          <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">{{ selectField.label }}</label>
          <select class="w-full h-9 px-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-100">
            <option v-for="option in selectField.options" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <CancelButton @click="toggleFilter"/>
          <AcceptButton @click="applyFilters" :disabled="false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {SlidersHorizontal, ChevronDown} from 'lucide-vue-next'
import CancelButton from '@/components/buttons/CancelButton.vue'
import AcceptButton from '@/components/buttons/AcceptButton.vue'

const props = defineProps<{
  selectFields: { label: string, options: { value: string, text: string }[] }[]
}>()

const isFilterOpen = ref(false)

const toggleFilter = () => {
  isFilterOpen.value = !isFilterOpen.value
}

const applyFilters = () => {
  isFilterOpen.value = false
  // Add your filter logic here
}
</script>