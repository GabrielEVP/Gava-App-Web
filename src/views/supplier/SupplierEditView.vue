<template>
  <SideBar>
    <BackButton />
    <div class="flex justify-center">
      <form @submit.prevent="handleSubmit" class="h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 h-full m-auto">
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2 mb-4">
                Editar Información del Cliente
              </h2>
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2">
                  <FormField
                      v-model="form.code"
                      id="code"
                      label="Código"
                      required
                      placeholder="Escribe el codigo"
                  />
                  <FormField
                      v-model="form.tax_id"
                      id="tax_id"
                      label="Tax ID"
                      required
                      placeholder="Enter Tax ID"
                  />
                </div>
                <FormField
                    v-model="form.legal_name"
                    id="legal_name"
                    label="Nombre Legal"
                    required
                    placeholder="Escribe el nombre legal"
                />
                <div class="grid grid-cols-2 gap-2">
                  <FormSelect
                      id="type_client"
                      label="Tipo de cliente"
                      placeholder="Selecciona un tipo de cliente"
                      :options="CLIENT_TYPES"
                      v-model="form.type_client"
                      :optionKey="(type) => type.value"
                      :optionValue="(type) => type.value"
                      :optionLabel="(type) => type.label"
                  />
                  <FormSelect
                      id="country"
                      label="País"
                      placeholder="Selecciona un País"
                      :options="COUNTRIES"
                      v-model="form.country"
                      :optionKey="(country) => country.code"
                      :optionValue="(country) => country.code"
                      :optionLabel="(country) => `${country.flag} ${country.name}`"
                  />
                </div>
                <FormField
                    v-model="form.address"
                    id="address"
                    label="Dirección"
                    placeholder="Escribe la dirección"
                />
                <div class="grid grid-cols-3 gap-2">
                  <FormField
                      v-model="form.state"
                      id="state"
                      label="Estado"
                      placeholder="Escribe el Estado"
                  />
                  <FormField
                      v-model="form.city"
                      id="city"
                      label="Ciudad"
                      placeholder="Escribe la Ciudad"
                  />
                  <FormField
                      v-model="form.municipality"
                      id="municipality"
                      label="Municipio"
                      placeholder="Escribe el Municipio"
                  />
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <FormField
                      v-model="form.credit_days"
                      id="credit_days"
                      label="Días de Crédito"
                      type="number"
                      placeholder="Escribe los días de crédito"
                  />
                  <FormField
                      v-model="form.credit_limit"
                      id="credit_limit"
                      label="Limite de Crédito"
                      type="number"
                      placeholder="Escribe el limite de crédito"
                  />
                  <FormField
                      v-model="form.retention_limit"
                      id="credit_limit"
                      label="Limite de Retención"
                      type="number"
                      placeholder="Escribe el limite de Retención"
                  />
                </div>
                <FormTextArea
                    id="notes"
                    label="Notas"
                    placeholder="Escribe las Notas"
                    v-model="form.notes"
                    :rows="4"
                />
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <BankAccountsList
                :accounts="form.bankAccounts"
                @add="addBankAccount"
                @remove="removeBankAccount"
            />
            <FormDynamicList title="Correos Electronicos" add-label="Agregar Correo" @add="addEmail">
              <div
                  v-for="(email, index) in form.emails"
                  :key="index"
                  class="mb-4 flex items-center space-x-2"
              >
                <FormField
                    v-model="email.address"
                    :id="'email_' + index"
                    label="Correo Electrónico"
                    type="email"
                    placeholder="Enter email address"
                    class="flex-grow"
                />
                <button
                    v-if="form.emails.length > 1"
                    @click="removeEmail(index)"
                    type="button"
                    class="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Borrar
                </button>
              </div>
            </FormDynamicList>
            <FormDynamicList title="Teléfonos" add-label="Agregar Teléfonos" @add="addPhone">
              <div
                  v-for="(phone, index) in form.phones"
                  :key="index"
                  class="mb-4 flex items-center space-x-2"
              >
                <FormField
                    v-model="phone.number"
                    :id="'phone_' + index"
                    label="Teléfono"
                    type="tel"
                    placeholder="Enter phone number"
                    class="flex-grow"
                />
                <button
                    v-if="form.phones.length > 1"
                    @click="removePhone(index)"
                    type="button"
                    class="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                >
                  Borrar
                </button>
              </div>
            </FormDynamicList>
          </div>
        </div>
        <div class="mt-3 flex justify-end space-x-3 mb-2">
          <CancelButton/>
          <AcceptButton
              :disabled="!isValid"
          />
        </div>
      </form>
    </div>
  </SideBar>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import SideBar from '@/components/SideBar.vue'
import FormField from '@/components/forms/FormField.vue'
import FormDynamicList from '@/components/forms/FormDynamicList.vue'
import BankAccountsList from '@/components/client/BankAccountsList.vue'
import FormSelect from '@/components/forms/FormSelect.vue';
import FormTextArea from '@/components/forms/FormTextArea.vue';
import CancelButton from "@/components/buttons/CancelButton.vue";
import AcceptButton from "@/components/buttons/AcceptButton.vue";

import {CLIENT_TYPES} from '@/constants/Client'
import {COUNTRIES} from '@/constants/Countries'
import { useClientForm } from '@/composables/useClientForm';
import BackButton from "@/components/buttons/BackButton.vue";

const client: Client = {
  code: 'ABC123',
  tax_id: 'TAX789XYZ',
  legal_name: 'Empresa Ejemplo S.A. de C.V.',
  type_client: 'NT',
  country: 'VE',
  address: 'Av. Ejemplo #123, Col. Centro',
  state: 'Ciudad de México',
  city: 'CDMX',
  municipality: 'Cuauhtémoc',
  credit_days: 30,
  credit_limit: 100000,
  default_tax_rate: 16,
  default_discount: 0,
  notes: 'Cliente preferente desde 2020',
  bankAccounts: [
    { bank: 'BBVA', account_name: 'Cuenta Ejemplo', account_type: 'Cheques' }
  ],
  emails: [
    { address: 'contacto@ejemplo.com' }
  ],
  phones: [
    { number: '+52 55 1234 5678', type: 'mobile' },
    { number: '+52 55 1234 5678', type: 'mobile' }
  ]
};

const {
  form,
  isValid,
  setFormData,
  resetForm,
  addBankAccount,
  removeBankAccount,
  addEmail,
  removeEmail,
  addPhone,
  removePhone
} = useClientForm();

onMounted(() => {
  setFormData(client);
});

const handleSubmit = () => {
  console.log('Formulario enviado:', form.value);
};

const handleCancel = () => {
  resetForm();
};
</script>