import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import clientRoutes from '@/routes/ClientRouter';
import supplierRouter from '@/routes/supplierRouter';
import productRouter from "@/routes/ProductRouter";
import orderRouter from "@/routes/OrderRouter";
import purchaseRouter from "@/routes/PurchaseRouter";
import invoiceRouter from "@/routes/InvoiceRouter";

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
        meta: {requiresAuth: true},
    },

    ...clientRoutes,
    ...supplierRouter,
    ...productRouter,
    ...orderRouter,
    ...purchaseRouter,
    ...invoiceRouter,
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