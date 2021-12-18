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
        path: '/signup',
        name: 'SignUp',
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
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'RedirectToDashboard',
        redirect: '/dashboard'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router