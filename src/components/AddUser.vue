
<template>
  <div class="hello">
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="200px" style="margin-left: 100px">
      <el-form-item label="用户昵称">
        <el-input class="arrow" name="name" v-model="users.name" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input class="arrow" name="password" v-model="users.password" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户年龄">
        <el-input  class="arrow" name="age" v-model="users.age" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户性别">
        <el-select v-model="users.sex" placeholder="请选择性别" value-key="mateGroup" style="width: 40%;margin-right: 400px">
          <el-option style="width: auto"  :value="1">
            男
          </el-option>
          <el-option style="width: auto"  :value="0">
            女
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="用户住址">
        <el-input  class="arrow" name="uaddress" v-model="users.uaddress" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户电话">
        <el-input  class="arrow" name="tel" v-model="users.tel" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱">
        <el-input  class="arrow" name="email" v-model="users.email" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-row style="margin-left: 300px">
        <el-button type="primary" plain @click="save()">确认提交</el-button>
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
        users: {
        }
      }
    },
    methods: {
      save: function () {
        axios.post("/api/saveUMd5", this.users).then(res => {
          if (res.data != null) {
            this.$router.push('/User');
          }
          else {
            alert("新增失败");
          }
        })
      }
    }
  }
</script>
