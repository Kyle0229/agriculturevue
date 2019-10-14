<template>
  <div class="hello">
    <Header></Header>
    <div class="block" >
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in items" :key="item">
          <el-image :src="item.src" ></el-image>
        </el-carousel-item>
      </el-carousel>
  </div>
    <div>
      <el-collapse  @change="handleChange">
        <el-collapse-item title="农产品   Produce" name="1">
          <div>点击对应的产品购买或查看详情</div>
          <div>本网站商品概不议价</div>
        </el-collapse-item>

      </el-collapse>
      <el-carousel  arrow="hover" loop="false" autoplay="false" interval="0" indicator-position="none">
        <el-carousel-item v-for="(item,i) in productsize" :key="item" style="background-color: white;text-align: center" >
          <div style="margin-left: 80px;margin-top: 40px">
            <el-row>
              <el-col :span="4" v-for="(produce, index) in products.slice(4*(i+1)-4,4*(i+1))" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="produce.pic" class="image" style="height: 130px">
                  <div style="padding: 14px;">
                    <span>{{produce.gname}}</span>
                    <span>￥{{produce.oaprice}}</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <el-button type="text" class="button" @click="toItem(produce.gid)">购买</el-button>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-carousel-item>
      </el-carousel>

      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="农业工具 Tools" name="1">
          <div>点击对应的产品购买或查看详情</div>
          <div>本网站商品概不议价</div>
        </el-collapse-item>
      </el-collapse>

      <el-carousel  arrow="hover" loop="false" autoplay="false" interval="0" indicator-position="none">
        <el-carousel-item v-for="(item,i) in toolsize" :key="item" style="background-color: white;text-align: center" >
      <div style="margin-left: 80px;margin-top: 40px">
      <el-row>
        <el-col :span="4" v-for="(tool, index) in tools.slice(4*(i+1)-4,4*(i+1))" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="tool.pic" class="image" style="height: 130px" >
            <div style="padding: 14px;">
              <span>{{tool.gname}}</span>
              <span>￥{{tool.oaprice}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click="toItem(tool.gid)">购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </div>
        </el-carousel-item>
      </el-carousel>

      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item  title="化肥肥料 Fertilizer" name="1" >
          <div>点击对应的产品购买或查看详情</div>
          <div>本网站商品概不议价</div>
        </el-collapse-item>
      </el-collapse>

          <el-carousel  arrow="hover" loop="false" autoplay="false" interval="0" indicator-position="none">
            <el-carousel-item v-for="(item,i) in fertilizersize" :key="item" style="background-color: white;text-align: center;" >
      <div style="margin-left: 80px;margin-top: 40px">
      <el-row>
        <el-col :span="4" v-for="(fertilizer, index) in fertilizers.slice(4*(i+1)-4,4*(i+1))" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="fertilizer.pic" class="image" style="height: 130px">
            <div style="padding: 14px;">
              <span>{{fertilizer.gname}}</span>
              <span>￥{{fertilizer.oaprice}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button" @click="toItem(fertilizer.gid)">购买</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </div>
            </el-carousel-item>
          </el-carousel>

    </div>
  </div>
</template>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;

  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
<script>

  import axios from 'axios';
  import Header from './Header.vue'
export default {
  name: 'HelloWorld',
  components:{
    Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items:[{src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570431643567&di=e5b29e470e84792ccc3c231363bc318f&imgtype=0&src=http%3A%2F%2Fimg011.hc360.cn%2Fg3%2FM09%2F52%2FCD%2FwKhQvFKpEDSEeoTWAAAAACeFuBE479.jpg'},
        {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570432310623&di=d8087a943ce520b47110543ff22768e6&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140325%2F6608733_084924891000_2.jpg'},
        {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570431643566&di=90aed2ceec5e0bec7819249f3d5ccecc&imgtype=0&src=http%3A%2F%2Fimg06.tooopen.com%2Fimages%2F20170704%2Ftooopen_sy_215298046534.jpg'},
        {src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570431643565&di=fd8bb8b28588e89f5ccd34c350d7898d&imgtype=0&src=http%3A%2F%2Fpic5.nipic.com%2F20100129%2F47541_070530057452_2.jpg'}],
      products:[],
      tools:[],
      fertilizers:[],
      currentDate: new Date(),
      productsize:'',
      toolsize:'',
      fertilizersize:''
    }
  },
  mounted(){
      axios.get("api/selectAllByCid?id=1").then(r=>{
          this.products=r.data;
          this.productsize=this.products.length%4==0?Math.floor(this.products.length/4):Math.floor(this.products.length/4+1);
      });
    axios.get("api/selectAllByCid?id=2").then(r=>{
      this.tools=r.data;
      this.toolsize=this.tools.length%4==0?Math.floor(this.tools.length/4):Math.floor(this.tools.length/4+1);
    });
    axios.get("api/selectAllByCid?id=3").then(r=>{
      this.fertilizers=r.data;
      this.fertilizersize=this.fertilizers.length%4==0?Math.floor(this.fertilizers.length/4):Math.floor(this.fertilizers.length/4+1);
    });
  },
  methods:{
      toItem:function (gid) {
        this.$router.push("/item/"+gid);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
