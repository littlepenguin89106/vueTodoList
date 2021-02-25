import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router)
Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
