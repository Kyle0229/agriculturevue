<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import axios from 'axios';
export default {
  name: 'App'
}
//,
//
//  data(){
//      return{
//        type:"信息版",
//        session:{},
//        count:'',
//        path:""
//      }
//  },
//  mounted(){
//    axios.get("api/findSession").then(r => {
//        if(r.data=='') {
//          this.session=null;
//          this.$router.push("/");
//        }else{
//          this.session=r.data;
//        }
//    });
//
//      axios.get("api/cartCount").then(r=>{
//        this.count = r.data;
//      });
//
//      this.path = this.$route.path;
//     // alert(this.path);
//  },
//  methods: {
//
//    handleSelect(key, keyPath) {
//      console.log(key, keyPath);
//      if (key == 5) {
//        this.toCart();
//      } else if (key == 0) {
//        if (this.$route.path == "/") {
//          this.$router.push("/info")
//          this.type = "购物版";
//        } else {
//          this.$router.push("/")
//          this.type = "信息版";
//        }
//      }else if(key==1){
//        this.$router.push("/login")
//      }else if(key==2){
//        this.$router.push("/register")
//      }else if(key==4){
//        axios.get("api/logout").then(r=>{
//            if(r.data==1) {
//              location.reload();
//              this.$router.push("/")
//            }
//        })
//      }
//
//    },
//    toCart: function () {
//        if(this.session!=null) {
//          this.$router.push("/cart")
//        }else{
//          this.$router.push("/login")
//        }
//    }
//
//  }
//}
</script>


