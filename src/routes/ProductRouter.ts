import { RouteRecordRaw } from 'vue-router';
import ProductsView from '@/views/product/ProductsView.vue';
import ProductNewView from '@/views/product/ProductNewView.vue';
import ProductEditView from '@/views/product/ProductEditView.vue';
import ProductView from '@/views/product/ProductView.vue';

const ProductRoutes: Array<RouteRecordRaw> = [
    {
        path: '/products',
        name: 'Products',
        component: ProductsView,
        meta: { requiresAuth: true },
    },
    {
        path: '/products/new',
        name: 'ProductNew',
        component: ProductNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/products/edit/:id',
        name: 'ProductEdit',
        component: ProductEditView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: '/products/:id',
        name: 'Product',
        component: ProductView,
        meta: { requiresAuth: true },
        props: true,
    },
];

export default ProductRoutes;