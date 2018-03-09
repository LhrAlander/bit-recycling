import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Verification from '@/components/Verification'
import Login from '@/page/Login'
import Index from '@/page/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verification,
    },
    {
      path: '/login',
      name: Login,
      component: Login
    }
  ]
})
