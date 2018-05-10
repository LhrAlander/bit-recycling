<template>
    <div class="fill-order">
        <header class="add-addr">
            <div class="addr-btn">
                +添加地址
            </div>

        </header>

            <div class="order-time">
                <span class="order-time-label">上门时间</span>
                 <span class="order-time-option">立即(默认)</span>
            </div>
            <div class="type-panel">
                <div class="type-item">
                    <div class="type-item-contanier">
                      <div class="type-label">废报纸</div>
                      <div class="type-price">0.68元/斤</div>
                      <div class="type-btn" @click="animateEnter()">{{selectedOptions}}</div>
                      <div class="weight-options" @click="animateLeave()">
                          <div class="weight-option-item" v-for="item in options" :class="{'selected':item.selected}" @click="Select(item)">
                              {{item.label}}
                          </div>
                      </div>
                    </div>
                </div>
                <div class="type-item">
                    <div class="type-item-contanier">
                      <div class="type-label">废报纸</div>
                      <div class="type-price">0.68元/斤</div>
                      <div class="type-btn" >请选择</div>
                 
                    </div>
                </div>
                <div class="type-item">
                    <div class="type-item-contanier">
                      <div class="type-label">废报纸</div>
                      <div class="type-price">0.68元/斤</div>
                      <div class="type-btn" >请选择</div>
                     
                    </div>
                </div>
                 <div class="type-item">
                    <div class="type-item-contanier">
                      <div class="type-label">废报纸</div>
                      <div class="type-price">0.68元/斤</div>
                      <div class="type-btn" >请选择</div>
                     
                    </div>
                </div>
               
            </div>
            <div class="pic-panel">
                <div class="pic-label">
                    上传图片
                </div>
                <div class="pic-btn">
                    <img src="/static/icon/add.png" alt="">
                </div>
            </div>
            <div class="msg-panel">
                <div class="msg-label">
                    留言
                </div>
                <input type="text" class="msg-input" placeholder="给回收员捎句话">
            </div>
            <footer class="order-foot">
                <div class="order-btn">
                    一点回收
                </div>
                <div class="order-tips">
                    切换至大商户回收模式
                </div>
            </footer>
    </div>
</template>
<script>
export default {
  data(){
      return{
          options:[
              {label:"100以上",selected:false},
              {label:"50-100",selected:false},
              {label:"1-50",selected:false}
          ],
          selectedOptions:"请选择"
      }
  },
  methods:{
      animateEnter(){
          $(".weight-options").animate({right:-37})
      },
      animateLeave(){
          $(".weight-options").animate({right:-250})
      },
      Select(item){
          this.selectedOptions = item.label;

          this.options.forEach(function(item){         
                  item.selected = false;
          })
          item.selected = true;
          
      }
  }
}
</script>
<style scoped>
.fill-order{
    width: 100%;
    height: 100vh   ;
    background-color: #F2F2F2;
}
.add-addr{
    overflow:hidden;
    width: 100%;
    height: 69px;
    background:  linear-gradient(to right, #6ee0ff, #32aafa);
}
.addr-btn{
    font-family: "苹方";
    width: 138px;
    height: 33px;
    margin: auto;
    margin-top: 15px;
    border: #FFF solid 1px;
    border-radius: 16px;
    line-height: 33px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
}
.order-time{
    font-family: "苹方";
    line-height: 50px;
    height: 50px;
    width:  100%;
    background-color: #FFF;
    font-size: 14px;
    font-weight: bold;
}
.order-time-label{
    margin-left: 20px;
}
.order-time-option{
    float: right;
    margin-right: 20px;
    color: #32AAFA;
}
.type-panel{
    width: 96%;
    margin: 10px auto;
}
.type-item{
       display: flex;
    background: #FFF;
    width: 100%;
    height: 50px;
 
    line-height: 50px;
    border-radius: 3px;
    box-shadow:0 0 5px rgba(204, 204, 204, 0.349019607843137);  
    text-align: center;
    margin-bottom: 1px;
}
.type-item-contanier{
    display: flex;
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
}
.type-label{
  
    font-size: 16px;
    color: #333;
}
.type-price{
    margin-left: 10px;
    font-size: 12px;
    color: #FFAA42;
}
.type-btn{
    align-self: center;
    position: absolute;
    right: 27px;
    height: 27px;
    width: 62px;
    border: #32aafa solid 1px;
    border-radius: 13px;
    line-height: 27px;
    font-size: 11px;
    color: #32aafa;
}
.weight-options{
    position: relative;
    right: -250px;
    display: flex;
    align-self: center;
    width: 175px;
    height: 30px;
    border-radius: 15px;
    background:  linear-gradient(to right, #6ee0ff, #32aafa);
}
.weight-option-item{
    align-self: center;
    height: 23px;
    width: 50px;
    margin-left: 5px;
    border-radius: 11px;
    font-size: 9px;
    color: #fff;
    line-height: 23px;
}
.selected{
    background-color: #FFF;
    color: #32aafa;
}
.pic-panel{
    overflow: hidden;
    width: 96%;
    margin: 10px auto;
    height: 109px;
    box-shadow:0 0 5px rgba(204, 204, 204, 0.349019607843137);
    background: #FFF;
    border-radius: 3px;
}
.pic-label{
    margin-top: 7px;
    margin-left: 24px;
    font-size: 14px;
    color: #333;
}
.pic-btn{
    width: 60px;
    height: 60px;
    margin-top: 7px;
    margin-left: 22px;
}
img{
    width: 100%;
    height: 100%;
}
.msg-panel{

    display: flex;
    width: 96%;
    margin: 10px auto;
    height: 50px;
    box-shadow:0 0 5px rgba(204, 204, 204, 0.349019607843137);
    background: #FFF;
    border-radius: 3px;
}
.msg-label{
    margin-left: 24px;
    line-height: 50px;
    font-size: 14px;
    color: #333;
}
.msg-input{
     font-family: "苹方";
     margin-left: 10px;
    border:none;
    outline: medium;
    height: 20px;
    align-self: center;
}
.order-foot{
    position: fixed;
    bottom: 0;
    height: 72px;
    width: 100%;
}
.order-btn{
    width: 96%;
    margin: 0 auto;
    height: 42px;
    background: #32aafa;
    border-radius: 21px;
    font-size: 16px;
    text-align: center;
    line-height: 42px;
    font-weight: bold;
    color: #FFF;
}
.order-tips{
    margin-top: 5px;
    width: 100%;
    text-align: center;
    font-size: 12px;
    color: #999;
}
input::-webkit-input-placeholder{
    color: #b9b99b;
    font-size: 14px;
}
</style>

