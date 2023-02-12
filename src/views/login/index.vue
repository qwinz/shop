<template>
    <div class="login">
        <div class="slide_left" :style="{ width: bgwidth }" v-show="sldeShow">
            <loginBgc />
        </div>
        <div class="slide_right">
            <loginHeader></loginHeader>
            <loginForm></loginForm>
            <li @click="djangoReq">click me</li>
        </div>
    </div>
</template>

<script>
import loginForm from "./loginForm.vue"
import loginHeader from "./loginHeader.vue"
import loginBgc from "@/components/common/loginBgc.vue"
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            sldeShow: true,
            bgwidth: "375px",
        }
    },
    components: { loginForm, loginHeader, loginBgc },
    methods: {
        ...mapActions('loginVuex', ['djangoReq']),
        resizeBg() {
            let width = document.documentElement.clientWidth
            if (width <= 1000) {
                this.sldeShow = false
            } else if (width > 1000 && width <= 1300) {
                this.bgwidth = "200px"
                this.sldeShow = true
            } else {
                this.bgwidth = "375px"
                this.sldeShow = true
            }
        },
    },
    mounted() {
        this.resizeBg()
        window.addEventListener('resize', () => this.resizeBg())
    }
};
</script>

<style lang="less" scoped>
.login {
    display: flex;

    .slide_left {
        // width: 375px;
        height: 900px;
    }

    .slide_right {
        flex-grow: 1;
        flex-shrink: 1;
    }
}
</style>