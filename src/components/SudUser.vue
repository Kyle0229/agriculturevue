<template>
  <div style="width: 100%;margin: auto">
    <el-table
      :data="users"
      border
      style="width: 100%">
      <el-table-column
        prop="uid"
        label="编号"
        width="60"
      >
      </el-table-column>
      <el-table-column align="center"
                       prop="name"
                       label="用户昵称"
                       width="80">
      </el-table-column>
      <el-table-column align="center"
                       label="用户头像"
                       width="100">
        <template slot-scope="users">
          <el-image :src="users.row.pic" style="height:60px;width: 60px"></el-image>
        </template>
      </el-table-column>
      <el-table-column align="center"
                       prop="age"
                       label="年龄"
                       width="60px">
      </el-table-column>
      <el-table-column align="center"
                       prop="sex"
                       label="性别"
                       width="60px">
      </el-table-column>
      <el-table-column align="center"
                       prop="uaddress"
                       label="用户地址"
                       width="200px">
      </el-table-column>
      <el-table-column align="center"
                       prop="tel"
                       label="用户电话"
                       width="120">
      </el-table-column>
      <el-table-column align="center"
                       prop="email"
                       label="用户email"
                       width="160px">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="users" >
          <el-button type="danger" @click="deleteU(users.row.uid)" size="small">删除</el-button><br/>
          <el-button type="danger" @click="updateU(users.row.uid)" size="small" style="margin-top: 10px">修改</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div style="width:20%;margin: auto">
      <el-pagination
        layout="prev, pager, next"
        :page-size="this.params.size"
        v-on:current-change="changePage"
        :total="total" :current-page="this.params.page">
      </el-pagination>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import ElRow from "element-ui/packages/row/src/row";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {
      ElInput,
      ElRow},
    data(){
      return{
        users:[],
        total:0,
        params:{
          size:3,
          page:1,
        }
      }
    },
    mounted(){
      this.query();
    },
    methods:{
      query:function () {
        var url="api/selectAllU/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.users=res.data.list;
          this.total = res.data.total;
        })
      },
      changePage:function (page) {
        alert(page)
        this.params.page=page;
        this.query();
      },
      deleteU:function (uid) {
        // var gid = this.router.gid;
        alert(uid);

        var url="api/deleteU/"+uid;
        axios.get(url).then(res=>{
          this.query();
        });
      },
      updateU:function (uid) {
        this.$router.push({path:'/adminadmin/updateU/'+uid})
      },
      saveU:function () {
        this.$router.push({name:"saveU"})
      },

    }
  }
</script>
