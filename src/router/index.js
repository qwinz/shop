import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Login from '@/views/login'
import Register from '@/views/register'
import Search from '@/views/searchPage'
import Detail from '@/views/detail'
Vue.use(VueRouter)
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
    return RouterPush.call(this, to).catch(err => err)
}
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
    return RouterReplace.call(this, to).catch(err => err)
}
const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            name: 'shop',
            path: '/shop',
            component: Home,
            meta: { footerShow: true }
        },
        {
            name: 'Detail',
            path: '/detail',
            component: Detail,
            meta: { footerShow: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { footerShow: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { footerShow: false }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: { footerShow: true }
        },
        // 重定向
        {
            path: '/',
            redirect: '/shop'
        }
    ]
})
export default router