<template>
  <div>
    <div style="margin-top: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/item' }">商品详情</el-breadcrumb-item>
        <el-breadcrumb-item>购物车</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-top: 20px">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        width="50">
        <el-checkbox>
        </el-checkbox>
      </el-table-column>
      <el-table-column
        prop="caid"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="caname"
        label="商品名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="oaprice"
        label="单价"
        width="180">
      </el-table-column>
      <el-table-column
        label="数量"
        width="225"
       prop="cacount">
        <template slot-scope="scope">
        <el-input-number  size="medium" min="0" step="1" v-model="tableData[scope.$index].cacount"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column
        prop="catotalprice"
        label="总价"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        width="180">
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
    <div style="margin-top: 20px;float: right;margin-right: 150px">
    <el-button type="info" round>下订单</el-button>
    </div>
  </div>
</template>
<script>
  import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElInputNumber from "../../node_modules/element-ui/packages/input-number/src/input-number";
  import axios from 'axios';
  export default{
    components: {
      ElInputNumber,
      ElCheckbox},
    data(){

         return {
           tableData: [{
             caid: "",
             caname: "",
             oaprice: "",
             cacount: "1",
             catotalprice: ""

           }]
         }
      },
    method(){

      },
       mounted(){
        axios.get("api/selectCartAll").then(r=>{
              this.tableData = r.data;
        });
    }
  }
</script>
