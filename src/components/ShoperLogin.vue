<template>
  <div>
  <NoButtonHeader></NoButtonHeader>
  <div class="login_wrapper">
    <div class="login">
      <el-form :model="shoper">
        <el-form-item>
          <h2 class="title">后台管理系统</h2>
        </el-form-item>
        <el-form-item>
          <el-input v-model="shoper.sname" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="shoper.spassword" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <!--<el-input v-model="goods.cid" type="" name="info" style="width: 40%;margin-right: 400px">-->
          <!--</el-input>-->

          <el-select v-model="type" placeholder="请选择角色" value-key="mateGroup" style="width: 40%;margin-right: 400px">
            <el-option style="width: auto"  :value="2">
              商户
            </el-option>
            <el-option style="width: auto"  :value="1">
              管理员
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button><br>
          <el-link type="primary" @click="regist()">无账号?请点击注册</el-link>

        </el-form-item>

      </el-form>

    </div>


  </div>
  </div>
</template>

<style lang="scss">
  $input_width:300px;

  .login_wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .login {
      width: 460px;
      height: 396px;
      margin-top: 40px;
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
  import NoButtonHeader from './NoButtonHeader.vue'
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default{
    components: {ElButton,
    NoButtonHeader},

    data(){
      return{
        msg:'',
        shoper:{

        },
        admin:{
            apname:'',
            appassword:''
        }
        ,
        type:''
      }
    },
    methods:{
      login:function () {
        if(this.type==2) {
          axios.post('api/shoperlogin', this.shoper).then(res => {
            if (res.data == "success") {
              this.$router.push('/admin');
            } else if (res.data == "fail") {
              this.$router.push('/shoperlogin');
              alert(res.data);
            } else {
              alert(res.data);
            }
          })
        }
        else if(this.type==1) {
            this.admin.apname = this.shoper.sname;
            this.admin.appassword = this.shoper.spassword;
          axios.post('api/adminlogin', this.admin).then(res => {
            if (res.data == "success") {
              this.$router.push('/adminadmin');
            } else if (res.data == "fail") {
              this.$router.push('/shoperlogin');
              alert(res.data);
            } else {
              alert(res.data);
            }
          })
        }
      },
      regist:function () {
        this.$router.push('/shoperRegister');
      }
    }
  }
</script>
