import { createRouter, createWebHistory } from 'vue-router'
import Join from '../components/Join'
import Chat from '../components/Chat'

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