import { ref, computed } from 'vue'
import type { ClientForm } from '@/types/client'
import { INITIAL_FORM_STATE } from '@/constants/Client'

export function useClientForm(initialData?: Partial<ClientForm>) {
    const form = ref<ClientForm>({
        ...INITIAL_FORM_STATE,
        ...initialData
    })

    const addBankAccount = () => {
        form.value.bankAccounts.push({ bank: '', account_name: '', account_type: '' })
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

    const isValid = computed(() => {
        return form.value.code &&
            form.value.type_client &&
            form.value.tax_id &&
            form.value.legal_name
    })

    const resetForm = () => {
        form.value = { ...INITIAL_FORM_STATE }
    }

    return {
        form,
        isValid,
        addBankAccount,
        removeBankAccount,
        addEmail,
        removeEmail,
        addPhone,
        removePhone,
        resetForm
    }
}