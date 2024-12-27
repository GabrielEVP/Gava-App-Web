<template>
  <SideBar>
    <div class="flex justify-center">
      <form @submit.prevent="submitForm" class="h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 h-full m-auto">
          <!-- Static Content (Left Side) -->
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2 mb-4">Información del Cliente</h2>
              <div class="space-y-4">
                <div>
                  <label for="legal_name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Razón Social <span class="text-red-500">*</span>
                  </label>
                  <input
                      id="legal_name"
                      v-model="form.legal_name"
                      type="text"
                      required
                      class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Escribe la Razon Social"
                  />
                </div>
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Nombre Comercial
                  </label>
                  <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Escbribe el Nombre Comercial"
                  />
                </div>
                <div>
                  <label for="vat_number" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Tasa de impuesto
                  </label>
                  <input
                      id="vat_number"
                      v-model="form.vat_number"
                      type="text"
                      class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Escribe la Tasa de Impuesto"
                  />
                </div>
                <div>
                  <label for="registration_number" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Número de Registro
                  </label>
                  <input
                      id="registration_number"
                      v-model="form.registration_number"
                      type="text"
                      class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Escribe el Número de Registro"
                  />
                </div>
                <div>
                  <label for="country" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    País
                  </label>
                  <select
                      id="country"
                      v-model="form.country"
                      class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Selecciona un País</option>
                    <option v-for="country in countries" :key="country.code" :value="country.code">
                      {{ country.flag }} {{ country.name }}
                    </option>
                  </select>
                </div>
                <div>
                  <label for="notes" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Notas
                  </label>
                  <textarea
                      id="notes"
                      v-model="form.notes"
                      rows="4"
                      class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Escribe Notas adicionales"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Dynamic Content (Right Side) -->
          <div class="space-y-6 sm:mt-6 mt-0">
            <!-- Dynamic Bank Accounts Container -->
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Cuentas Bancarias</h2>
                <button @click.prevent="addBankAccount" type="button" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  + Agregar Cuenta
                </button>
              </div>
              <div v-for="(account, index) in form.bankAccounts" :key="index" class="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label :for="'account_name_' + index" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nombre de la Cuenta
                    </label>
                    <input
                        :id="'account_name_' + index"
                        v-model="account.name"
                        type="text"
                        class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Escribe el Nombre de la Cuenta"
                    />
                  </div>
                  <div>
                    <label :for="'account_number_' + index" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Número de Cuenta
                    </label>
                    <input
                        :id="'account_number_' + index"
                        v-model="account.number"
                        type="text"
                        class="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Escribe el Número de Cuenta"
                    />
                  </div>
                </div>
                <button
                    v-if="form.bankAccounts.length > 1"
                    @click.prevent="removeBankAccount(index)"
                    type="button"
                    class="mt-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Eliminar
                </button>
              </div>
            </div>

            <!-- Dynamic Emails Container -->
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Emails</h2>
                <button @click.prevent="addEmail" type="button" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  + Agregar Emails
                </button>
              </div>
              <div v-for="(email, index) in form.emails" :key="index" class="mb-4 flex items-center space-x-2">
                <input
                    :id="'email_' + index"
                    v-model="email.address"
                    type="email"
                    class="flex-grow px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Escibe la dirección de correo"
                />
                <button
                    v-if="form.emails.length > 1"
                    @click.prevent="removeEmail(index)"
                    type="button"
                    class="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Eliminar
                </button>
              </div>
            </div>

            <!-- Dynamic Phone Numbers Container -->
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Teléfonos</h2>
                <button @click.prevent="addPhone" type="button" class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  + Agregar Teléfono
                </button>
              </div>
              <div v-for="(phone, index) in form.phones" :key="index" class="mb-4 flex items-center space-x-2">
                <input
                    :id="'phone_' + index"
                    v-model="phone.number"
                    type="tel"
                    class="flex-grow px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Escibe el número de teléfono"
                />
                <button
                    v-if="form.phones.length > 1"
                    @click.prevent="removePhone(index)"
                    type="button"
                    class="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="mt-3 flex justify-end space-x-3 mb-2">
          <button
              type="button"
              class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
              type="submit"
              class="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Aceptar
          </button>
        </div>
      </form>
    </div>
  </SideBar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'

const form = ref({
  legal_name: '',
  name: '',
  vat_number: '',
  registration_number: '',
  country: '',
  notes: '',
  bankAccounts: [{ name: '', number: '' }],
  emails: [{ address: '' }],
  phones: [{ number: '' }],
})

const countries = [
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
  { code: 'CU', name: 'Cuba', flag: '🇨🇺' },
  { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
  { code: 'SV', name: 'El Salvador', flag: '🇸🇻' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
  { code: 'HT', name: 'Haiti', flag: '🇭🇹' },
  { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
  { code: 'JM', name: 'Jamaica', flag: '🇯🇲' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
  { code: 'PA', name: 'Panama', flag: '🇵🇦' },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },{ code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: 'PR', name: 'Puerto Rico', flag: '🇵🇷' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
]

const addBankAccount = () => {
  form.value.bankAccounts.push({ name: '', number: '' })
}

const removeBankAccount = (index: number) => {
  form.value.bankAccounts.splice(index, 1)
}

const addEmail = () => {
  form.value.emails.push({ address: '' })
}

const removeEmail = (index: number) => {
  form.value.emails.splice(index, 1)
}

const addPhone = () => {
  form.value.phones.push({ number: '' })
}

const removePhone = (index: number) => {
  form.value.phones.splice(index, 1)
}

const submitForm = () => {
  console.log('Form submitted:', form.value)
  // Add your form submission logic here
}
</script>