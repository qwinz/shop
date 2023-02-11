import Vue from 'vue'
import App from './App.vue'
import element from './Element'
// import animated from 'animate.css';
import router from '@/router'
import store from '@/store'
// 引入全局组件
import SlideNav from '@/components/common/SlideNav'
import Ad from '@/components/common/Ad'
import Pagination from '@/components/common/pagination'
import HomeToolBar from '@/components/common/HomeToolBar';
import '@/mock/mockServe';
import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(animated);
Vue.use(element)
// 注册全局组件
Vue.component('SlideNav', SlideNav)
Vue.component('Pagination', Pagination)
Vue.component('HomeToolBar', HomeToolBar)
Vue.component('Ad', Ad)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
