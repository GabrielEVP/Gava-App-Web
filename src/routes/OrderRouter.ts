import { RouteRecordRaw } from 'vue-router';
import OrdersView from '@/views/order/OrdersView.vue';
import OrderNewView from '@/views/order/OrderNewView.vue';
import OrderEditView from '@/views/order/OrderEditView.vue';
import OrderView from '@/views/order/OrderView.vue';

const OrderRoutes: Array<RouteRecordRaw> = [
    {
        path: '/orders',
        name: 'Orders',
        component: OrdersView,
        meta: { requiresAuth: true },
    },
    {
        path: '/orders/new',
        name: 'OrderNew',
        component: OrderNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/orders/edit/:id',
        name: 'OrderEdit',
        component: OrderEditView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: '/orders/:id',
        name: 'Order',
        component: OrderView,
        meta: { requiresAuth: true },
        props: true,
    },
];

export default OrderRoutes;