<template>
<div class="personal">
    <div class="bg-contanier">
  <div class="personal-bg"></div>
  </div>
  <div class="person-content">
    <div class="personal-avatar"></div>
    <div class="personal-login"> 立即登录</div>
    <div class="personal-welcome">欢迎来到点滴回收</div>
    <div class="personal-function">
       <div class="func-item" v-for="item in func">
           <div class="func-item-img"> <img  v-bind:src="item.url" alt=""></div>
           <div class="func-item-name">{{item.name}}</div>
       </div>
    </div>
    <div class="personal-option">
        <div class="option-item" v-for="item in options">
           {{item}}
           <i class="fa  fa-angle-right angle fa-2x"></i>
        </div>
    </div>
    </div>

</div>
</template>
<style>
.personal{
    width: 100vw;
    height: 100vh;

}
.bg-contanier{
    z-index: -1;
    top: 0;
    height: 30vh;
    overflow:hidden
}
.personal-bg{
 
  position: relative;
  top: -130vh;
  right: 52vh;
  width:160vh;
  height: 160vh;
  border-radius: 80%;

  background: linear-gradient(to right, #6ee0ff 25%, #32aafa 50%);
}
.person-content{
    margin-top: 48px;
    width: 100%;
    position: absolute;
    top: 0;
}
.personal-avatar{
    margin: 0 auto;
   
    border:#FFF solid 2px;
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
    border-bottom: #F2F2F2 solid 2px;
    display: flex;
}
.func-item{
    text-align: center;
    height: 80px;
    width: 25%;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;

}
.func-item-img{
    margin: 0 auto;
    margin-top: 14px;
    width: 30px;
    height: 30px;
}
.personal-option{
    width: 100%;
}
.option-item{
     padding: 0 20px;
     line-height: 50px;
     height: 50px;
}
.angle{
     
    float: right;
    line-height: 50px;
    color: #d3d3d3;
}
img{width:100%;height:100%;}
@font-face {
  font-family: PingFang-Regular;
  src: url(../assets/font/PingFangRegular.ttf);
}
body {
  font-family:PingFang-Regular;
}
</style>
<script>
export default {
   data() {
    return {
      func:[
          {name:'待上门',url:'/static/img/door.png'},
          {name:'待确认',url:'/static/img/door.png'},
          {name:'已完成',url:'/static/img/door.png'},
          {name:'全部订单',url:'/static/img/door.png'},],
     
      options:['我的钱包','我的地址簿','联系客服','帮助和反馈','设置']
    };
  }
}
</script>


