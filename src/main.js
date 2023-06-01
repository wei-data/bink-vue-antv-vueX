import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import SlideVerify from 'vue-monoplasty-slide-verify'

Vue.use(SlideVerify)
Vue.use(Antd)
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(vm)
