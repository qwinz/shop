<template>
    <div class="footer">
        <div class="container">
            <FooterService />
            <FooterLinks>
                <!-- 使用插槽插入links -->
                <template v-slot:links>
                    <dl class="empty"></dl>
                    <dl v-for="(footerLink, index) in footerLinks" :key=index>
                        <dt>{{ footerLink.linkTitle }}</dt>
                        <dd v-for="(link, index) in footerLink.links" :key="index">
                            <a :href="link.url">{{ link.title }}</a>
                        </dd>
                    </dl>
                </template>
                <template v-slot:contact>
                    <div class="contact">
                        <p class="phone">400-100-5678</p>
                        <p class="time">8:00-18:00（仅收市话费）</p>
                        <a href="javascript:" class="contactBtn">
                            <i class="el-icon-chat-dot-square"></i>
                            人工客服
                        </a>
                    </div>
                </template>
            </FooterLinks>
        </div>
    </div>
</template>

<script>
import FooterService from './FooterService.vue'
import FooterLinks from './FooterLinks.vue'
export default {
    name: 'Footer',
    components: { FooterService, FooterLinks },
    data() {
        return {
            footerLinks: [
                {
                    linkTitle: '选购指南', links: [
                        { title: '手机', url: 'javascript:' },
                        { title: '电视', url: 'javascript:' },
                        { title: '笔记本', url: 'javascript:' },
                        { title: '平板', url: 'javascript:' },
                        { title: '穿戴', url: 'javascript:' },
                        { title: '耳机', url: 'javascript:' },
                        { title: '家电', url: 'javascript:' },
                        { title: '路由器', url: 'javascript:' },
                        { title: '音箱', url: 'javascript:' },
                        { title: '配件', url: 'javascript:' },
                    ]
                },
                {
                    linkTitle: '服务中心', links: [
                        { title: '申请售后', url: 'javascript:' },
                        { title: '售后政策', url: 'javascript:' },
                        { title: '维修服务价格', url: 'javascript:' },
                        { title: '订单查询', url: 'javascript:' },
                        { title: '以旧换新', url: 'javascript:' },
                        { title: '保障服务', url: 'javascript:' },
                        { title: '防伪查询', url: 'javascript:' },
                        { title: 'F码通道', url: 'javascript:' }
                    ]
                },
                {
                    linkTitle: '线下门店', links: [
                        { title: '小米之家', url: 'javascript:' },
                        { title: '服务网点', url: 'javascript:' },
                        { title: '授权体验店/专区', url: 'javascript:' }
                    ]
                },
                {
                    linkTitle: '关于小米', links: [
                        { title: '了解小米', url: 'javascript:' },
                        { title: '加入小米', url: 'javascript:' },
                        { title: '投资者关系', url: 'javascript:' },
                        { title: '环境，社会及管治', url: 'javascript:' },
                        { title: '廉洁举报', url: 'javascript:' }
                    ]
                },
                {
                    linkTitle: '关注我们', links: [
                        { title: '新浪微博', url: 'javascript:' },
                        { title: '官方微信', url: 'javascript:' },
                        { title: '联系我们', url: 'javascript:' },
                        { title: '公益基金会', url: 'javascript:' }
                    ]
                },
                




            ]
        }
    }
}
</script>

<style>
.footer .footerLinks a{
    font-size: var(--baseSize);
}
.footer a:link{
    color: #757575;
}
.footer a:hover {
    color: #ff6a00;
}
</style>