<template>
  <div >
    <el-table
      :data="informations"
      border
      style="width: 100%">
      <el-table-column
        prop="iid"
        label="编号"
        width="50px"
      >
      </el-table-column>
      <el-table-column align="center"
                       prop="iname"
                       label="信息标题"
                       width="100px">
      </el-table-column>
      <el-table-column align="center"
                       prop="inews"
                       label="信息内容"
                       width="780px">
      </el-table-column>


      <el-table-column label="操作" align="center">
        <template slot-scope="informations" >
          <el-button type="danger" @click="deleteI(informations.row.iid)" size="small">删除</el-button><br/>
          <el-button type="danger" @click="updateI(informations.row.iid)" size="small" style="margin-top: 10px">修改</el-button>
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
        informations:[],
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
        var url="api/selectAllI/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.informations=res.data.list;
          this.total = res.data.total;
        })
      },
      changePage:function (page) {
        //alert(page)
        this.params.page=page;
        this.query();
      },
      deleteI:function (iid) {
        // var gid = this.router.gid;
        alert(iid);

        var url="api/deleteI/"+iid;
        axios.get(url).then(res=>{
          this.query();
        });
      },
      updateI:function (Iid) {
        this.$router.push({path:'/admin/updateI/'+Iid})
      },
      saveI:function () {
        this.$router.push({name:"saveI"})
      },

    }
  }
</script>
