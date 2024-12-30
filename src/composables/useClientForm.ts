import { ref, computed } from 'vue';
import type { Client } from '@/types/client';
import { INITIAL_FORM_STATE } from '@/constants/Client';

export function useClientForm() {
    const form = ref<Client>({ ...INITIAL_FORM_STATE });

    const setFormData = (data: Partial<Client>) => {
        Object.assign(form.value, data); // Actualiza dinámicamente
    };

    const resetForm = () => {
        form.value = { ...INITIAL_FORM_STATE };
    };

    const isValid = computed(() => {
        return !!form.value.code &&
            !!form.value.type_client &&
            !!form.value.tax_id &&
            !!form.value.legal_name;
    });

    const addBankAccount = () => {
        form.value.bankAccounts.push({ bank: '', account_name: '', account_type: '' });
    };

    const removeBankAccount = (index: number) => {
        form.value.bankAccounts.splice(index, 1);
    };

    const addEmail = () => {
        form.value.emails.push({ address: '' });
    };

    const removeEmail = (index: number) => {
        form.value.emails.splice(index, 1);
    };

    const addPhone = () => {
        form.value.phones.push({ number: '' });
    };

    const removePhone = (index: number) => {
        form.value.phones.splice(index, 1);
    };

    return {
        form,
        isValid,
        setFormData,
        resetForm,
        addBankAccount,
        removeBankAccount,
        addEmail,
        removeEmail,
        addPhone,
        removePhone,
    };
}