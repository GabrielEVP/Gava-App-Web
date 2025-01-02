<template>
  <SideBar>
    <BackButton />
    <div class="flex justify-center">
      <div class="h-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 h-full m-auto">
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white border-b pb-2 mb-4">
                Información del Proveedor
              </h2>
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2">
                  <TextSection title="Código" :content="client.code"/>
                  <TextSection title="Tax ID" :content="client.tax_id"/>
                </div>
                <TextSection title="Nombre Legal" :content="client.legal_name"/>
                <div class="grid grid-cols-2 gap-2">
                  <TextSection title="Tipo de cliente" :content="client.type_client"/>
                  <TextSection title="País" :content="client.country"/>
                </div>
                <TextSection title="Dirección" :content="client.address"/>
                <div class="grid grid-cols-3 gap-2">
                  <TextSection title="Estado" :content="client.state"/>
                  <TextSection title="Ciudad" :content="client.city"/>
                  <TextSection title="Municipio" :content="client.municipality"/>
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <TextSection title="Días de Crédito" :content="client.credit_days"/>
                  <TextSection title="Limite de Crédito" :content="client.credit_limit"/>
                  <TextSection title="Limite de Retencion" :content="client.default_discount"/>
                </div>
                <TextSection title="Notas" :content="client.notes"/>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Cuentas Bancarias</h2>
              <div v-for="(account, index) in client.bankAccounts" :key="index" class="mb-4">
                <div class="grid grid-cols-3 gap-2">
                  <TextSection title="Banco" :content="account.bank"/>
                  <TextSection title="Número de Cuenta" :content="account.account_number"/>
                  <TextSection title="Tipo de Cuenta" :content="account.account_type"/>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Correos Electronicos</h2>
              <div v-for="(email, index) in client.emails" :key="index" class="mb-4">
                <TextSection title="Correo Electrónico" :content="email.address"/>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Teléfonos</h2>
              <div v-for="(phone, index) in client.phones" :key="index" class="mb-4">
                <TextSection title="Teléfono" :content="phone.number"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SideBar>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import TextSection from "@/components/TextSection.vue";
import BackButton from "@/components/buttons/BackButton.vue";

const client = {
  code: 'ABC123',
  tax_id: 'TAX789XYZ',
  legal_name: 'Empresa Ejemplo S.A. de C.V.',
  type_client: 'Corporativo',
  country: 'México',
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
    {bank: 'BBVA', account_number: '1234567890', account_type: 'Cheques'}
  ],
  emails: [
    {address: 'contacto@ejemplo.com'}
  ],
  phones: [
    {number: '+52 55 1234 5678'}
  ]
}
</script>

