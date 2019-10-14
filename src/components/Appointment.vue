<template>
  <div>
    <Header></Header>
    <div style="margin-top: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/item' }">商品详情</el-breadcrumb-item>
        <el-breadcrumb-item>预约交易</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-left: 400px;margin-top: 40px">
<el-form ref="form" :model="form" :rules="rules" rel="form" label-width="80px" style="width: 400px" size="medium">
  <el-form-item label="预约名称">
    <el-input v-model="name" disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="商户编号">
    <el-input v-model="form.sid" disabled="true"></el-input>
  </el-form-item>
  <el-form-item label="交易时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.ocreatetime" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="交易地点">
    <el-select v-model="form.uaddress" placeholder="请选择活动区域">
      <el-option label="雁塔区" value="yanta"></el-option>
      <el-option label="未央区" value="weiyang"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="备注" prop="info">
    <el-input type="textarea" v-model="form.info"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit()">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Header from './Header.vue'
  export default{
    components:{
      Header
    },
      data(){
        var checktime = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('日期不能为空'));
          }
        };
        var checkinfo = (rule, value, callback) => {
          if (value === '') {
            return callback(new Error('备注不能为空'));
          }
        };
          return {
            name: '产品线下交易预约',
            form: {
              sid:'',
              ocreatetime:'',
              uaddress:'',
              info:'',
            },
            shoper:{},
            rules: {
              ocreatetime: [
                { validator: checktime, trigger: 'blur' }
              ]
            },
            uaddress: [
              { required: true, message: '请选择地点', trigger: 'blur' }
            ],

              info: [
                {validator: checkinfo, trigger: 'blur' }
              ]
          }

      },
    mounted(){
          alert(this.$route.params.sid);
          this.form.sid = this.$route.params.sid;
    },
    methods: {
      onSubmit: function () {
        axios.post("api/saveAppointment", this.form).then(r => {
          this.shoper = r.data;
          this.$alert('<div>姓名: '+r.data.sname+'</div>'+'<div>电话: '+r.data.saddress+'</div>'+'<div>邮件: '+r.data.semail+'</div>', '对方信息', {
            dangerouslyUseHTMLString: true,
            confirmButtonText: '确定',
            callback: action => {
             this.$router.push("/");
            }
          });

        });
      }
    }
  }

</script>
