<template>
  <FormDynamicList title="Cuentas Bancarías" add-label="Agregar Cuenta" @add="onAdd">
    <div
        v-for="(account, index) in accounts"
        :key="index"
        class="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
            v-model="account.bank"
            :id="'bank_' + index"
            label="Banco"
            placeholder="Escribe el nombre del banco"
        />
        <FormField
            v-model="account.account_name"
            :id="'account_name_' + index"
            label="Número de Cuenta"
            placeholder="Escribe el número de cuenta"
        />
        <FormField
            v-model="account.account_type"
            :id="'account_type_' + index"
            label="Tipo de Cuenta"
            placeholder="Escribe el tipo de cuenta"
        />
      </div>
      <button
          v-if="accounts.length > 1"
          @click="onRemove(index)"
          type="button"
          class="mt-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
      >
        Borrar
      </button>
    </div>
  </FormDynamicList>
</template>

<script setup lang="ts">
import FormDynamicList from '../forms/FormDynamicList.vue'
import FormField from '../forms/FormField.vue'

defineProps<{
  accounts: BankAccount[]
}>()

const emit = defineEmits<{
  (e: 'add'): void
  (e: 'remove', index: number): void
}>()

const onAdd = () => emit('add')
const onRemove = (index: number) => emit('remove', index)
</script>