import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/components/Login.vue'
import Dashboard from '/src/components/Dashboard.vue'
import Kongura from '/src/components/Kongura.vue'

const routes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/signup',
        component: Login,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/kongura',
        component: Kongura,
        props: route => ({mode: route.query.q}),
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router