import Login from '../components/login.vue'
import Register from '../components/register.vue'

import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// 路由表
export const routes = [
    { path: '/register', component: Register },
    { path: '/login', component: Login }
]




export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export function setRouter(app: App) {
    app.use(router)
}


