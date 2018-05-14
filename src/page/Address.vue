<template>
    <div class="addr-container">
        <div class="addr-info" v-for="item in addressData">
   <router-link tag="a" :to="'/fillOrder/'+item.Id">      
         <div class="addr-location">{{item.location}}</div>
            <div class="addr-detail">{{item.detail}}</div>
            <div class="contact">
                <span class="name">
                   {{item.name}}
                </span>
                <span class="contact-tel">
                    {{item.tel}}
                </span>
            </div>
            <img src="/static/icon/编辑.png" alt="" class="adrr-btn">
            </router-link>
        </div>
        <footer class="add-btn">
            添加地址
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            addressData:[
                {Id:1,location:"江苏省无锡市江南大学",detail:"8幢502室",name:"林海瑞",tel:"13588888888" },
                {Id:2,location:"浙江省杭州市海曙路58号",detail:"8幢719室",name:"王懿琦",tel:"13588888888" },
                {Id:3,location:"浙江省温州市泰顺县",detail:"三魁镇府",name:"吴际",tel:"13588888888" }
            ]
        }
    }
};
</script>

<style scoped>
.addr-container {
  background-color: #f2f2f2;
  overflow: hidden;
  height: 100vh;
}
.addr-info {
  height: 70px;
  padding: 10px 15px;
  background-color: #fff;
  font-family: "苹方";
}
.addr-info:first-child{
    margin-top: 10px;
}
.addr-location {
  font-size: 16px;
  font-weight: bold;

}
.addr-detail {
  font-size: 14px;
}
.contact {
  margin-top: 5px;
  font-size: 12px;
  color: #333;
}
.name{
    margin-right: 5px;
}
.adrr-btn{
    position: relative;
    top: -38px;
    width: 24px;
    height: 24px;
    float: right;
}
.add-btn{
    position: fixed;
    bottom: 0;
    width: 96%;
    height: 42px;
    background: #32aafa;
    border-radius: 21px;
    margin-left: 2%;
    margin-bottom: 10px;
    line-height: 42px;
    color: #FFF;
    font-size: 16px;
    text-align: center;
}
</style>

