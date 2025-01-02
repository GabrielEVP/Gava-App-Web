<template>
  <SideBar>
    <div class="h-full flex flex-col">
      <div class="rounded-lg s p-3 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div class="mx-auto flex flex-wrap gap-4 items-center">
          <div class="flex-grow flex gap-2">
            <FormSearch v-model="searchQuery" placeholder="Buscar Proveedor"/>
            <div class="relative">
              <FormFilter :selectFields="selectFields"/>
            </div>
          </div>
          <NewButton label="Nuevo Proveedor" URL="/suppliers/new"/>
        </div>
      </div>
      <TableView
          :headers="tableHeaders"
          :rows="tableRows"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :startIndex="startIndex"
          :endIndex="endIndex"
          :totalItems="suppliers.length"
          @updatePage="updatePage"
          :module="module"
          :message="message"
      />
    </div>
  </SideBar>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
import SideBar from '@/components/SideBar.vue'
import TableView from '@/components/Table.vue'
import NewButton from '@/components/buttons/NewButton.vue'
import FormFilter from '@/components/forms/FormFilter.vue'
import FormSearch from '@/components/forms/FormSearch.vue'

const message = '¿Estás seguro que quieres eliminar este Proveedor?'
const module = 'suppliers'

const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 15
const isFilterOpen = ref(false)

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage, suppliers.value.length))
const totalPages = computed(() => Math.ceil(suppliers.value.length / itemsPerPage))

const paginatedsuppliers = computed(() => {
  return suppliers.value.slice(startIndex.value, endIndex.value)
})

const handleSearch = () => {
  currentPage.value = 1
}

const applyFilters = () => {
  isFilterOpen.value = false
}

const updatePage = (page: number) => {
  currentPage.value = page
}



const tableHeaders = ['Nombre Legal', 'R.I.F', 'Gremio']

const suppliers = ref(Array.from({length: 50}, (_, i) => ({
  legal_name: `Cliente ${i + 1}`,
  rif: Math.floor(10000000 + Math.random() * 90000000).toString(),
  type_client: Math.random() > 0.5 ? 'Natural' : 'Otros',
})))


const selectFields = [
  {
    label: 'Tipo de Cuenta',
    options: [
      {value: '', text: 'Todos'},
      {value: 'ahorro', text: 'Ahorro'},
      {value: 'corriente', text: 'Corriente'}
    ]
  }
]
const tableRows = computed(() => paginatedsuppliers.value.map(client => [
  client.legal_name,
  client.rif,
  client.type_client,
]))

</script>