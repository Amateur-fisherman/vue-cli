import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/styles/main.less'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')



// new Vue({
//     el: '#app',
//     mounted(){
//         FastClick.attach(document.body);
//     },
//     router,
//     store,
//     template: '<App/>',
//     components: {App}
// })
