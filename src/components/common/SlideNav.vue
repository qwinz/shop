<template>
  <div class="slideNav" ref="slideNav">
    <div class="block" v-if="slideShow">
        <el-carousel>
            <el-carousel-item v-for="banner in bannerList" :key="banner.id">
                <img :src="banner.imgUrl" class="slideImg">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="categoryItem">
        <div class="categoryItemTitle animate__backInDown">
            <!-- 事件委派结合编程式导航实现路由跳转 -->
                <div 
                class="li" 
                @click="goSearch"
                v-for="(category) in categoryList" 
                :key="category.categoryId">
                    <!-- 一级标题 -->
                    <div 
                    class="navTitle" 
                    ref="titles" 
                    @mouseleave="hiddenDetails"
                    @mouseenter="showDetails">
                    <!-- <router-link to="/search"> -->
                        <span class="c1" 
                        :data-categoryName="category.categoryName"
                        :data-categoryId="category.categoryId">{{ category.categoryName }}</span>
                    <!-- </router-link> -->
                    <!-- 二级标题 -->
                        <div class="categoryItemDetail" ref="categoryItemDetail">
                            <div v-for="child in category.categoryChild" :key="child.categoryId">
                                <a href="javascript:" class="title" 
                                        :data-categoryName="child.categoryName"
                                        :data-category2Id="child.categoryId">
                                    <!-- <router-link to="/search"> -->
                                            {{ child.categoryName }}
                                    <!-- </router-link> -->
                                </a>
                                <!-- 三级标题 -->
                                <a href="javascript:"
                                class="categoryDetailTitle" 
                                v-for="child2 in child.categoryChild" 
                                :key="child2.categoryId"
                                :data-categoryName="child2.categoryName"
                                :data-category3Id="child2.categoryId">
                                        {{ child2.categoryName }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </div>
</template>

<script>
import 'animate.css'
import { mapState } from 'vuex'
// 引入单个throttle用于节流
import throttle from 'lodash/throttle'
export default {
    data() {
        return {
            currentIndex: -1,
            slideShow: this.$route.name == 'shop'? true:false
        }
    },
    methods: {
        // 用es5的写法来节流
        showDetails: throttle(function (event) {
                let index = this.$refs.titles.indexOf(event.target)
                this.$refs.categoryItemDetail[index].style = 'display:block;'
            },10),
        // hiddenDetails: throttle(function (event) {
        //     let index = this.$refs.titles.indexOf(event.target)
        //     this.$refs.categoryItemDetail[index].style = 'display:none;'
        // }, 0),
        hiddenDetails(event) {
            let index = this.$refs.titles.indexOf(event.target)
            this.$refs.categoryItemDetail[index].style = 'display:none;'
        },
        goSearch(event) {
            let { categoryname, categoryid, category2id, category3id } = event.target.dataset
            // console.log(categoryname, categoryid, category2id, category3id)
            let location = { path: '/search' }
            let query = { categoryName: categoryname }
            if (categoryid) {
                query.category1Id = categoryid
            } else if (category2id){
                query.category2Id = category2id
            } else if (category3id) {
                query.category3Id = category3id
            }
            // 合并params和query参数
            if (this.$route.params) 
                location.params = this.$route.params
            location.query = query
            this.$router.push(location)
        }
    },
    computed: {
        ...mapState('homeVuex', {
            //用到计算属性时，右侧函数会立即执行
            categoryList: state => state.categoryList,
            bannerList:state => state.bannerList
        })
    },
    mounted() {
        // 使用mock获取数据。
        this.$store.dispatch('homeVuex/getBannerList')
    },
    watch: {
        // bannerList(newValue, oldValue) {
        //     console.log('new:',newValue)
        //     console.log('old:',oldValue)
            
        // }
    }
}
</script>

<style>
/* 轮播图start */
 .el-carousel__item h3 {
     color: #475669;
     font-size: 14px;
     opacity: 0.75;
     line-height: 150px;
     margin: 0;
 }
.slideNav .el-carousel{
    width: var(--minWidth);
    z-index: inherit;
}
 .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
 }

 .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
 }
.el-carousel__arrow.el-carousel__arrow--left{
    left: 280px;
 }
.slideNav .el-carousel__container{
    /* 控制中心轮播图的高度 */
    height: 595px;
}
.slideImg{
    width: 100%;
    height: 100%;
}
/* 轮播图end */
.slideNav{
    position: relative;
    width: var(--minWidth);
}
.categoryItem{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 234px;
    height: 100%;
}
.categoryItemTitle .navTitle{
    display: inline-block;
    width: 100%;
}
.categoryItem .categoryItemTitle{
    width: 234px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.slideNav .categoryItemTitle .li{
    box-sizing: border-box;
    font-size: var(--normalSize);
    line-height: 2.5em;
    background-color: rgb(96, 109, 123,.5);
    color: white;
    width: 100%;
    padding-left: 30px;
    cursor: default;
}
.c1{
    display: inline-block;
    width: 100%;
    color: white;
    cursor: pointer;
}
.slideNav .categoryItemTitle .li:hover{
    background-color: #ff6a00;
}
.categoryItemDetail{
    position: absolute;
    top: 0;
    left: 234px;
    width: 992px;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: none;
    box-shadow: 2px 2px 6px 1px #c9c9c9;
}
.categoryItemDetail a{
    color: #475669;
}
.categoryItemDetail>div a{
    display: inline-block;
    padding: 7px;
}
.categoryItemDetail>div a:hover{
    color: #ff6a00;
}
.categoryItemDetail>div a:not(.categoryItemDetail>div a:first-child,.categoryItemDetail>div a:last-child)::after{
    content: '';
    height: 5px;
    width: 2px; 
    border: 1px solid #99a9bf;
    margin-left: 10px;
}
.categoryItemDetail .title{
    color: #000;
    font-weight: bold;
}
.categoryItemDetail .title::after {
content: '';
    height: 5px;
    width: 2px;
    border: 1px solid #99a9bf;
    margin-left: 10px;
}
</style>