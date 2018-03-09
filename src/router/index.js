import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Verification from '@/components/Verification'
import Login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Login,
      component: Login,
      children: [
        {
          path: '/login',
          name: Login,
          component: Login
        },
        {
          path: '/verification',
          name: 'Verification',
          component: Verification, 
        }
        ,
        {
          path: '/signin',
          name: 'Signin',
          component: Signin, 
        }
      ]
    }
  ]
})
