<template>
  <div>
    <Header></Header>
    <div style="margin-top: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/item' }">商品详情</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/cart' }">购物车</el-breadcrumb-item>
        <el-breadcrumb-item >订单详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-top: 40px">
      订单号:{{orderId}}
    <el-card class="box-card">
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="id"
          label="序号"
          width="240">
        </el-table-column>
        <el-table-column
        prop="name"
        label="名称"
        width="240">
      </el-table-column>
        <el-table-column
          prop="price"
          label="价格"
        >
        </el-table-column>
      </el-table>
    </el-card>
    </div>
    <el-card class="box-card">
      <div style="text-align:right;margin-right: 130px;font-size: 25px">总计：{{total}}</div>
      <div style="text-align:right;margin-right: 130px;font-size: 25px;margin-top: 40px;" ><el-button type="primary" @click="pay()">支付</el-button></div>
    </el-card>
  </div>
</template>
<script>
  import axios from 'axios'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import Header from './Header.vue'
  export default{
    components: {ElButton,
    Header},
    data(){
          return{
            tableData:{
                id:'',
                name:'',
               price:''
            },
            total:'',
            date:new Date(),
            orderId:''

          }

      },
  methods:{
        pay(){
          axios.post("api/goAlipay",{"orderId":this.orderId,"orderAmount":this.total}).then(res=> {
            //this.$router.push({name:"Payment",params:{"payhtml":r.data}});
            const div = document.createElement('div')
            div.innerHTML = res.data; //此处form就是后台返回接收到的数据
            document.body.appendChild(div)
            document.forms[0].submit()
          })
        }
  },
    mounted(){
        axios.get("api/createOrder").then(r=>{
            this.orderId = r.data.orderNum;

        });
        axios.get("api/products").then(r=>{
             this.tableData=r.data;
          var totals = 0;
          for(var i=0;i<r.data.length;i++){
            totals += parseFloat(r.data[i].price);
          }
          alert(totals);
          this.total =totals;
        });

    }
  }
</script>
