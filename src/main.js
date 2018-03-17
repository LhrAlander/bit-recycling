import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import '@/assets/css/normal.css'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import $ from 'jquery'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
