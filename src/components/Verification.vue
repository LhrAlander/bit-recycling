<template>
<div>
  <div class="signin-bg">
    <div class="signin-bg-masking"></div>
  </div>  
  <div class="signin-ver">
   
    <input type="text" class="signin-ver-input" placeholder="输入短信验证码" @focus="isfocus" @blur="isblur">
   <div class="signin-ver-resend">发送验证码至 
     <span >13588965842</span>
     
   </div>
  </div>
</div>
  
</template>
<style>
.signin-bg{
  height: 93px;
  width: 100%;
  background: linear-gradient(to right, #6EE0FF, #32AAFA); ;
}

.signin-bg-masking{
  position:relative;
  bottom:-63px;
  border-width:15px;
  border-right-width: 50vw;
  border-left-width: 50vw;
  border-style:solid;
  border-color:transparent transparent white white ;
}
.signin-ver{
  margin:0 auto ;
  margin-top: 107px;
  width: 308px;
}

.signin-ver-input{
  width: 100%;
  font-family: PingFang-Regular;
  padding-bottom: 10px;
  font-size: 22px;
  border: none;
  border-bottom: solid 2px #C9C9C9;
  outline: medium;
  text-align: center ;
}

body{
  margin: 0;
}
</style>
<script>
export default {
   data() {
    return {
      focus:false
    }
  },
  methods:{
 
    
  }
}
</script>


