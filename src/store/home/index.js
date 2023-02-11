import { reqCategoryList, reqGetBannerList, reqGetFloorList } from '@/api'
export default {
    namespaced: true,
    // 可以书写业务逻辑，但是不能修改state
    actions: {
        // （小的store对象(context)，传过来的值）
        async getCategoryList(context) {
            let result = await reqCategoryList()
            if (result.code == 200)
                context.commit('GETCATEGORYLIST', result.data)
        },
        // 获取首页轮播图的数据
        async getBannerList(context) {
            let result = await reqGetBannerList()
            // console.log(result)
            if (result.code == 200)
                context.commit('REQGETBANNERLIST', result.data)
        },
        //floor数据
        async getFloorList(context) {
            let result = await reqGetFloorList()
            if (result.code == 200)
                context.commit('GETFLOORLIST', result.data)
        }
    },
    mutations: {
        GETCATEGORYLIST(state, value) {
            state.categoryList = value
        },
        REQGETBANNERLIST(state, value) {
            state.bannerList = value
        },
        GETFLOORLIST(state, value) {
            state.floorList = value
        },
    },
    getters: {
    },
    state: {
        categoryList: [],
        bannerList: [],
        floorList: []
    }
}