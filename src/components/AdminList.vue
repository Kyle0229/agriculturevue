<template>
  <div style="text-align: center">
    <!--<span style="margin-left: 450px">用户头像:</span>-->
    <!--<input type="file" @change="getFile($event)" />-->
    <!--<el-button type="primary" plain @click="upload1()"  style="margin-right: 400px">上传</el-button>-->
    <!--<br/>-->
    <el-form label-width="200px" style="margin-left: 100px">
      <!--<div class="demo-basic&#45;&#45;circle">-->
        <!--<div class="block"><el-avatar :size="80" :src="users.pic"></el-avatar></div>-->
      <!--</div>-->
      <el-form-item >
     <div  class="avatar-uploader"><div class="el-upload"style="margin-right: 400px"><h1>管理员</h1></div></div>
      </el-form-item>
      <el-form-item label="用户昵称">
        <el-input class="arrow" name="name" v-model="userList.apname" style="width: 40%;margin-right: 400px" disabled></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input  class="arrow" name="uaddress" v-model="userList.appassword" style="width: 40%;margin-right: 400px" disabled></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<style type="text/css" rel="stylesheet">
  .avatar-uploader  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 40px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 80px;
    height:80px;
    margin-right: 200px;
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
      ElInput},
    data(){
      return {
        msg: '修改用户',
        file: '',
        userList: {
            apid:'',
            appassword:'',
            apname: ''
        },
      }
    },
    mounted() {
      var url ="api/findAdmin"
      axios.get(url).then(res=>{

        if (res.data!=null){
          this.userList=res.data
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
        var url ="api/updateS"
        axios.post(url,this.userList).then(res=>{
          if (res.data!=null) {
            this.$router.push("/shoperList")
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
