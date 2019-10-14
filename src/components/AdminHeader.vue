<template>
  <div>
    <div style="line-height: 100px;height: 100px;background-color: #FFFFFF;margin-left: 0px;color: azure;">
      <div style="float: left;margin-left: 20px;
    margin-right: 40px;">
        <!--<img src="../assets/logo.png" style="height: 60px;width: 60px; text-align: left;float: left;">-->
        <img src=" http://www.logo123.net/logos/201212/201212061419364715.jpg" style="height: 100px;width: 140px; text-align: left;float: left;">
        <!--http://www.logo123.net/logos/201212/201212061419364715.jpg-->
        <div style="font-size: 25px;line-height:100px;height: 100px;width:350px;float: left; color: black">农业信息网 <i style="font-size: 15px">后台管理页面</i></div>
      </div>

      <div style="float: right;line-height: 40px;height: 40px;font-size: 15px;color: black;margin-top: 40px;margin-right: 20px;">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="float: right">
          <el-submenu index="2" class="item" v-if="userList!=null">

            <template slot="title"><el-avatar :src="imageUrl"></el-avatar> {{userList.name}}</template>
            <el-menu-item index="2-1" @click="Logout()">退出</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data(){
      return{
          userList:{
              name:''
          },
          imageUrl:''
      }
    },
    mounted(){
      if(this.$route.path.match("/adminadmin")) {
        var url ="api/findAdmin"
        axios.get(url).then(res=>{

          if (res.data!=null){
            this.userList.name=res.data.apname;
            this.imageUrl = res.data.pic;
          }
        })
      }else{
        var url ="api/findShoper"
        axios.get(url).then(res=>{

          if (res.data!=null){
            this.userList.name=res.data.sname;
            this.imageUrl = res.data.pic;
          }
        })
      }

    },
    methods: {
        Logout(){
            if(this.$route.path.match("/admin/")) {
              axios.get("api/shoperlogout").then(r => {
                if (r.data == 1) {
                  // location.reload();
                  this.$router.push("/shoperLogin")
                }
              })
            }else{
              axios.get("api/adminlogout").then(r => {
                if (r.data == 1) {
                  // location.reload();
                  this.$router.push("/shoperLogin")
                }
              })
            }
        }
    }

  }
</script>
