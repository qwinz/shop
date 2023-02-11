import { Row, Col, Input, Carousel, CarouselItem, Pagination } from 'element-ui'
export default {
    install: function (Vue) {
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Input)
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Pagination)
    }
}