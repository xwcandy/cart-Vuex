import Vue from 'vue'
import App from './App.vue'


// 引入公共样式
import './assets/base.css';

// 引入路由 router.js
import router from './assets/lib/router';
// 引入仓库 store.js
import store from './assets/lib/store';



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载路由对象
  router,
  //挂载仓库对象
  store,
}).$mount('#app')
