
<template>

  <div class="hello">
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="200px" style="margin-left: 100px">
      <el-form-item label="商户昵称">
        <el-input class="arrow" name="sname" v-model="shopers.sname" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商户密码">
        <el-input class="arrow" name="spassword" v-model="shopers.spassword" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商户住址">
        <el-input  class="arrow" name="saddress" v-model="shopers.saddress" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商户电话">
        <el-input  class="arrow" name="stel" v-model="shopers.stel" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商户邮箱">
        <el-input  class="arrow" name="semail" v-model="shopers.semail" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-row style="margin-left: 300px">
        <el-button type="primary" plain @click="saveS()">确认提交</el-button>
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
        msg: '新增用户',
        shopers: {
        }
      }
    },
    methods: {
      saveS: function () {
        axios.post("/api/saveS", this.shopers).then(res => {
          if (res.data != null) {
            this.$router.push('/Shoper');
          }
          else {
            alert("新增失败");
          }
        })
      }
    }
  }
</script>
