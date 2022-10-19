import Vue from 'vue'
import App from './App.vue'
import WUI from '../packages'

Vue.use(WUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
