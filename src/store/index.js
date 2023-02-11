import Vue from 'vue'
import Vuex from 'vuex'
import homeVuex from './home'
import searchVuex from './search'
Vue.use(Vuex)
// actions-- -> mutations-- -> state
export default new Vuex.Store({
    modules: {
        homeVuex,
        searchVuex
    }
})