<template>
    <div class="form">
        <form action="#">
            <el-popover class="ercode" placement="left" width="50" trigger="hover" :content="isCode ? '密码登录' : '扫码登录'">
                <el-button slot="reference" @click="isCode = !isCode">
                    <i class="el-icon-s-grid"></i>
                    <div class="wrap"></div>
                </el-button>
            </el-popover>
            <div v-show="!isCode">
                <div class="switch">
                    <router-link to="/login">登录</router-link>
                    <router-link to="/register">注册</router-link>
                </div>
                <el-input v-model="account" placeholder="邮箱/手机号码/小米ID"></el-input>
                <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
                <el-checkbox v-model="checked">已阅读并同意小米帐号 <b>用户协议</b> 和 <b>隐私政策</b></el-checkbox>
                <el-button :disabled="!allowClick">登录</el-button>
                <div class="action">
                    <a href="#">忘记密码？</a>
                    <a href="#">手机号登录</a>
                </div>
                <div class="otherMethod">其他方式登录</div>
            </div>
            <div class="erweima" v-show="isCode">
                <h1>这是二维码</h1>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            account: '',
            password: '',
            checked: false,
            allowClick: false,
            isCode: false
        }
    }
};
</script>

<style lang="less" scoped>
.form {
    margin-top: 20px;

    b {
        cursor: pointer;
    }

    form {
        position: relative;
        margin: 0 auto;
        padding: 50px;
        background-color: #fff;
        width: 360px;

        .ercode {
            button {
                position: absolute;
                right: 0;
                top: -20px;
                width: 64px;
                height: 64px;
                border: none;
                transition-duration: var(--baseDuration);
                background-color: #fff;
                background-image: linear-gradient(45deg, rgba(255, 255, 255, 0) 50%, #ff6a00 50%);

                .wrap {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background-color: rgba(255, 255, 255, .4);
                    transition-duration: var(--baseDuration);
                    top: -20px;
                    right: 0;
                }

                &:hover {
                    cursor: pointer;
                    background-color: #fff;

                    .wrap {
                        background-color: rgba(255, 255, 255, 0);
                    }
                }

                .el-icon-s-grid {
                    color: #fff;
                    font-size: 30px;
                }
            }
        }

        .switch {
            font-size: 24px;

            a {
                margin-right: 20px;
            }
        }

        div {
            margin: 20px 0;
        }

        .action {
            display: flex;
            justify-content: space-between;
        }

        .otherMethod {
            text-align: center;
        }

        button {
            width: 100%;
            height: 60px;
            margin: 0 auto;
            margin-top: 20px;

        }

        .erweima {
            width: 240px;
            height: 240px;
        }
    }

}
</style>