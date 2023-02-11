// 对api接口同意管理
import requests from './requests'
import mockRequest from './mockAjax'
//nav三级联动接口
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
// 获取搜索模块的接口,至少data要串一个空对象
export const reqGetSearchList = params => requests({ url: '/list', method: 'post', data: params })
export const reqGetBannerList = () => mockRequest({ url: '/banner', method: 'get' })
export const reqGetFloorList = () => mockRequest({ url: '/floor', method: 'get' })