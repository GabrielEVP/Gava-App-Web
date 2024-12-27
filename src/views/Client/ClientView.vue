<template>
  <SideBar>
    <div class="flex flex-wrap gap-4 items-center mb-5">
      <div class="flex-grow flex items-center gap-2">
        <input autofocus
            type="text"
            v-model="searchQuery"
            class="px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Buscar Banco"
        >
        <button
            @click="handleSearch"
            class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Buscar
        </button>
      </div>

      <router-link to="/client/new" title="Inicio"
                   class="px-4 py-2 text-sm font-medium rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Nuevo Cliente
      </router-link>
    </div>

    <!-- Table -->
    <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 overflow-x-auto h-full">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-100 dark:bg-gray-900">
        <tr>
          <th class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Banco</th>
          <th class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">N Cuenta</th>
          <th class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Tipo</th>
          <th class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Balance</th>
          <th class="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">Acciones</th>
        </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
        <tr v-for="(account, index) in paginatedAccounts" :key="index" class="hover:bg-gray-50 dark:hover:bg-gray-700">
          <td class="px-4 text-sm text-gray-900 dark:text-gray-100">{{ account.banco }}</td>
          <td class="px-4 text-sm text-gray-900 dark:text-gray-100">{{ account.cuenta }}</td>
          <td class="px-4 text-sm text-gray-900 dark:text-gray-100">{{ account.tipo }}</td>
          <td class="px-4 text-sm text-gray-900 dark:text-gray-100">{{ account.balance }}</td>
          <td class="px-4 text-sm space-x-2">
            <div class="flex gap-2 justify-center">
              <button class="p-1.5 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-500" title="Editar">
                <i class="pi pi-pencil text-lg"></i>
              </button>
              <button class="p-1.5 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-500" title="Eliminar">
                <i class="pi pi-trash text-lg"></i>
              </button>
            </div>
          </td>
        </tr>
        <tr v-if="accounts.length === 0">
          <td colspan="5" class="px-4 py-3 text-sm text-center text-gray-500 dark:text-gray-400">
            No se han encontrado resultados
          </td>
        </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex items-center justify-between mt-4 px-4">
        <div class="text-sm text-gray-700 dark:text-gray-300">
          Mostrando {{ startIndex + 1 }} a {{ endIndex }} de {{ accounts.length }} resultados
        </div>
        <div class="flex gap-2">
          <button
              @click="currentPage--"
              :disabled="currentPage === 1"
              class="px-3 py-1 text-sm border rounded hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            Anterior
          </button>
          <button
              @click="currentPage++"
              :disabled="currentPage >= totalPages"
              class="px-3 py-1 text-sm border rounded hover:bg-gray-50 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  </SideBar>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import SideBar from '@/components/SideBar.vue'

const accounts = ref([
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
  {banco: 'Ejemplo Banco', cuenta: '12345678', tipo: 'Ahorros', balance: '1000 $'},
])

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 18

// Pagination logic
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage, accounts.value.length))
const totalPages = computed(() => Math.ceil(accounts.value.length / itemsPerPage))

const paginatedAccounts = computed(() => {
  return accounts.value.slice(startIndex.value, endIndex.value)
})

const handleSearch = () => {
  currentPage.value = 1
}
</script>