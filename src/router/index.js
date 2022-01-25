import { createRouter, createWebHistory } from 'vue-router'
import Join from '../views/Join'
import Chat from '../views/Chat'

const routes = [
    {
        path: '/',
        name: 'join',
        component: Join
    },
    {
        path: '/chat',
        name: 'chat',
        component: Chat
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router