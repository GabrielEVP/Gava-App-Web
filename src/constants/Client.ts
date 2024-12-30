export const CLIENT_TYPES = [
    { value: 'NT', label: 'Natural' },
    { value: 'JU', label: 'Jurídico' },
    { value: 'GB', label: 'Gobierno' },
    { value: 'OT', label: 'Otros' }
] as const

export const INITIAL_FORM_STATE: ClientForm = {
    code: '',
    type_client: '1',
    tax_id: '',
    legal_name: '',
    country: '',
    address: '',
    state: '',
    city: '',
    municipality: '',
    credit_days: 0,
    credit_limit: 0,
    default_tax_rate: 0,
    default_discount: 0,
    notes: '',
    bankAccounts: [{ bank: '', account_name: '', account_type: '' }],
    emails: [{ address: '' }],
    phones: [{ number: '' }]
}