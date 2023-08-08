import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/Login.vue'

const routes = [
    // 根目录重定向
    {
        path: '/',
        redirect: 'login',
    },
    // 登录路由
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    // 首页路由
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/Index.vue') // 懒加载
    },
        // 学校查询
    {
        path: '/schoolQuery',
        name: 'schoolQuery',
        component: ()=>import('@/views/SchoolQuery.vue')
    },
    // 用户查询
    {
        path: '/userQuery',
        name: 'userQuery',
        component: ()=>import('@/views/UserQuery.vue')
    },
    // 作业数据
    {
        path: '/task',
        name: 'task',
        component: ()=>import('@/views/Task.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
