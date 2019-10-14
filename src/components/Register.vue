<template>
  <div>
    <NoButtonHeader></NoButtonHeader>
    <el-card class="box-card"style="width: 400px;height: 700px;margin-top: 40px;margin-left: 400px">
      <div slot="header" class="clearfix" style="text-align: center" >
        <span>注册</span>
      </div>
      <div v-for="o in 1" :key="o" class="text item">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm" style="padding-right: 40px">
          <el-form-item label="用户名" prop="name">
            <el-input v-model.number="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input type="age" v-model="ruleForm.age" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-input type="sex" v-model="ruleForm.sex" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="uaddress">
            <el-input type="address" v-model="ruleForm.uaddress" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="tel">
            <el-input type="tel" v-model="ruleForm.tel" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input type="text" v-model="code" autocomplete="off" style="width: 80px;float: left"></el-input>
            <el-button type="text" @click="sendEmail()" style="margin-left: 20px;float: left">点击获取验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register()">注册</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      components:{
          NoButtonHeader
      },
      data(){
        var checkAge = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('年龄不能为空'));
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
          } else if (value !== this.ruleForm.password) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return {
          ruleForm: {
            name:'',
            password: '',
            age: '',
            sex:'',
            uaddress:'',
            tel:'',
            email:''

          },
          code:''
          ,
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
      register() {
            axios.post("api/register",{'user':this. ruleForm,'code':this.code}).then(r=>{
                alert(r.data);
            });

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      sendEmail(){
          axios.get("api/sendEmail?email="+this.ruleForm.email).then(r=>{
           if(r.data=='success'){
               this.$router.push("/login");
           }else{
               alert(r.data);
           }
          })
      }
    }

  }
</script>
