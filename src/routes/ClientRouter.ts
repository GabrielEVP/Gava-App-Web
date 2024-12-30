import { RouteRecordRaw } from 'vue-router';
import ClientsView from '@/views/client/ClientsView.vue';
import ClientNewView from '@/views/client/ClientNewView.vue';
import ClientEditView from '@/views/client/ClientEditView.vue';
import ClientView from '@/views/client/ClientView.vue';

const ClientRoutes: Array<RouteRecordRaw> = [
    {
        path: '/clients',
        name: 'Clients',
        component: ClientsView,
        meta: { requiresAuth: true },
    },
    {
        path: '/clients/new',
        name: 'ClientNew',
        component: ClientNewView,
        meta: { requiresAuth: true },
    },
    {
        path: '/clients/edit/:id',
        name: 'ClientEdit',
        component: ClientEditView,
        meta: { requiresAuth: true },
        props: true,
    },
    {
        path: '/clients/:id',
        name: 'Client',
        component: ClientView,
        meta: { requiresAuth: true },
        props: true,
    },
];

export default ClientRoutes;