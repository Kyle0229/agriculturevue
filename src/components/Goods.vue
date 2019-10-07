<template>
  <div>
    <el-button type="primary" @click="save()">新增商品</el-button>
    <el-table
      :data="goods"
      border
      style="width: 100%">
      <el-table-column
        prop="gname"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="oaprice"
        label="商品价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="info"
        label="商品信息"
        width="180">
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="page">
          <el-button type="danger" @click=" delete(page.row.id)" size="small">删除</el-button>
          <el-button type="danger" @click="(page.row.id)" size="small">修改</el-button>
        </template>

      </el-table-column>

    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page">
    </el-pagination>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        goods:[],
        total:0,
        params:{
          size:5,
          page:1,
        }
      }
    },
    mounted(){
      this.query();
    },
    methods:{
      query:function () {
        var url="api/selectAll"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.goods=res.data;
          this.total = res.data.total;
        })
      },
      changePage:function (page) {
        alert(page)
        this.params.page=page;
        this.query()
      },
      delete:function (id) {
        var url="api/delete"
        axios.post(url,{id:id}).then(res=>{
          this.query();
        })
      },
      update:function (id) {
          this.$router.push({path:'/update/'+id})
      }
    }
  }
</script>
