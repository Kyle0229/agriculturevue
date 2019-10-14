<template>
  <div>
    <Header></Header>
    <div style="margin-top: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>购物车</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-top: 20px">
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      tooltip-effect="dark"
      @selection-change="handleSelectionChange"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
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
          <el-input-number  size="medium" min="0" step="1" v-model="tableData[scope.$index].cacount" v-if="tableData[scope.$index].cacount==1"></el-input-number>
          <el-input-number  size="medium" min="1" step="1" v-model="tableData[scope.$index].cacount" v-if="tableData[scope.$index].cacount!=1"></el-input-number>
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
    <el-button type="info" round  disabled v-if="multipleSelection==''">下订单</el-button>
      <el-button type="info" round @click="getOrders()" v-if="multipleSelection!=''">下订单</el-button>
    </div>
  </div>
</template>
<script>
  import ElCheckbox from "../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElInputNumber from "../../node_modules/element-ui/packages/input-number/src/input-number";
  import axios from 'axios';
  import Header from './Header.vue'
  export default{
    components: {
      ElInputNumber,
      ElCheckbox,
    Header},
    data(){

      return {
        tableData: [{
          caid: "",
          caname: "",
          oaprice: "",
          cacount: "1",
          catotalprice: ""

        }],
        multipleSelection: []
      }

      },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getOrders(){
          axios.post("api/addOrder",this.multipleSelection).then(r=>{
            if(r.data=='success'){
                this.$router.push('/order');
            }

          });

      }
      },
       mounted(){
        axios.get("api/selectCartAll").then(r=>{
              this.tableData = r.data;
        });
    }
  }
</script>
