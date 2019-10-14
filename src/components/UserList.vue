<template>
  <div style="text-align: center">
    <Header></Header>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人主页</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="margin-left: 100px">
      <h1>个人中心</h1>
    </div>
    <!--<span style="margin-left: 450px">用户头像:</span>-->
    <!--<input type="file" @change="getFile($event)" />-->
    <!--<el-button type="primary" plain @click="upload1()"  style="margin-right: 400px">上传</el-button>-->
    <!--<br/>-->

    <el-form label-width="400px" style="margin-left: 100px">
      <!--<div class="demo-basic&#45;&#45;circle">-->
        <!--<div class="block"><el-avatar :size="80" :src="users.pic"></el-avatar></div>-->
      <!--</div>-->
      <el-upload
        class="avatar-uploader"
        action="/api/uploadUser"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
        :disabled="haha">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i  class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>

      <el-form-item label="用户昵称">
        <el-input class="arrow" name="name" v-model="userList.name" style="width: 40%;margin-right: 400px" :disabled="haha"></el-input>
      </el-form-item>
      <el-form-item label="用户年龄">
        <el-input class="arrow" name="name" v-model="userList.age" style="width: 40%;margin-right: 400px" :disabled="haha"></el-input>
      </el-form-item>
      <el-form-item label="用户住址">
        <el-input  class="arrow" name="uaddress" v-model="userList.uaddress" style="width: 40%;margin-right: 400px" :disabled="haha"></el-input>
      </el-form-item>
      <el-form-item label="用户电话">
        <el-input  class="arrow" name="tel" v-model="userList.tel" style="width: 40%;margin-right: 400px" :disabled="haha"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input  class="arrow" name="email" v-model="userList.email" style="width: 40%;margin-right: 400px" :disabled="haha"></el-input>
      </el-form-item>
      <el-row style="margin-left: 0px">
        <el-button type="primary" plain @click="updateB()">修改</el-button>
        <el-button type="primary" plain @click="updateU()" :disabled="haha">修改提交</el-button>
      </el-row>
    </el-form>
  </div>
</template>
<style type="text/css" rel="stylesheet">
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 40px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 80px;
    height:80px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>
<script>
  import axios from 'axios';
  import Header from './Header.vue'
  import ElUpload from "../../node_modules/element-ui/packages/upload/src/index";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import ElDivider from "../../node_modules/element-ui/packages/divider/src/main";
  export default{
    components: {
      ElDivider,
      ElInput,
    Header},
    data(){
      return {
        msg: '修改用户',
        file: '',
        userList: {
            uid:'',
           pic:'',
          password:'',
          sex:'',
           name: "",
          age:"",
           uaddress: "",
           tel: "",
           email: ""
        },
        imageUrl: '',
        haha:true
      }
    },
    mounted() {
      var url ="api/findSession"
      axios.get(url).then(res=>{

        if (res.data!=null){
          this.userList=res.data
          this.imageUrl = res.data.pic;
        }
      })
    },
    methods: {
      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
//      upload1:function () {
//        let formData = new FormData();
//        formData.append("file", this.file);
//
//        axios.post("/api/uploadUser",formData).then(res=>{
//          alert(res.data);
//          if(res.data!='fail'){
//            this.users.pic=res.data;
//          }else {
//            alert(res.data);
//          }
//        })
//      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = res;
        this.userList.pic=res;
        //alert(this.userList.pic);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

      updateU: function () {
        var url ="api/updateU"
        axios.post(url,this.userList).then(res=>{
          if (res.data!=null) {
            this.$router.push("/userList")
          }else {
            alert("修改失败")
          }
        })
      },
      updateB:function () {
          this.haha =false;
          alert(this.haha);
      }
    }
  }
</script>
