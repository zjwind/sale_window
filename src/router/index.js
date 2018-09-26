import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login'
import Main from '@/view/main'
import UserManage from '@/view/user_manage'
import OrderManage from '@/view/order_manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Login
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/hello',
      name: 'Hello',
      meta: {
        requireAuth: true, // 判断是否需要登录
       },
      component: HelloWorld
    }, {
      path: '/main',
      name: 'Main',
      meta: {
        requireAuth: true, // 判断是否需要登录
       },
      component: Main,
      children:[{
        path: 'user',
        component: UserManage
      },{
        path: 'order',
        component: OrderManage
      }
        
      ]
    }
  ]
})
