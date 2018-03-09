<template>
<div class="personal">
  <div class="personal-bg">    
  </div>
    <div class="personal-avatar"></div>
    <div class="personal-login"> 立即登录</div>
    <div class="personal-welcome"> Hello,欢迎来到点滴回收</div>
    <div class="personal-function">
       <div class="func-item">
           <div class="fa fa-"></div>
       </div>
    </div>

</div>
</template>
<style>
.personal{
    width: 100vw;
    height: 100vh;
    overflow:hidden
}
.personal-bg{
  z-index: -1;
  position: absolute;
  top: -130vh;
  right: -52vh;
  width:160vh;
  height: 160vh;
  border-radius: 80%;
  background: linear-gradient(to right, #6ee0ff 25%, #32aafa 50%);
}
.personal-avatar{
    margin: 0 auto;
    margin-top: 48px;

    width: 62px;
    height: 62px;
    border-radius: 31px;
    background-color: #cccccc
}
.personal-login{
    margin: 0 auto;
    margin-top: 9px;
    width: 119px;
    height: 30px;
    border-radius: 15px;
    border:#FFF solid 1px;
    color:white;
    text-align: center;
    line-height: 30px;
    font-size: 16px;
}
.personal-welcome{
     margin-top: 6px;
    color:white;
    text-align: center;
}
.personal-function{
    margin-top: 30px;
    display: flex;
}
</style>

