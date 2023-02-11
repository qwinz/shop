<template>
    <div class="loginHeader">
        <div class="logo">
            <img src="../../../public/imgs/logo.png" class="img" />
            <span class="logo_title">小米账号</span>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(nav, index) in navList" :key="index">
                    <a :href="nav.url">{{ nav.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                { title: '用户协议', url: 'javascript:' },
                { title: '隐私政策', url: 'javascript:' },
                { title: '帮助中心', url: 'javascript:' }
            ]
        }
    }
};
</script>

<style lang="less" scoped>
.loginHeader {
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    background-color: #fff;

    .nav {
        flex: 2;
        line-height: 7em;

        ul {
            // height: 100%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;

            li {
                font-size: 16px;
                position: relative;

            }
        }
    }

    .logo {
        flex: 1;
        height: 40px;
        font-size: 26px;
        font-weight: 500;
        color: #333;

        img {
            margin-right: 10px;
            vertical-align: middle;
        }
    }
}
</style>