<template>
  <div>
    <div>
      {{total_amount}}
    </div>
  </div>
</template>
<script>
  import { getUrlParam } from "./GetUrlParam";
  import axios from 'axios';
  export default{
    mounted(){
     alert(window.location.toString().substr(window.location.toString().indexOf("?")));
     axios.get("api/alipayReturnNotice"+window.location.toString().substr(window.location.toString().indexOf("?"))).then(r=>{
          if(r.data=='success'){
              axios.get("api/deleteCart").then(res=>{
                  if(res.data=='success') {
                    this.$router.push("/");
                  }
              });


          }
     })
    },
      data(){
          return{
             total_amount:''
          }
      },
    methods:{

    }

  }
</script>
