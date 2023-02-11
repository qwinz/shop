<template>
    <div class="siteTopbar">
        <div class="container">
            <div class="logo">
                <!-- <a href="https://www.mi.com/shop" title="小米官网"> -->
                <router-link to="/" title="小米官网">
                    <img src="./imgs/logo-mi2.png">
                </router-link>
                <!-- </a> -->
            </div>
            <!-- <div class="empty" v-if="$route.name=='shop' ? true : false"></div> -->
            <div class="headerNav" @mouseout="$refs.navDetail.style = 'height:0;'">
                <ul>
                    <!-- 用于防止全部商品分类 -->
                    <li class="allCategory" v-if="showAllCategory">全部商品分类</li>
                    <li @mouseover="changItem(item);" v-for="(item, index) in headerItems" :key="index">
                        <a :href="item.url">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
            <div class="search">
                <form>
                    <el-input v-model="keyword" :placeholder="placeholder" @focus="$refs.searchList.style = styleObj"
                        @blur="$refs.searchList.style = 'display:none'">
                    </el-input>
                    <router-link :to="`/search/${keyword || placeholder}`">
                        <div class="searchBtn">
                            <i class="el-icon-search"></i>
                        </div>
                    </router-link>
                </form>
                <div class="searchList" ref="searchList">
                    <ul>
                        <a v-for="(list, index) in searchList" :key="index" :href="list.url">
                            <li>{{ list.title }}</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 展示选项卡的详情 -->
        <div class="navDetail" ref="navDetail">
            <div class="container"
                @mouseenter="$refs.navDetail.style = 'height:200px;box-shadow: 1px 1px 3px 1px rgb(208, 208, 208);'"
                @mouseleave="$refs.navDetail.style = 'height:0;'">
                <a :href="item.url" v-for="(item, index) in showNavItem" :key="index">
                    <img :src="item.src" alt="图片加载失败">
                    <p>{{ item.title }}</p>
                    <p>4999元起</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
// 引入lodash用于节流
import throttle from 'lodash/throttle'
export default {
    data() {
        return {
            showAllCategory: true,
            keyword: '',
            styleObj: 'transition-duration:.2s;\
                        display: block; \
                        border: 1px solid #ff6a00; \
                        border-top: none;',
            headerItems: [
                { title: 'Xiaomi手机', url: 'JavaScript:' },
                { title: 'Redmi手机', url: 'JavaScript:' },
                { title: '电视', url: 'JavaScript:' },
                { title: '笔记本', url: 'JavaScript:' },
                { title: '平板', url: 'JavaScript:' },
                { title: '家电', url: 'JavaScript:' },
                { title: '路由器', url: 'JavaScript:' },
                { title: '服务中心', url: 'JavaScript:' },
                { title: '社区', url: 'JavaScript:' },
            ],
            placeholder: '手机',
            searchList: [
                { title: '全部商品', url: 'JavaScript:' },
                { title: '手机', url: 'JavaScript:' },
                { title: '红米', url: 'JavaScript:' },
                { title: '冰箱', url: 'JavaScript:' },
                { title: '路由器', url: 'JavaScript:' },
                { title: '笔记本', url: 'JavaScript:' },
                { title: '耳机', url: 'JavaScript:' },
            ],
            navDetailItems: [
                {
                    navItem: 'Xiaomi手机', detail: [
                        { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
                        { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 pro' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Xiaomi 13' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Xiaomi civi2' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Xiaomi 12' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Xiaomi 12S Ultra' },
                    ]
                },
                {
                    navItem: 'Redmi手机', detail: [
                        { src: require('./imgs/rm.webp'), url: 'JavaScript:', title: 'Redmi 13 限量定制版' },
                        { src: require('./imgs/rm.webp'), url: 'JavaScript:', title: 'Redmi 13 pro' },
                        { src: require('./imgs/rm.webp'), url: 'JavaScript:', title: 'Redmi 13' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Redmi civi2' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Redmi 12' },
                        { src: require('./imgs/mi13.webp'), url: 'JavaScript:', title: 'Redmi 12S Ultra' }
                    ]
                },
                {
                    navItem: '电视', detail: [
                        { src: require('./imgs/TV.webp'), url: 'JavaScript:', title: '电视 13 限量定制版' },
                        { src: require('./imgs/TV.webp'), url: 'JavaScript:', title: '电视 13 pro' },
                        { src: require('./imgs/TV.webp'), url: 'JavaScript:', title: '电视 13' },
                        { src: require('./imgs/TV2.webp'), url: 'JavaScript:', title: '电视 civi2' },
                        { src: require('./imgs/TV2.webp'), url: 'JavaScript:', title: '电视 12' },
                        { src: require('./imgs/TV2.webp'), url: 'JavaScript:', title: '电视 12S Ultra' },
                    ]
                },
                {
                    navItem: '笔记本', detail: [
                        { src: require('./imgs/laptop.webp'), url: 'JavaScript:', title: '笔记本 13 限量定制版' },
                        { src: require('./imgs/laptop.webp'), url: 'JavaScript:', title: '笔记本 13 pro' },
                        { src: require('./imgs/laptop.webp'), url: 'JavaScript:', title: '笔记本 13' },
                        { src: require('./imgs/laptop2.webp'), url: 'JavaScript:', title: '笔记本 civi2' },
                        { src: require('./imgs/laptop2.webp'), url: 'JavaScript:', title: '笔记本 12' },
                        { src: require('./imgs/laptop2.webp'), url: 'JavaScript:', title: '笔记本 12S Ultra' },
                    ],
                }
            ],
            showNavItem: [
                { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
                { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
                { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
                { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
                { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
                { src: require('./imgs/mi13pro.webp'), url: 'JavaScript:', title: 'Xiaomi 13 限量定制版' },
            ]
        }
    },
    methods: {
        // 注意节流写法
        changItem: throttle(function (navItem) {
            this.navDetailItems.forEach(item => {
                if (navItem.title == item.navItem) {
                    this.$refs.navDetail.style = 'height:200px;box-shadow: 1px 1px 3px 1px rgb(208, 208, 208);'
                    this.showNavItem = item.detail
                }
            })
        }, 10),
        // changItem(navItem) {
        //     this.navDetailItems.forEach(item => {
        //         if (navItem.title == item.navItem) {
        //                 this.$refs.navDetail.style = 'height:200px;box-shadow: 1px 1px 3px 1px rgb(208, 208, 208);'
        //                 this.showNavItem = item.detail
        //         }
        //     })
        // },
        goSearch() {
            // 路由传参
            let location = { name: 'search', params: { 'keyword': this.keyword || this.placeholder } }
            location.query = this.$route.query
            this.$router.push(location)
            console.log('按了搜索后的route', this.$route)
        }
    },
    mounted() {
        // 通知清除搜索框关键字
        this.$bus.$on('clearKeyword', () => {
            this.keyword = undefined
            if (this.$route.query) this.$router.push({ name: 'search', query: this.$route.query })
        })

    },
}
</script>

<style>
.siteTopbar {
    height: 100px;
    width: 100%;
    user-select: none;
    min-width: var(--minWidth);
    z-index: 10;
}

.siteTopbar a {
    font-size: var(--normalSize);
}

.siteTopbar a:link,
.siteTopbar a:active {
    color: #000;
}

.siteTopbar .headerNav a:hover,
.siteTopbar .search a:hover {
    color: #ff6a00;
}

.logo {
    float: left;
    width: 62px;
    padding-top: 22px;
}

.logo a {
    display: inline-block;
    height: 75px;
}

.logo img {
    width: 56px;
}

.headerNav {
    float: left;
    /* margin-left: 165px; */
    width: 800px;
    height: 100%;
}

.headerNav ul {
    /* display: flex; */
    height: 100%;
    justify-content: left;
    align-items: flex-end;
}

.headerNav ul li {
    text-align: center;
    line-height: 8em;
    padding: 0 10px;
}

.headerNav ul li a {
    font-size: 16px;
}

.allCategory {
    width: 100px;
    font-size: 16px;
    line-height: 6em !important;
    padding-left: 55px !important;
    visibility: hidden;
}

.search {
    box-sizing: border-box;
    position: relative;
    float: right;
    width: 296px;
    height: 100%;
    padding-top: 25px;
    z-index: 10;
}

input[type=text] {
    height: 45px;
}

input[type=text]:focus {
    border: 1px solid #ff6a00;
}

.searchList {
    position: absolute;
    width: 85%;
    height: 210px;
    border: none;
    background-color: #fff;
    border-top: none;
    display: none;
}

.searchList ul li {
    float: none;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
}

.searchList ul li:hover {
    background-color: rgb(229, 229, 229);
}

.searchBtn {
    box-sizing: border-box;
    position: absolute;
    right: 0px;
    top: 25px;
    height: 45px;
    width: 45px;
    line-height: 40px;
    text-align: center;
    border-left: 1px solid #bebebe;
    font-size: 18px;
    cursor: pointer;
    transition-duration: var(--baseDuration);
}

.searchBtn:hover {
    background-color: #ff6a00;
    color: white;
}

.navDetail {
    position: absolute;
    z-index: 11;
    width: 100%;
    height: 0;
    min-width: var(--minWidth);
    overflow: hidden;
    text-align: center;
    transition: .3s;
    border-top: 1px solid #fff;
    background-color: #fff;
}

.navDetail .container a {
    position: relative;
    box-sizing: border-box;
    padding-top: 20px;
    display: inline-block;
    height: 100%;
    width: 204px;
}

.navDetail .container a:not(.navDetail .container a:last-child)::after {
    content: "";
    position: absolute;
    top: 40px;
    right: 0;
    display: inline-block;
    height: 100px;
    border-right: 1px solid #bebebe;
}

.navDetail p {
    font-size: var(--baseSize);
    color: #ff6a00;
}

.navDetail p:nth-of-type(1) {
    color: #6a6969;
}
</style>