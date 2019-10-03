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
        prop="date"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="商品名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="date"
        label="单价"
        width="180">
      </el-table-column>
      <el-table-column
        label="数量"
        width="225">
        <el-input-number size="medium"></el-input-number>
      </el-table-column>
      <el-table-column
        prop="name"
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
  export default{
    components: {
      ElInputNumber,
      ElCheckbox},
    data(){
          return{
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄'
            }]
          }
      }
  }
</script>
