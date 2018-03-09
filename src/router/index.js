import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Verification from '@/components/Verification'
<<<<<<< HEAD
import Login from '@/page/login'
import Personal from '@/page/Personal'
=======
import Login from '@/page/Login'
import Index from '@/page/Index'
>>>>>>> a4e966e9f74752693e906907a424f729f8d7bb3b

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
    },
    {
      path: '/personal',
      name: Personal,
      component: Personal
    }
  ]
})
