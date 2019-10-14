<template>
    <div >
      <el-table
        :data="goods"
        border
        style="width: 100%">
        <el-table-column
          prop="gid"
          label="商品id"
          width="100px"
        >
        </el-table-column>
        <el-table-column align="center"
                         prop="gname"
                         label="商品名称"
                         width="200px">
        </el-table-column>
        <el-table-column align="center"
                         prop="oaprice"
                         label="商品价格"
                         width="180">
        </el-table-column>
        <el-table-column align="center"
                         prop="info"
                         label="商品信息"
                         width="200px">
        </el-table-column>
        <el-table-column label="图片" width="200px" align="center" >
          <template slot-scope="goods">
          <el-image :src="goods.row.pic" style="height:60px;width: 100px"></el-image>
        </template>
        </el-table-column>
        <el-table-column label="操作"  align="center">
          <template slot-scope="goods" >
            <el-button type="danger" @click="deleteg(goods.row.gid)" size="small">删除</el-button><br/>
            <el-button type="danger" @click="update(goods.row.gid)" size="small" style="margin-top: 10px">修改</el-button>
          </template>
        </el-table-column>

      </el-table>
      <div style="text-align: center">
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
          goods:[],
          total:0,
          params:{
            size:4,
            page:1,
          }
        }
      },
      mounted(){
        this.query();
      },
      methods:{
        query:function () {
          var url="api/selectAll/"+this.params.page+"/"+this.params.size
          axios.get(url).then(res=>{
            this.goods=res.data.list;
            this.total = res.data.total;
          })
        },
        changePage:function (page) {
          this.params.page=page;
          this.query();
        },
        deleteg:function (gid) {
          // var gid = this.router.gid;
          alert(gid);

          var url="api/delete/"+gid;
          axios.get(url).then(res=>{
            this.query();
          });
        },
        update:function (gid) {
          this.$router.push({path:'/adminadmin/updateGoods/'+gid})
        },
        save:function () {
          this.$router.push({name:"save"})
        },

      }
    }
  </script>
