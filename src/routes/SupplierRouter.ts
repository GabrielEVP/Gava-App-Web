import { RouteRecordRaw } from 'vue-router';
import SuppliersView from '@/views/supplier/SuppliersView.vue';
import SupplierNewView from '@/views/supplier/SupplierNewView.vue';
import SupplierEditView from '@/views/supplier/SupplierEditView.vue';
import SupplierView from '@/views/supplier/SupplierView.vue';

const SupplierRoutes: Array<RouteRecordRaw> = [
    {
        path: '/suppliers',
        name: 'Suppliers',
        component: SuppliersView,
        meta: { requiresAuth: true },
    },
    {
        path: '/suppliers/new',
        name: 'SupplierNew',
        component: SupplierNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/suppliers/edit/:id',
        name: 'SupplierEdit',
        component: SupplierEditView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: '/suppliers/:id',
        name: 'Supplier',
        component: SupplierView,
        meta: { requiresAuth: true },
        props: true,
    },
];

export default SupplierRoutes;