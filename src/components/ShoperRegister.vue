<template>
  <div id="hello">
 <NoButtonHeader></NoButtonHeader>
    <div class="r_wrapper">
      <div class="r">
        <div style="height: 0px;text-align: center"><h3>商户注册</h3></div>
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="40px" style="margin-left: 100px">
      <el-form-item label="昵称">
        <el-input class="arrow" name="sname" v-model="shoper.sname" style="width: 70%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" name="spassword" v-model="shoper.spassword" style="width: 70%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input name="saddress" v-model="shoper.saddress" style="width: 70%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input name="semail" v-model="shoper.semail" style="width: 70%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input name="stel" v-model="shoper.stel" style="width: 70%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-row style="text-align: center;margin-bottom: 20px;">
        <el-button type="primary" plain @click="add()">注册</el-button>
      </el-row>
    </el-form>
      </div>
    </div>
    <!--<form method="post" enctype="multipart/form-data" @submit.prevent="regi()">
          昵称：<input name="loginName"><br>
          &lt;!&ndash;头像：<input type="file" name="file"/><br>&ndash;&gt;
          密码：<input name="password"><br>
          出生日期：<input name="createTime" type="date"><br>
          邮箱：<input type="email" name="email" v-model="user.email"><br>
          验证码：<input name="code"><button type="button" @click="send()">发送</button><br>
          <input type="submit" value="注册" @click="regi()">
        </form>-->
  </div>
</template>
<style lang="scss">
  $input_width:300px;

  .r_wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .r {
      width: 460px;
      height: 436px;
      margin-top: 40px;
      margin-bottom: 20px;
      border: 1px solid #eaeaea;
      box-shadow: 0 0 25px #cac6c6;
      .title {
        text-align: center;
        color: #505458;
      }
      .el-form-item__content {
        width: $input_width;
      }
      .el-button {
        width: $input_width;
      }
      .el-form {
        margin: 0px 80px auto 80px;
        .error {
          display: block;
          text-align: center;
          color: red;
        }
      }
    }
  }
  .recover{
    position:absolute;
    bottom:0px;
    cursor:pointer;
    color:#E6A23C;
    // display: none;
  }
  .bei{
    position:absolute;
    bottom:20px;
    cursor:pointer;
    color:#505458;
  }
</style>

<script>
  import axios from 'axios'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import NoButtonHeader from './NoButtonHeader.vue';
  export default{
    components: {ElButton,
    NoButtonHeader},
    data(){
      return{
        msg:'注册页面',
        shoper:{

        },

      }
    },
    methods:{
      add:function () {
        console.log(this.shoper)
        axios.post('api/shoperRegister',this.shoper).then(res=>{
          if (res.data=="success"){
            alert("注册成功!");
            this.$router.push('/shoperLogin');
          }else{
            alert("用户已存在")
            this.$router.push('/shoperRegister');
          }
        })
      },
      /*sendto:function () {
       axios.post('/api/sendEmail',this.user).then(res=>{
       console.log(res.data)
       })
       }*/
    }
  }
</script>
