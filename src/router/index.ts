import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import RequestForm from '../views/RequestForm.vue'
import Kongura from '../views/Kongura.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    },
    {
        path: '/request',
        component: RequestForm,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    }
  ]
})

export default router
