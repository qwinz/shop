<template>
    <div class="footerService">
        <ul>
            <li v-for="(list,index) in serviceLists" :key="index">
                <a :href="list.url">
                    <i :class="list.icon"></i>{{ list.title }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
                
            serviceLists: [
                { icon: 'el-icon-setting', title: '预约维修服务', url: 'javascript:' },
                { icon: 'el-icon-mobile-phone', title: '7天无理由退货', url: 'javascript:' },
                { icon: 'el-icon-truck', title: '15天免费换货', url: 'javascript:' },
                { icon: 'el-icon-present', title: '满69元包邮', url: 'javascript:' },
                { icon: 'el-icon-location-outline', title: '1100余家售后网点', url: 'javascript:' },
            ]
        }
    }
}
</script>

<style>
.footerService{

    padding: 27px 0;
    border-bottom: 1px solid #e0e0e0;
}
.footerService ul{
    height: 30px;
    display: block;
    line-height: 30px;
}
.footerService ul li{
    width: 19.7%;
    text-align: center;
    font-size: 17px;
    border-right: 1px solid #e0e0e0;
}
.footerService ul li:last-child{
    border-right: none;
}
</style>