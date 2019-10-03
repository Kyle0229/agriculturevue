<template>
  <div id="app">
    <div style="line-height: 60px;height: 60px;background-color: #606266;margin-left: 0px;color: azure">
      <div style="float: left;margin-left: 20px">
    <img src="./assets/logo.png" style="height: 60px;width: 60px; text-align: left;float: left;">
    <div style="font-size: 25px;height: 60px;float: left; ">农业信息网</div>
      </div>
      <div style="float: right;line-height: 40px;height: 40px;">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#606266"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">登录</el-menu-item>
        <el-menu-item index="2">注册</el-menu-item>
        <!--<el-menu-item index="3">个人中心</el-menu-item>-->
        <!--<el-menu-item index="4" disabled>消息中心</el-menu-item>-->
        <el-menu-item index="5">购物车</el-menu-item>
      </el-menu>

      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{

     handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if(key==5){
        this.toCart();
      }

    },
    toCart:function () {
      this.$router.push("/cart")
    }
  }
}
</script>


