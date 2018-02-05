import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disable*/
Vue.use(Router)

const routes = [{
   path: '/',redirect:'/login'   //默认跳转此页面
   },{
    path: '/login',
    name:'login',
    component: resolve => require(['@/views/login'], resolve)
   },{
        path: '/index',
        name:'index',
        component: resolve => require(['@/views/index'], resolve)
    }]

const router = new Router({
    mode: 'history',
    routes
})

export default router;