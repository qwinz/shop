<template>
    <div class="goodsList">
        <div class="goodsSort">
            <ul>
                <li @click="sortByNormal">综合</li>
                <li>新品</li>
                <li>销量</li>
                <li @click="sortByPrice">
                    价格<i v-if="showArrowRise" class="el-icon-top"></i><i v-if="!showArrowRise"
                        class="el-icon-bottom"></i>
                </li>
            </ul>
        </div>
        <div class="goodsOrder">
            <ul>
                <li>收货地</li>
                <li>促销</li>
                <li>分期</li>
                <li>仅看有货</li>
            </ul>
        </div>
        <div class="goodsItems clear">
            <div class="goodsItem" @click="goDetail" v-for="(goods) in goodsList" :key="goods.id">
                <img :src="goods.defaultImg" alt="" class="goodsItemImg">
                <p class="goodsItemTitle">{{ goods.title }}</p>
                <p class="goodsItemPrice">{{ goods.price }}</p>
                <ul class="goodsItemType">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <!-- 分期/加价购 -->
                <div class="flags">
                    <a href="javascript:">分期</a>
                    <a href="javascript:">加价购</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsList',
    props: ['goodsList'],
    data() {
        return {
            showArrowRise: true,
            active: false
        }
    },
    methods: {
        sortByNormal() { },
        // 这个函数就是index组件中的sortByPrice，自定义事件中传递的函数是发送的组件中的
        sortByPriceEvent() { },
        sortByPrice() {
            if (this.active == false) {
                this.active = true
                this.sortByPriceEvent(this.showArrowRise)
                return
            }
            this.showArrowRise = !this.showArrowRise
            this.sortByPriceEvent(this.showArrowRise)
        },
        goDetail() {
            this.$router.push({ path: '/detail', query: this.$route.query })

        }
    },
    watch: {
        // 按价格排序
        // showArrowRise() {
        //     if (this.showArrowRise) 
        //         console.log('价格升序')
        //     else
        //         console.log('价格降序')
        // }
    },
    mounted() {
        this.$bus.$on('sortByNormal', sortByNormal => this.sortByNormal = sortByNormal)
        this.$bus.$on('sortByPrice', sortByPrice => this.sortByPriceEvent = sortByPrice)
    },
    beforeDestroy() {
        this.$bus.$off('sortByNormal')
        this.$bus.$off('sortByPrice')
    }
}
</script>

<style lang="less">
.goodsList {
    padding: 20px 0 100px;

    .goodsItems {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding-top: 30px;

        .goodsItem {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 296px;
            height: 430px;
            margin-bottom: 15px;
            background-color: #fff;
            transition-duration: var(--baseDuration);

            &:hover {
                cursor: pointer;
                color: #ff6a00;
                box-shadow: 0 3px 10px 1px #b4b4b4;
            }

            &:last-child:nth-child(4n-1) {
                margin-right: 310px;
            }

            &:last-child:nth-child(4n-2) {
                margin-right: 620px;
            }

            .goodsItemTitle {
                width: 90%;
                text-align: center;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .goodsItemType {
                li:nth-of-type(2) {
                    margin: 0 10px;
                }

                li {
                    width: 32px;
                    height: 32px;
                    border: 1px solid #000;
                }
            }

            .goodsItemImg {
                width: 200px;
                height: 200px;
                margin-bottom: 20px;
            }

            .flags a:first-child {
                padding-left: 0;
                padding-right: 10px;
            }
        }
    }

    .goodsSort {
        float: left;
        height: 30px;
        line-height: 30px;

        li {
            font-size: 16px;
            padding-left: 30px;
            cursor: pointer;
            transition: var(--baseDuration);

            &:hover {
                color: #ff6a00;
            }
        }
    }

    .goodsOrder {
        float: right;
        height: 30px;
        line-height: 30px;

        li {
            font-size: 16px;
            padding-right: 30px;
            cursor: pointer;
            transition: var(--baseDuration);

            &:hover {
                color: #ff6a00;
            }
        }
    }

    a {
        font-size: 16px;
    }

    a:link {
        color: #000;
    }

    a:hover {
        color: #ff6a00;
    }
}
</style>