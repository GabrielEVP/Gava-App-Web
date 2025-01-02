import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import ProductView from "@/views/product/ProductView.vue";
import InvoiceView from "@/views/invoice/InvoiceView.vue";
import OrderView from "@/views/order/OrderView.vue";
import PurchaseView from "@/views/purchase/PurchaseView.vue";
import clientRoutes from '@/routes/ClientRouter';
import supplierRouter from '@/routes/supplierRouter';
import productRouter from "@/routes/ProductRouter";

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
    ...clientRoutes,
    ...supplierRouter,
    ...productRouter,

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