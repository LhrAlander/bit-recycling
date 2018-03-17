import Vue from 'vue'
import Router from 'vue-router'
import Signin from '@/components/Signin'
import Verification from '@/components/Verification'
import Personal from '@/page/Personal'
import Login from '@/page/Login'
import Index from '@/page/Index'
import Price from '@/page/Price'
import CompanyDetail from '@/page/CompanyDetail'

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
    },
    {
      path: '/price',
      name: Price,
      component: Price
    },
    {
      path: '/companyDetail',
      name: CompanyDetail,
      component: CompanyDetail
    }
  ]
})
