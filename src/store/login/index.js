import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        djangoReq({ commit }, params) {
            axios.get('http://localhost:8080/demo/book/').then(req => console.log(req), err => console.log(err.message)
            )
        }
    },
    mutations: {

    },
    state: {},
    getters: {}
}