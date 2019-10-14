<template>
  <div >
    <NoButtonHeader></NoButtonHeader>
    <el-card class="box-card"style="width: 400px;height: 300px;margin-top: 40px;text-align: center;margin-left: 400px;">
      <div slot="header" class="clearfix" >
        <span>登录</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="60px" class="demo-ruleForm" style="text-align: center;line-height: 400px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model.number="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">登录</el-button>
            <el-button @click="register()">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
  import axios from 'axios';
  import NoButtonHeader from './NoButtonHeader.vue'
  export default{
      components: {
        NoButtonHeader
      },
      data(){
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('用户名不能为空'));
          }

        };
        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
              name:'',
            password: ''
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        };
      },
    methods: {
      login() {
          axios.post("api/login",{"name":this.ruleForm.name,"password":this.ruleForm.password}).then(r=>{
           //alert(r.data);
           if(r.data=='success'){
             this.$router.push("/");
             location.reload();
           }
    })
      },
      register(){
         this.$router.push("register");
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }

</script>
