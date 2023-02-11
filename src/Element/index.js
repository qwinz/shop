import { Row, Col, Input, Carousel, Button, Popover, CarouselItem, Pagination, Checkbox } from 'element-ui'
export default {
    install: function (Vue) {
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Input)
        Vue.use(Carousel)
        Vue.use(CarouselItem)
        Vue.use(Pagination)
        Vue.use(Checkbox)
        Vue.use(Button)
        Vue.use(Popover)
    }
}