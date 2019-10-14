<template>

  <div class="hello">
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="400px"  style="margin-left: 100px">
      <el-form-item label="信息id">
        <el-input class="arrow" name="informations" v-model="informations.iid" style="width: 40%;margin-right: 400px" ></el-input>
      </el-form-item>
      <el-form-item label="信息标题">
        <el-input class="arrow" name="informations" v-model="informations.iname" style="width: 40%;margin-right: 400px" width="400px"></el-input>
      </el-form-item>
      <el-form-item label="信息内容">
        <el-input class="arrow" name="informations" v-model="informations.inews" style="width: 40%;margin-right: 400px" width="400px" height="400px"></el-input>
      </el-form-item>

      <el-row style="margin-left: 500px">
        <el-button type="primary" plain @click="updateI()">修改提交</el-button>
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
        msg: '修改信息',
        informations: {
        }
      }
    },
    mounted(){
      var iid = this.$route.params.iid;
      alert(iid);
      var url ="api/selectOneI?iid="+iid;
      axios.get(url).then(res=>{

        if (res.data!=null){
          this.informations=res.data
        }
      })
    },
    methods: {

      updateI: function () {
        var url ="api/updateI"
        axios.post(url,this.informations).then(res=>{

          if (res.data!=null) {
            this.$router.push({name:"Information"})
          }else {
            alert("修改失败")
          }
        })

      }
    }

  }
</script>
