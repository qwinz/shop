<template>
    <div class="searchPage">
        <div class="container">
            <slideNav />
            <searchFilter :categoryName="params.categoryName" :keyword="params.keyword" />
            <goodsList :goodsList="goodsList" />
            <Pagination />
        </div>
    </div>
</template>

<script>
import searchFilter from './searchFilter'
import goodsList from './goodsList'
import { mapGetters } from 'vuex'
export default {
    name: 'Search',
    components: { searchFilter, goodsList },
    data() {
        return {
            // 请求参数
            params: {
                "category1Id": "",
                "category2Id": "",
                "category3Id": "",
                // 分类名字
                "categoryName": "",
                // 关键字
                "keyword": "",
                // 排序
                "order": "",
                "pageNo": 1,
                "pageSize": 12,
                // 平台售卖属性携带参数
                "props": [],
                "trademark": ""
            }
        }
    },
    methods: {
        // 向服务器根据参数不同发起请求
        getData() {
            // 搜索结果数据
            this.$store.dispatch('searchVuex/getSearchList', this.params)
        },
        // 关闭面包屑
        closeBread() {
            this.params.categoryName = ''
            this.params.category1Id = undefined
            this.params.category2Id = undefined
            this.params.category3Id = undefined
            this.getData()
            if (this.$route.params) this.$router.push({ name: 'search', params: this.$route.params })
        },
        closeKeyword() {
            this.params.keyword = undefined
            this.getData()
            // 通知兄弟组件清除关键字
            this.$bus.$emit('clearKeyword')
        },
        //  排序
        sortByNormal() {
            this.params.order = ''
            this.getData()
        },
        sortByPrice(bool) {
            if (bool)
                this.params.order = '2:desc'
            else
                this.params.order = '2:asc'
            this.getData()
        },
        // 批量获取dom元素
        getDomList(...className) {
            let domList = []
            className.forEach(domName => {
                domList.push(document.querySelector(`.${domName}`))
            });
            return domList.length == 1 ? domList[0] : domList
        },
        // 批量设置don元素
        setDomNone(domList) {
            let categoryItemTitle = document.querySelector('.categoryItemTitle')
            domList.forEach(dom => {
                dom.onmouseenter = () => categoryItemTitle.style.display = 'none'
            });
        },
    },
    computed: {
        ...mapGetters('searchVuex', ['goodsList', 'trademarkList', 'attrsList'])
    },
    watch: {
        $route: {
            deep: true,
            handler() {
                Object.assign(this.params, this.$route.params, this.$route.query)
                console.log('地址变化后的route：', this.$route)
                this.getData()
                // 置空其他id
                this.params.category1Id = ''
                this.params.category2Id = ''
                this.params.category3Id = ''
            }
        }
    },
    beforeMount() {
        Object.assign(this.params, this.$route.params, this.$route.query)
    },
    mounted() {
        this.$bus.$emit('closeBread', this.closeBread)
        this.$bus.$emit('closeKeyword', this.closeKeyword)
        this.$bus.$emit('sortByNormal', this.sortByNormal)
        this.$bus.$emit('sortByPrice', this.sortByPrice)
        this.$bus.$on('getPageNo', currentPage => {
            this.params.pageNo = currentPage
            this.getData()
        })
        this.getData()
        // 修一个轮播图bug
        if (this.$route.name == 'search') document.querySelector('.allCategory').style.visibility = 'visible'
        let categoryItemTitle = document.querySelector('.categoryItemTitle')
        let domList = this.getDomList('logo', 'navDetail div', 'header')
        this.getDomList('allCategory').onmouseenter = () => categoryItemTitle.style.display = 'block'
        this.getDomList('slideNav').onmouseleave = () => categoryItemTitle.style.display = 'none'
        this.setDomNone(domList)
    }
}
</script>

<style lang="less">
.searchPage {
    .slideNav .categoryItemTitle {
        display: none;

        .categoryItemDetail {
            height: 595px;
        }
    }

    .li {
        background-color: rgb(181, 181, 181) !important;

        &:hover {
            background-color: #ff6a00 !important;
        }
    }
}
</style>