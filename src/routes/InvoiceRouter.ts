import { RouteRecordRaw } from 'vue-router';
import InvoicesView from '@/views/invoice/InvoicesView.vue';
import InvoiceNewView from '@/views/invoice/InvoiceNewView.vue';
import InvoiceEditView from '@/views/invoice/InvoiceEditView.vue';
import InvoiceView from '@/views/invoice/InvoiceView.vue';

const InvoiceRoutes: Array<RouteRecordRaw> = [
    {
        path: '/invoices',
        name: 'Invoices',
        component: InvoicesView,
        meta: { requiresAuth: true },
    },
    {
        path: '/invoices/new',
        name: 'InvoiceNew',
        component: InvoiceNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/invoices/edit/:id',
        name: 'InvoiceEdit',
        component: InvoiceEditView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: '/invoices/:id',
        name: 'Invoice',
        component: InvoiceView,
        meta: { requiresAuth: true },
        props: true,
    },
];

export default InvoiceRoutes;