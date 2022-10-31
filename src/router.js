import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import home from './components/Home.vue'
import login from './components/login.vue'
import about from './components/about.vue'
import signup from './components/signup.vue'

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
    {
        path: '/user/login',  
        name: 'login',
        component: login
    },
    {
        path: '/about',  
        name: 'about',
        component: about
    },
    {
        path: '/signup',  
        name: 'signup',
        component: signup
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
