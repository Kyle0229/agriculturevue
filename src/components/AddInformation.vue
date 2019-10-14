<template>

  <div class="hello">
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="200px" style="margin-left: 100px">
      <!-- <el-form-item label="信息id">
         <el-input class="arrow" name="iid" v-model="informations.iid" style="width: 40%;margin-right: 400px"></el-input>
       </el-form-item>-->
      <el-form-item label="信息标题">
        <el-input class="arrow" name="iname" v-model="informations.iname" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="信息分类">
        <!--<el-input v-model="goods.cid" type="" name="info" style="width: 40%;margin-right: 400px">-->
        <!--</el-input>-->

        <el-select v-model="informations.cid" placeholder="请选择" value-key="mateGroup" style="width: 40%;margin-right: 400px">
          <el-option style="width: auto"  :value="1">
            农副产品
          </el-option>
          <el-option style="width: auto"  :value="2">
            工具
          </el-option>
          <el-option style="width: auto"  :value="3">
            化肥肥料
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="信息内容">
        <el-input  type="textarea" class="arrow" name="inews" v-model="informations.inews" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-row style="width: 70%;text-align: center">
        <el-button type="primary" plain @click="saveI()">确认提交</el-button>
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
        informations: {
        }
      }
    },
    methods: {
      saveI: function () {
        axios.post("/api/saveI", this.informations).then(res => {
          if (res.data != null) {
            if(this.$router.match("/adminadmin")){
              this.$router.push('/adminadmin/sudinformation');
            }else{
              this.$router.push('/admin/sudinformation');
            }
          }
          else {
            alert("新增失败");
          }
        })
      }
    }
  }
</script>
