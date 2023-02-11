<template>
<div>
    <el-row class="header">
        <div :span="24" class="topbar container">
            <div class="grid-content  topNav">
                <ul>
                    <li v-for="(list,index) in lists" :key="index">
                        <a :href="list.url">
                            {{list.title}}
                        </a>
                    </li>
                </ul>
            </div>
            <div class="userList">
                <UserLogin></UserLogin>
                <div class="cart">
                    <span class="cartWord">
                        <i class="el-icon-shopping-cart-2"></i>
                        <span>购物车（{{ number }}）</span>
                    </span>
                    <div class="cartContent">
                        购物车中还没有商品，赶紧选购吧！
                    </div>
                </div>
            </div>
        </div>
    </el-row>
</div>
</template>

<script>
import UserLogin from './UserLogin.vue'
export default {
    name: 'Topbar',
    data() {
        return {
            lists: [
                {title: '小米官网',url:'JavaScript:'},
                { title: '小米商城', url: 'JavaScript:' },
                { title: 'MIUI', url: 'JavaScript:' },
                { title: 'IoT', url: 'JavaScript:' },
                { title: '云服务', url: 'JavaScript:' },
                { title: '天星数科', url: 'JavaScript:' },
                { title: '有品', url: 'JavaScript:' },
                { title: '小爱开放平台', url: 'JavaScript:' },
                { title: '企业团购', url: 'JavaScript:' },
                { title: '资质证照', url: 'JavaScript:' },
                { title: '协议规则', url: 'JavaScript:' },
                { title: '下载app', url: 'JavaScript:' },
                { title: 'Select Location', url: 'JavaScript:' },
            ],
            number:0
        }
    },
    components: { UserLogin }
}
</script>

<style>
.header{
    position: relative;
    min-width: 1226px;
    background-color: #333333;
    z-index: 30;
}
.header a:hover{
    color: rgb(236, 236, 236);
}
.header [class*=el-col-]{
    float: none;
}
.topbar{
    height: 100%;
    margin: 0 auto;
    line-height: 2.8em;
}
.topNav{
    float: left;
    width: 75%;
}
.userList{
    position: relative;
    float: left;
    width: 25%;
    height: 100%;
}
ul li{
    height: 100%;
    float: left;
    font-size: var(--baseSize);
    padding-left: 2px;
}
.topNav ul li:not(.topNav ul li:last-child)::after,
.userList ul li:not(.userList ul li:last-child)::after{
    content: "|";
    color: #555853;
    margin: 0 .3em;
}
.cart{
    width: 40%;
    height: 40px;
    float: right;
    background-color: #424242;
    text-align: center;
    color: #b0b0b0;
    cursor: pointer;
    font-size: var(--baseSize);
}
.el-icon-shopping-cart-2{
        margin-right: 4px;
        font-size: 20px;
        vertical-align: -4px !important;
}
.cart:hover{
    background-color: #fff;
    transition-duration: var(--baseDuration);
    color: #ff6a00;
}
.cart:hover>.cartContent{
    box-shadow: 0px 2px 2px 2px rgb(228, 228, 228);
    height: 100px;
    color: #b0b0b0;
}
.cartContent{
    cursor: default;
    position: absolute;
    right: 0;
    width: 300px;
    overflow: hidden;
    font-size: var(--baseSize);
    height: 0;
    top: 40px;
    transition-duration: var(--baseDuration);
    text-align: center;
    line-height: 7em;
    background-color: #fff;
}
</style>