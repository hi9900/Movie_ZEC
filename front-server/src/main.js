import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import 'bootstrap/dist/css/bootstrap.min.css';
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false


new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
