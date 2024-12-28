<template>
  <SideBar>
    <div class="h-full flex flex-col">
      <!-- Search Header Section -->
      <div class="rounded-lg s p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div class="mx-auto flex flex-wrap gap-4 items-center">
          <div class="flex-grow flex gap-2">
            <div class="relative flex-1 max-w-md">
              <input
                  autofocus
                  type="text"
                  v-model="searchQuery"
                  class="w-full h-10 pl-4 pr-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  placeholder="Buscar Cliente"
              >
              <Search class="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            </div>
            <div class="relative">
              <button
                  @click="isFilterOpen = !isFilterOpen"
                  class="h-10 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal class="h-4 w-4" />
                Filtros
                <ChevronDown class="h-4 w-4" :class="{ 'rotate-180': isFilterOpen }" />
              </button>

              <!-- Filter Menu -->
              <div v-if="isFilterOpen"
                   class="absolute right-0 top-12 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-10">
                <div class="space-y-4">
                  <div>
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Tipo de Cuenta</label>
                    <select class="w-full h-9 px-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-100">
                      <option value="">Todos</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="corriente">Corriente</option>
                    </select>
                  </div>
                  <div>
                    <label class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">Estado</label>
                    <select class="w-full h-9 px-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-100">
                      <option value="">Todos</option>
                      <option value="activo">Activo</option>
                      <option value="inactivo">Inactivo</option>
                    </select>
                  </div>
                  <div class="flex justify-end gap-2 pt-2">
                    <button
                        class="px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                        @click="isFilterOpen = false"
                    >
                      Cancelar
                    </button>
                    <button
                        class="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        @click="applyFilters"
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <router-link
              to="/client/new"
              class="h-10 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus class="h-4 w-4" />
            Nuevo Cliente
          </router-link>
        </div>
      </div>

      <!-- Table Section -->
      <div class="rounded-lg pt-6 flex-1 flex flex-col min-h-0">
        <div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex-1 flex flex-col">
          <div class="flex-1 overflow-auto">
            <table class="w-full">
              <thead class="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th class="text-left px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300">Nombre Legal</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300">R.I.F</th>
                <th class="text-left px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300">Tipo de Cliente</th>
                <th class="text-center px-6 py-3 text-xs font-semibold text-gray-600 dark:text-gray-300 w-[120px]">Acciones</th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="(clients, index) in paginatedClients"
                  :key="index"
                  class="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
              >
                <td class="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300">{{ clients.legal_name }}</td>
                <td class="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300">{{ clients.rif }}</td>
                <td class="px-6 py-2.5 text-xs text-gray-600 dark:text-gray-300">{{ clients.type_client }}</td>
                <td class="px-6 py-2.5">
                  <div class="flex gap-1 justify-center">
                    <button
                        class="p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors"
                        title="Editar"
                    >
                      <Pencil class="h-4 w-4" />
                    </button>
                    <button
                        class="p-1.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                        title="Eliminar"
                    >
                      <Trash2 class="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination -->
          <div class="flex items-center justify-between px-6 py-3 border-t border-gray-200 dark:border-gray-700">
            <div class="text-xs text-gray-500 dark:text-gray-400">
              Mostrando {{ startIndex + 1 }} a {{ endIndex }} de {{ clients.length }} resultados
            </div>
            <div class="flex gap-2">
              <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="px-3 h-8 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:hover:bg-transparent transition-colors flex items-center gap-1.5"
              >
                <ChevronLeft class="h-4 w-4" />
                Anterior
              </button>
              <button
                  @click="currentPage++"
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
    </div>
  </SideBar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Plus, Pencil, Trash2, ChevronLeft, ChevronRight, SlidersHorizontal, ChevronDown } from 'lucide-vue-next'
import SideBar from '@/components/SideBar.vue'

const clients = ref(Array.from({ length: 400 }, (_, i) => ({
  legal_name: `Cliente ${i + 1}`,
  rif: Math.floor(10000000 + Math.random() * 90000000).toString(),
  type_client: Math.random() > 0.5 ? 'Natural' : 'Otros',
})))

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 13
const isFilterOpen = ref(false)

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage, clients.value.length))
const totalPages = computed(() => Math.ceil(clients.value.length / itemsPerPage))

const paginatedClients = computed(() => {
  return clients.value.slice(startIndex.value, endIndex.value)
})

const handleSearch = () => {
  currentPage.value = 1
}

const applyFilters = () => {
  isFilterOpen.value = false
  // Add your filter logic here
}
</script>