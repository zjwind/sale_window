import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'

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
    }
  ]
})
