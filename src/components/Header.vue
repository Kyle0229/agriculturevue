<template>
  <div>
    <div style="line-height: 100px;height: 100px;background-color: #FFFFFF;margin-left: 0px;color: azure;">
      <div style="float: left;margin-left: 20px;
    margin-right: 40px;">
        <!--<img src="../assets/logo.png" style="height: 60px;width: 60px; text-align: left;float: left;">-->
        <img src=" http://www.logo123.net/logos/201212/201212061419364715.jpg" style="height: 100px;width: 140px; text-align: left;float: left;">
        <!--http://www.logo123.net/logos/201212/201212061419364715.jpg-->
        <div style="font-size: 25px;line-height:100px;height: 100px;width:200px;float: left; color: black">农业信息网</div>
      </div>
      <div style="float: right;line-height: 40px;height: 40px;" v-if="path!='/admin'">
        <el-menu
          :default-active="activeIndex2"
          class="item"
          mode="horizontal"
          @select="handleSelect"
          background-color="#FFFFFF"
          text-color="#000">
          <el-menu-item index="0" v-html="type" ></el-menu-item>
          <el-badge :value="count"  type="primary" v-if="session!=null" >
            <el-menu-item index="5" v-if="session!=null" >购物车</el-menu-item>
          </el-badge>
          <el-menu-item index="1"  v-if="session==null" >登录</el-menu-item>
          <el-menu-item index="2" class="item" v-if="session==null">注册</el-menu-item>
          <el-menu-item index="3" class="item" v-if="session!=null"><el-avatar :src="session.pic"></el-avatar> {{session.name}}</el-menu-item>
          <el-menu-item index="4" class="item" v-if="session!=null" >退出</el-menu-item>
        </el-menu>
      </div>

    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import ElAvatar from "../../node_modules/element-ui/packages/avatar/src/main";
  export default {
    components: {ElAvatar},
    name: 'App',
    data(){
      return{
        type:"切换页面",
        session:{},
        count:'',
        path:""
      }
    },
    mounted(){
      axios.get("api/findSession").then(r => {
        if(r.data=='') {
          this.session=null;
          //this.$router.push("/");
          //location.reload();
        }else{
          this.session=r.data;
        }
      });

      axios.get("api/cartCount").then(r=>{
        this.count = r.data;
      });

      this.path = this.$route.path;
      // alert(this.path);
    },
    methods: {

      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if (key == 5) {
          this.toCart();
        } else if (key == 0) {
          if (this.$route.path == "/") {
            this.$router.push("/info")
            this.type = "切换购物版";
          } else {
            this.$router.push("/")
            this.type = "切换信息版";
          }
        }else if(key==1){
          this.$router.push("/login")
        }else if(key==2){
          this.$router.push("/register")
        }else if(key==3){
          this.$router.push("/userList")
        }else if(key==4){
          axios.get("api/logout").then(r=>{
            if(r.data==1) {
              location.reload();
              this.$router.push("/")
            }
          })
        }

      },
      toCart: function () {
        if(this.session!=null) {
          this.$router.push("/cart")
        }else{
          this.$router.push("/login")
        }
      }

    }
  }
</script>
