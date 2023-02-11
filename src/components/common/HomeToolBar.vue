<template>
    <div class="homeToolBar" :class="{ smallFixed1400, smallFixed1300 }" ref="tool">
        <a href="javascript:" class="toolBar" @click="tollClick(index)"
            :class="{ smallToolBar: tool.smallToolBar, ToTop: tool.ToTop }" v-for="(tool, index) in tools" :key="index">
            <i class="toolIcon" :class="[tool.iconClass, { smallToolIcon: tool.smallToolIcon }]"></i>
            <p class="toolTitle" :class="{ toolTitleNone: tool.toolTitleNone }">{{ tool.title }}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: "homeToolBar",
    data() {
        return {
            windowWidth: window.innerWidth,
            tools: [
                { id: 0, title: '手机APP', iconClass: 'el-icon-mobile-phone', toolTitleNone: false, smallToolBar: false, smallToolIcon: false },
                { id: 1, title: '个人中心', iconClass: 'el-icon-user', toolTitleNone: false, smallToolBar: false, smallToolIcon: false },
                { id: 2, title: '售后服务', iconClass: 'el-icon-setting', toolTitleNone: false, smallToolBar: false, smallToolIcon: false },
                { id: 3, title: '人工客服', iconClass: 'el-icon-headset', toolTitleNone: false, smallToolBar: false, smallToolIcon: false },
                { id: 4, title: '购物车', iconClass: 'el-icon-shopping-cart-2', toolTitleNone: false, smallToolBar: false, smallToolIcon: false },
                { id: 5, title: '回顶部', iconClass: 'el-icon-top', toolTitleNone: false, smallToolBar: false, smallToolIcon: false, ToTop: true },
            ],
            smallFixed1400: false,
            smallFixed1300: false
        };
    },
    methods: {
        tollClick(index) {
            if (index == 5) {
                scrollTo(0, 0)
            }
        },
        smallToolBar(newValue) {
            if (newValue <= 1400 && newValue >= 1300) {
                this.smallFixed1400 = true
                this.smallFixed1300 = false
                this.tools.forEach(obj => {
                    obj.toolTitleNone = true
                    obj.smallToolBar = true
                    obj.smallToolIcon = true
                })
            } else if (newValue < 1300) {
                // 让tool粘着窗口
                this.smallFixed1400 = false
                this.smallFixed1300 = true
                this.tools.forEach(obj => {
                    obj.toolTitleNone = true
                    obj.smallToolBar = true
                    obj.smallToolIcon = true
                })
            } else if (newValue > 1400) {
                this.smallFixed1400 = false
                this.smallFixed1300 = false
                this.tools.forEach(obj => {
                    obj.toolTitleNone = false
                    obj.smallToolBar = false
                    obj.smallToolIcon = false
                })
            }
        }
    },
    mounted() {
        this.smallToolBar(window.innerWidth)
        window.onresize = () => this.windowWidth = window.innerWidth
        window.onscroll = () => {
            let top = document.querySelectorAll('.toolBar')[document.querySelectorAll('.toolBar').length - 1]
            let topDistance = document.body.scrollTop || document.documentElement.scrollTop
            if (topDistance < 600) {
                top.style.display = 'none'
            }
            else
                top.style.display = 'block'
        }
    },
    watch: {
        windowWidth(newValue) {
            this.smallToolBar(newValue)
        },
    }
};
</script>

<style>
.homeToolBar {
    position: fixed;
    right: 0;
    bottom: 70px;
    z-index: 99;
}

.smallFixed1400 {
    left: 50%;
    margin-left: 613px;
    bottom: 40px;
}

.smallFixed1300 {
    bottom: 40px;
    right: 0;
}

.toolBar {
    position: relative;
    display: block;
    width: 82px;
    height: 90px;
    margin-top: -1px;
    background-color: #fff;
    border: 1px solid #f5f5f5;
    text-align: center;
}

.toolIcon {
    font-size: 30px;
    margin-top: 18px;
    margin-bottom: 8px;
}

.ToTop {
    margin-top: 14px;
}

.smallToolBar {
    width: 25px;
    height: 40px;
}

.smallToolIcon {
    font-size: 20px;
    width: 20px;
    height: 20px;
    margin-top: 8px;
}

.toolTitleNone {
    display: none;
}
</style>