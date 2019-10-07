<template>
  <div class="hello" >
    <div style="margin-top: 20px;">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品详情</el-breadcrumb-item>
    </el-breadcrumb>
    </div>
    <div class="demo-image__placeholder" style="margin-left: 40px;float: left;margin-top: 20px;">
      <div class="block">
        <el-image :src="src" style="width: 600px;height: 400px">
          <div slot="placeholder" class="image-slot">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
      <div>
      </div>
    </div >
    <div style="float: left;margin-left: 40px;margin-top:20px;height: 800px;width: 500px;">
      <div style="height: 50px;margin-top: 20px;">商品编号:<span style="margin-left: 60px">{{goods.gid}}</span></div>
      <div style="height: 50px;margin-top: 20px;">商品名称:<span style="margin-left: 60px" >{{goods.gname}}</span></div>
      <div style="height: 50px;margin-top: 20px;">商品价格:<span style="margin-left: 60px">{{goods.oaprice}}</span></div>
      <div style="height: 50px;margin-top: 20px;">商品数量:<span style="margin-left: 60px" >{{count}}</span></div>
      <div style="height: 50px;margin-top: 20px;">商品详情:<span style="margin-left: 60px" >{{goods.info}}</span></div>
      <div style="height: 50px;margin-top: 20px;text-align: center;">
      <el-row>
        <el-button type="info" @click="toAppointment()" round>预约交易</el-button>
        <el-button type="info" @click="toCart()" round>立即购买</el-button>
        <el-button type="info" round>添加购物车</el-button>
      </el-row>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios';
export default {

  name: 'Items',
  data () {
    return {
      msg: '这是详情页面',
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      goods:{
          gid:"",
          gname:"",
          oaprice:"",

          info:""
      },
      count:"1"
    }
  },
      methods:{
      toOrder:function () {
          this.$router.push("/order");

        },
        toAppointment:function () {
          this.$router.push("/appointment");

        },
        toCart:function () {
          this.$router.push("/cart")
        }

    },
  mounted(){
       axios.post("api/selectOne",{"gid":1}).then(r=>{
              this.goods = r.data;
       });
  }

}
</script>
