<template>
    <div class="searchFilterContainer">
        <!-- 面包屑导航 -->
        <div class="breadcrumbs">
            <span>全部结果:</span>
            <span class="breadcrumb" v-if="categoryName">
                {{ categoryName }}
                <i @click="closeBreadcrumb" class="el-icon-circle-close"></i>
            </span>
            <!-- 关键字面包屑 -->
            <span class="breadcrumb" v-if="keyword">
                {{ keyword }}
                <i @click="closeKeyword" class="el-icon-circle-close"></i>
            </span>
        </div>
        <!-- 商品分类 -->
        <div class="searchFilter">
            <div class="filterRow">
                <div class="filterTitle">品牌</div>
                <div class="filterDetails">
                    <a href="javascript:" @click="selectTrademark" v-for="trademark in trademarkList" :key="trademark.tmId">{{ trademark.tmName }}</a>
                </div>
            </div>
            <div class="filterRow" v-for="attr in attrsList" :key="attr.attrId">
                <div class="filterTitle">{{attr.attrName}}</div>
                <div class="filterDetails">
                    <a href="javascript:" v-for="(value,index) in attr.attrValueList" :key="index">{{value}}</a>
                </div>
            </div>
        </div>
        <!-- 商品排序 -->
        <div class="searchResult">
            <div class="sort"></div>
            <div class="searchList"></div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    props: ['categoryName','keyword'],
    methods: {
        closeBreadcrumb() {},
        closeKeyword() { },
        selectTrademark(e) {
            this.$router.push({ name: 'search', params: { keyword: e.target.innerText }})
        }
    },
    mounted() {
        this.$bus.$on('closeBread', closeBread => this.closeBreadcrumb = closeBread)
        this.$bus.$on('closeKeyword', closeKeyword => this.closeKeyword = closeKeyword)
        
    },
    computed: {
        ...mapGetters('searchVuex',['attrsList','trademarkList'])
    },
}
</script>

<style lang="less">
.searchFilterContainer{
    .breadcrumbs{
        width: 1226px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
        .breadcrumb{
            .el-icon-circle-close {
                position: relative;
                top: 2px;
                font-size: 20px;
                &:hover{
                    color: #ff6a00;
                }
            }
        }
        span:first-child{
            margin-right: 20px;
        }
    }
    .searchFilter{
        width: 1226px;
        border: 1px solid #dadada;
        background-color: #fff;
        border-bottom: none;
        margin: 18px 0;
        .filterRow:nth-of-type(1){height: 150px;}
        .filterRow{
            display: flex;
            width: 100%;
            // padding: 10px 0;
            border-bottom: 1px solid #dadada;
            .filterTitle{
                box-sizing: border-box;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 15%;
                padding: 10px;
                text-align: center;
                border-right: 1px solid #dadada;
            }
            .filterDetails{
                width: 85%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                a{
                    padding-left: 10px;
                    padding-right: 20px;
                }
            }
        }
    }
    .searchResult{}
}
</style>