import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue';
import LogInView from "@/views/LoginView.vue";
import AboutView from "@/views/AboutView.vue";
import Test1 from '@/views/test/test1.vue';
const routes = [
    {
        path: '/',
        name: '首页',
        component: IndexView
    },
    {
        path: '/login',
        name: '登录界面',
        component: LogInView
    },
    // {
    //     path: '/sys',
    //     name: '管理',
    //     redirect: 'sys/user',
    //     meta: { title: '系统管理', icon: ''},
    //     children: [
    //         {
    //             path: '/user',
    //             name: 'User',
    //             component: () => import('@/views/sys/user.vue'),
    //             meta: { title:'用户管理', icon:''},
    //         },
    //         {
    //             path: '/role',
    //             name: 'Role',
    //             component: () => import('@/views/sys/role.vue'),
    //             meta: { title:'角色管理', icon:''},
    //         }
    //     ]
    // },
    {
        path: '/about',
        name: '主界面',
        component: AboutView,
        redirect: "/about/test1",
        meta: { title:'测试模块', icon:''},
        children: [
            {
                path: 'test1',
                name: 'test1',
                component: Test1,
                meta: { title:'功能点一', icon:''},
            },
            {
                path: 'test2',
                name: 'test2',
                component: () => import('@/views/test/test2.vue'),
                meta: { title:'功能点二', icon:''},
            },
            {
                path: 'test3',
                name: 'test3',
                component: () => import('@/views/test/test3.vue'),
                meta: { title:'功能点三', icon:''},
            },
        ],

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router