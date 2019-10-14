<template>
  <div style="width: 100%;margin: auto">
    <el-table
      :data="shopers"
      border
      style="width: 100%">
      <el-table-column
        prop="sid"
        label="编号"
        width="50px"
      >
      </el-table-column>
      <el-table-column align="center"
                       prop="sname"
                       label="商户昵称"
                       width="100px">
      </el-table-column>
      <el-table-column align="center"
                       label="商户头像"
                       width="100px">
        <template slot-scope="shopers">
          <el-image :src="shopers.row.pic" style="height:60px;width: 60px"></el-image>
        </template>
      </el-table-column>
      <el-table-column align="center"
                       prop="saddress"
                       label="地址"
                       width="300">
      </el-table-column>
      <el-table-column align="center"
                       prop="semail"
                       label="邮箱"
                       width="180">
      </el-table-column>
      <el-table-column align="center"
                       prop="stel"
                       label="电话号码"
                       width="140">
      </el-table-column>
      <el-table-column label="操作"  align="center">
        <template slot-scope="shopers" >
          <el-button type="danger" @click="deleteS(shopers.row.sid)" size="small">删除</el-button><br/>
          <el-button type="danger" @click="updateS(shopers.row.sid)" size="small" style="margin-top: 10px">修改</el-button>
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
        shopers:[],
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
        var url="api/selectAllS/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.shopers=res.data.list;
          this.total = res.data.total;
        })
      },
      changePage:function (page) {
        alert(page)
        this.params.page=page;
        this.query();
      },
      deleteS:function (sid) {
        // var gid = this.router.gid;
        alert(sid);

        var url="api/deleteS/"+sid;
        axios.get(url).then(res=>{
          this.query();
        });
      },
      updateS:function (Sid) {
        this.$router.push({path:'/adminadmin/updateS/'+Sid})
      },
      saveS:function () {
        this.$router.push({name:"saveS"})
      },

    }
  }
</script>
