<template>
  <div>
    <admin-header></admin-header>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246);%">
        <el-menu :default-openeds="['1','2', '3']" style="height: 100%">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>商品管理</template>
            <el-menu-item-group>
              <router-link to="/admin/addgoods"><el-menu-item index="1-1" >增加商品</el-menu-item></router-link>
              <router-link to="/admin/sudgoodsbysid"><el-menu-item index="1-2">管理商品</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>信息管理</template>
            <el-menu-item-group>
              <router-link to="/admin/addinformation"><el-menu-item index="2-1">增加信息</el-menu-item></router-link>
              <router-link to="/admin/sudinformationbysid"><el-menu-item index="2-2">管理信息</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>个人中心</template>
            <el-menu-item-group>
              <router-link to="/admin/shoperList"><el-menu-item index="3-1">个人信息</el-menu-item></router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main >
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style type="text/css" rel="stylesheet">
  .router-link-active {
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
</style>
<script>
  import AdminHeader from './AdminHeader.vue'
  //location.reload();
  export default{
   components:{
       AdminHeader
   },
      data(){
          return{

          }
      },
    mounted(){
      for (i=0;i<1;i++)
      {
        window.location.reload();
      }
    }

  }
</script>
