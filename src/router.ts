import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import ClientView from '@/views/Client/ClientView.vue';
import ClientNewView from '@/views/Client/ClientNewView.vue';
import ProductView from "@/views/ProductView.vue";
import InvoiceView from "@/views/InvoiceView.vue";
import OrderView from "@/views/OrderView.vue";
import SupplierView from "@/views/SupplierView.vue";
import PurchaseView from "@/views/PurchaseView.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login',
        component: LoginView,
    },
    {
        path: '/home',
        name: 'Home',
        component: HomeView,
        meta: { requiresAuth: true },
    },
    {
        path: '/client',
        name: 'Client',
        component: ClientView,
        meta: { requiresAuth: true },
    },
    {
        path: '/client/new',
        name: 'ClientNew',
        component: ClientNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/invoice',
        name: 'Invoice',
        component: InvoiceView,
        meta: { requiresAuth: true },
    },
    {
        path: '/order',
        name: 'Order',
        component: OrderView,
        meta: { requiresAuth: true },
    },
    {
        path: '/supplier',
        name: 'Supplier',
        component: SupplierView,
        meta: { requiresAuth: true },
    },
    {
        path: '/product',
        name: 'Product',
        component: ProductView,
        meta: { requiresAuth: true },
    },
    {
        path: '/purchase',
        name: 'Purchase',
        component: PurchaseView,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('access_token');

    if (to.meta.requiresAuth && !token) {
        next('/');
    } else {
        next();
    }
});

export default router;