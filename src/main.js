import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import vuetify from './plugins/vuetify';

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
  vuetify,
  render: h => h(App)
}).$mount('#app')
