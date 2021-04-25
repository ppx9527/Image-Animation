import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './plugins/base'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.config.productionTip = false

// 设置请求根域名，有bug，ts要报错，但确实设置得起
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
Vue.http.options.root = 'http://127.0.0.1:5000'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
