import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Verification from '@/components/Verification'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/verification',
      name: 'Verification',
      component: Verification
    }
  ]
})
