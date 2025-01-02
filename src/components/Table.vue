<template>
  <div class="rounded-lg pt-6 flex-1 flex flex-col min-h-0">
    <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex-1 flex flex-col">
      <div class="flex-1 overflow-auto">
        <table class="w-full">
          <thead class="top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <tr>
              <th
                v-for="(header, index) in headers"
                :key="index"
                class="text-left px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300"
              >
                {{ header }}
              </th>
              <th class="text-center px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, rowIndex) in rows"
              :key="rowIndex"
              class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <td
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                class="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300"
              >
                {{ cell }}
              </td>
              <td class="px-6 py-2.5">
                <div class="flex gap-1 justify-center">
                  <button
                    class="p-1.5 text-black dark:text-white hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                    title="Ver"
                    @click="navigateToModule(row[1])"
                  >
                    <Eye class="h-4 w-4" />
                  </button>
                  <button
                    class="p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                    title="Editar"
                    @click="navigateToModuleEdit(row[1])"
                  >
                    <Pencil class="h-4 w-4" />
                  </button>
                  <button
                    class="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                    title="Eliminar"
                    @click="openModal"
                  >
                    <Trash2 class="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex items-center justify-between px-6 py-3 border-t border-gray-200 dark:border-gray-700">
        <div class="text-xs text-gray-500 dark:text-gray-400">
          Mostrando {{ startIndex + 1 }} a {{ endIndex }} de {{ totalItems }} resultados
        </div>
        <div class="flex gap-2">
          <button
            @click="emit('updatePage', currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-3 h-8 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1.5"
          >
            <ChevronLeft class="h-4 w-4" />
            Anterior
          </button>
          <button
            @click="emit('updatePage', currentPage + 1)"
            :disabled="currentPage >= totalPages"
            class="px-3 h-8 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1.5"
          >
            Siguiente
            <ChevronRight class="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <ConfirmationModal
    :isOpen="isModalOpen"
    :message="message"
    @confirm="handleDeleteConfirmation"
    @cancel="closeModal"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { defineProps, defineEmits } from 'vue'
import { useRouter } from 'vue-router'
import { Eye, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import ConfirmationModal from '@/components/modals/ModalConfirmation.vue'

const props = defineProps<{
  headers: string[],
  rows: string[][],
  currentPage: number,
  totalPages: number,
  startIndex: number,
  endIndex: number,
  totalItems: number,
  module: string,
  message: string
}>()

const emit = defineEmits(['updatePage'])
const router = useRouter()

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}

const handleDeleteConfirmation = () => {
  closeModal()
}

const navigateToModule = (id: string) => {
  router.push(`/${props.module}/${id}`)
}

const navigateToModuleEdit = (id: string) => {
  router.push(`/${props.module}/edit/${id}`)
}
</script>