<template>
  <div>
    <div style="margin-top: 20px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/item' }">商品详情</el-breadcrumb-item>
        <el-breadcrumb-item>预约交易</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="margin-left: 400px">
<el-form ref="form" :model="form" label-width="80px" style="width: 400px" size="medium">
  <el-form-item label="预约名称">
    <el-input v-model="form.name" disabled="true"></el-input>
  </el-form-item>

  <el-form-item label="交易时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="匿名交易">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="交易地点">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="雁塔区" value="yanta"></el-option>
      <el-option label="未央区" value="weiyang"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="备注">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
  </div>
  </div>
</template>

<script>
  export default{
      data(){
          return {
            form: {
              name: '产品线下交易预约',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
          }

      }
  }

</script>
