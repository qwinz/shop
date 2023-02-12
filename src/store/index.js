import Vue from 'vue'
import Vuex from 'vuex'
import homeVuex from './home'
import searchVuex from './search'
import loginVuex from './login'
Vue.use(Vuex)
// actions-- -> mutations-- -> state
export default new Vuex.Store({
    modules: {
        homeVuex,
        searchVuex,
        loginVuex
    }
})