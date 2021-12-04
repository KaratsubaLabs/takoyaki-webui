import { createRouter, createWebHistory } from 'vue-router'
import Login from '/src/components/Login.vue'
import Dashboard from '/src/components/Dashboard.vue'
import Kongura from '/src/components/Kongura.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/kongura',
        name: 'Kongura',
        component: Kongura,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router