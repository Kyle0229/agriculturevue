
<template>

  <div class="hello">
    <!--<h1>{{ msg }}</h1>-->
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="400px" style="margin-left: 100px">
      <el-form-item label="用户昵称">
        <el-input class="arrow" name="sname" v-model="shopers.sname" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input class="arrow" name="spassword" v-model="shopers.spassword" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户住址">
        <el-input  class="arrow" name="saddress" v-model="shopers.saddress" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户电话">
        <el-input  class="arrow" name="stel" v-model="shopers.stel" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input  class="arrow" name="semail" v-model="shopers.semail" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-row style="margin-left: 500px">
        <el-button type="primary" plain @click="updateS()">确认提交</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  import ElUpload from "../../node_modules/element-ui/packages/upload/src/index";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  export default{
    components: {ElInput},
    data(){
      return {
        msg: '修改商户',
        shopers: {
        }
      }
    },
    mounted() {
      var sid = this.$route.params.sid;
      alert(sid);
      var url ="api/selectOneS?sid="+sid;
      axios.get(url).then(res=>{

        if (res.data!=null){
          this.shopers=res.data
        }
      })
    },
    methods: {
      updateS: function () {
        var url ="api/updateS"
        axios.post(url,this.shopers).then(res=>{

          if (res.data!=null) {
            this.$router.push({name:"Shoper"})
          }else {
            alert("修改失败")
          }
        })

      }
    }

  }
</script>
