interface ClientAccountBank {
    bank: string;
    account_name: string;
    account_type: string;
}

interface ClientEmail {
    address: string;
    primary?: boolean;
}

interface ClientPhone {
    number: string;
    type?: 'mobile' | 'office' | 'home';
    primary?: boolean;
}

interface Client {
    code: string;
    type_client: string;
    tax_id: string;
    legal_name: string;
    country: string;
    address: string;
    state: string;
    city: string;
    municipality: string;
    credit_days: number;
    credit_limit: number;
    default_tax_rate: number;
    default_discount: number;
    notes: string;
    bankAccounts: ClientAccountBank[];
    emails: ClientEmail[];
    phones: ClientPhone[];
}

export { Client };