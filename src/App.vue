<template>
  <div id="app">
    <Header v-if="!$route.meta.hiddenHeader" />
    <!-- <Home/> -->
    <router-view></router-view>
    <!-- 控制在某些页面隐藏footer -->
    <!-- <Footer v-show="$route.path == '/shop' || $route.path == '/search'"/> -->
    <Footer v-show="$route.meta.footerShow" />
    <HomeToolBar></HomeToolBar>
  </div>
</template>

<script>
import Header from "./components/Header/";
import Footer from "./components/Footer";
import Home from "@/views/home";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
  },
  mounted() {
    //通知vuex发请求获取三级联动数据,用了命名空间要在前面加模块名
    this.$store.dispatch("homeVuex/getCategoryList");
  },
};
</script>

<style>
:root {
  --baseDuration: 0.3s;
  --baseSize: 12px;
  --normalSize: 14px;
  --minWidth: 1226px;
}
body {
  background-color: #f5f5f5;
}
#app {
  box-sizing: content-box;
}
.container {
  width: 1226px;
  height: 100%;
  margin: 0 auto;
}
a {
  transition-duration: var(--baseDuration);
}
a:link {
  color: #b0b0b0;
}
a:visited {
  color: #b0b0b0;
}
a:hover {
  color: #ff6a00;
}
</style>
