<template>
    <div class="floor">
        <div class="container">
            <div class="floorRow">
                <div class="floorTitle">{{fList.floorTitle}}</div>
                <div class="more">
                    <a href="javascript:">查看更多<i class="el-icon-arrow-right"></i></a>
                </div>
            </div>
            <div class="floorItem">
                <div class="floorItemLeft">
                    <img :src="fList.floorBigImgUrl" class="bImg" alt="">
                </div>
                <div class="floorItemRight">
                    <div class="floorItemList" v-for="item in fList.floorItems" :key="item.fItemId">
                        <!-- 引入item图片路径 -->
                        <img :src="item.fItemImgUrl" class="floorItemImg"/>
                        <div><p class="floorItemTitle">{{ item.fItemTitle }}</p>
                        <p class="floorItemDesc">{{item.fItemDesc}}</p>
                        <p class="floorItemPrice">{{ item.fItemPrice }}</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Floor',
    props:['fList'],
    computed: {
        // ...mapState('homeVuex',['floorList'])
    },
    mounted() {
        // this.$store.dispatch('homeVuex/getFloorList')
        // console.log(this.fList)
        
    },
}
</script>

<style lang="less">
.floor{
    .floorRow{
        height: 58px;
        font-size: 22px;
        font-weight: 200;
        line-height: 58px;
        color: #333;
        div:first-child{font-size: 20px;}
        .floorTitle{float: left; }
        .more{float: right;}
    }
    .floorItem{
        display: flex;
        height: 614px;
        div{transition-duration: var(--baseDuration);}
        .bImg{
            height: 100%;
        }
        .floorItemLeft{
            width: 234px;
            box-sizing: border-box;
            &:hover{
                padding-bottom: 4px;
                box-shadow: 0 5px 10px 3px #c8c8c8;
            }
        }
        .floorItemRight{
            display: grid;
            justify-content: space-between;
            align-content: space-between;
            grid-template-columns: 24% 24% 24% 24%;
            grid-template-rows: 49% 49%;
            margin-left: 18px;
            width: 992px;
            height: 100%;
            .floorItemList{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                background-color: #fff;
                box-sizing: border-box;
                .floorItemImg{
                    width: 160px;
                    height: 160px;
                }
                .floorItemTitle,.floorItemDesc,.floorItemPrice{text-align: center;}
                .floorItemDesc{
                    // display: inline-block;
                    margin: 0 auto;
                    margin-bottom: 10px;
                    width: 210px;
                    font-size: var(--baseSize);
                    color: #b0b0b0;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                } 
                .floorItemPrice{
                    color: #ff6a00;
                }
                &:hover {
                        padding-bottom: 4px;
                        box-shadow: 0 5px 10px 3px #e1e1e1;
                    }
            }
        }
    }
}
</style>