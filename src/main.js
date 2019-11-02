import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
