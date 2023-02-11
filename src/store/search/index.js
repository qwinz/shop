import { reqGetSearchList } from '@/api';
export default {
    namespaced: true,
    actions: {
        async getSearchList(context, params = {}) {
            let result = await reqGetSearchList(params)
            if (result.code == 200)
                context.commit('GETSEARCHLIST', result.data)
        }
    },
    mutations: {
        GETSEARCHLIST(state, value) {
            state.searchList = value
        }

    },
    state: {
        searchList: {}
    },
    // 简化数据
    getters: {
        // 参数中的state是小仓库中的state
        goodsList(state) {
            return state.searchList.goodsList || []
        },
        trademarkList(state) {
            return state.searchList.trademarkList || []
        },
        attrsList(state) {
            return state.searchList.attrsList || []
        }
    }
}