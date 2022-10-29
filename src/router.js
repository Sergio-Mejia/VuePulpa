import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import home from './components/Home.vue'

const routes = [
    {
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/home',  
        name: 'home',
        component: home
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
