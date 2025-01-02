import { RouteRecordRaw } from 'vue-router';
import PurchasesView from '@/views/purchase/PurchasesView.vue';
import PurchaseNewView from '@/views/purchase/PurchaseNewView.vue';
import PurchaseEditView from '@/views/purchase/PurchaseEditView.vue';
import PurchaseView from '@/views/purchase/PurchaseView.vue';

const PurchaseRoutes: Array<RouteRecordRaw> = [
    {
        path: '/purchases',
        name: 'Purchases',
        component: PurchasesView,
        meta: { requiresAuth: true },
    },
    {
        path: '/purchases/new',
        name: 'PurchaseNew',
        component: PurchaseNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/purchases/edit/:id',
        name: 'PurchaseEdit',
        component: PurchaseEditView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: '/purchases/:id',
        name: 'Purchase',
        component: PurchaseView,
        meta: { requiresAuth: true },
        props: true,
    },
];

export default PurchaseRoutes;