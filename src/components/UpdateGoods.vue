<template>

  <div class="hello" style="text-align: center">
    <el-radio-group size="small">
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form label-width="200px" style="margin-left: 100px">
      <el-form-item>
        <el-input class="arrow" name="goods" v-model="goods.gid"  type="hidden" ></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input class="arrow" name="goods" v-model="goods.gname" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商品分类">
        <!--<el-input v-model="goods.cid" type="" name="info" style="width: 40%;margin-right: 400px">-->
        <!--</el-input>-->

        <el-select v-model="goods.cid" placeholder="请选择" value-key="mateGroup" style="width: 40%;margin-right: 400px">
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
      <el-form-item label="商品图片">
        <div style="float: left;width: 40px">
        <img :src="goods.pic" v-model="goods.pic" name="pic" width="40" height="40" class="pic" style="margin-right: 400px"/>
        </div>
        <div style="float: left;">
        <el-upload
          class="upload-demo"
          action="api/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :on-success="success"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="商品单价">
        <el-input name="oaprice" v-model="goods.oaprice" style="width: 40%;margin-right: 400px"></el-input>
      </el-form-item>
      <el-form-item label="商品详情">
        <el-input v-model="goods.info" name="info" style="width: 40%;margin-right: 400px">
        </el-input>
      </el-form-item>
      <el-row style="width: 70%;text-align: center">
        <el-button type="primary" plain @click="updateData()">修改提交</el-button>
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
        msg: '修改商品',
        file: '',
        goods: {
          pic: ''
        }
      }
    },
    mounted() {
      var gid = this.$route.params.gid;
      //alert(gid);
      var url ="api/selectGoodsOne?gid="+gid;
      axios.get(url).then(res=>{

        if (res.data!=null){
          this.goods=res.data
        }
      })
    },
    methods: {
      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
//      upload:function () {
//        let formData = new FormData();
//        formData.append("file", this.file);
//        axios.post("/api/upload",formData).then(res=>{
//          console.log(res.data)
//          if(res.data!="fail"){
//            this.goods.pic=res.data;
//          }
//          else {
//            alert(res.data);
//          }
//        })
//      },
      success(response,file,fileList){
        this.goods.pic=response;
      },

      updateData: function () {
        var url ="api/update"
        axios.post(url,this.goods).then(res=>{

          if (res.data!=null) {
            this.$router.push("/admin/sudgoods")
          }else {
            alert("修改失败")
          }
        })

      }
    }

  }
</script>
