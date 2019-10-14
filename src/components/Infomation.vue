<template>
  <div>
    <Header></Header>
    <el-page-header @back="goBack" content="信息版页面">
    </el-page-header>
    <div v-for="info in infos" :key="o" class="text item" style="margin-top: 40px">
    <el-card class="box-card">
        {{info.inews}}
    </el-card>
    </div>
    <div style="text-align: center;margin-top: 30px">
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="count"
      :current-page.sync="page"
      @current-change="handleCurrentChange"
      :total="total">
    </el-pagination>
    </div>
  </div>
</template>
<style type="text/css" rel="stylesheet">
  .list-item{
    height: 35px;
    background-color: lightgray;
    margin:20px;
    margin-left: 0px;
    list-style-type:none;
  }

</style>
<script>
  import axios from 'axios';
  import Header from './Header.vue'
  export default{
    components:{
      Header
    },
      data(){
        return {
          count: 3,
          loading: false,
          infos:[],
          total:'',
          page:'1'

        }
      },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      },
      goBack(){
          this.$router.push("/");
          location.reload();
      }
      , handleCurrentChange(val) {

        this.page = val;
          this.Query();
      },
      Query(){
        axios.get("api/selectAllI/"+this.page+"/"+this.count).then(r=>{
          this.infos = r.data.list;
          this.total = r.data.total;
        })
      }
    },
    mounted(){
        this.Query();
    }
  }
</script>
