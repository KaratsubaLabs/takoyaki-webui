import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import RequestForm from '../views/RequestForm.vue'
import Confirm from '../views/Confirm.vue'

import Instances from '../views/Instances.vue'

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
        children: [
            {
                path: '',
                redirect: '/dashboard/overview',
            },
            {
                path: 'Overview',
                component: Instances,
            },
            {
                path: 'instances',
                component: Instances,
            },
            {
                path: 'volumes',
                component: Instances,
            },
            {
                path: 'images',
                component: Instances,
            },
            {
                path: ':pathMatch(.*)*',
                redirect: '/dashboard/overview',
            },
        ]
    },
    {
        path: '/confirm',
        component: Confirm,
    },
    {
        path: '/request',
        component: RequestForm,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login'
    },
  ]
})

export default router
