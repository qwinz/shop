//对axios进行二次封装
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'// nprogress.start 进度条开始，done：进度条结束
// 引入进度条样式
import 'nprogress/nprogress.css'
// request == axios
const request = axios.create({
    baseURL: '/mock',
    timeout: 5000
})
// 请求拦截器，在请求之前做一些事情
request.interceptors.request.use(config => {
    nprogress.start()
    return config
})
// 响应拦截器 成功和失败的回调函数
request.interceptors.response.use(res => {
    nprogress.done()
    return res.data
}, err => {
    nprogress.done()
    return Promise.reject(new Error(err.message))
})
export default request