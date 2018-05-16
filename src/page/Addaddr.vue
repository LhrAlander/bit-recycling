<template>
  <div class="add-addr">
    <div class="addr-info">
      <div class="addr-input">
        <div class="input-label">
          联系人
        </div>
        <input type="text" placeholder="姓名" v-model="nAddress.name">
      </div>
      <div class="addr-input">
        <div class="input-label">
          电话
        </div>
        <input type="text" placeholder="手机号码" v-model="nAddress.tel">
      </div>
      <div class="addr-input">
        <div class="input-label">
          地址
        </div>
        <input type="text" placeholder="选择收货地址" v-model="nAddress.location">
      </div>
      <div class="addr-input">
        <div class="input-label">
          门牌号
        </div>
        <input type="text" placeholder="例：5号楼818室" v-model="nAddress.detail">
      </div>
    </div>
    <div class="add-btn"  @click="Add()">
      添加地址
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      nAddress: {
        name: "",
        tel: "",
        location: "",
        detail: ""
      }
    };
  },
  methods: {
    Add() {
      let addr = this.nAddress.location + this.nAddress.detail;
      this.nAddress.address = addr
      console.log(this.nAddress);
      axios
        .post(
          "/api/address/address",
          {
            address: this.nAddress
          }
        )
        .then(res => {
          console.log(res);
          this.$router.push('/address')
        });
    }
  }
};
</script>
<style scoped>
.add-addr {
  font-family: "苹方";
  background: #f2f2f2;
  height: 100vh;
  overflow: hidden;
}
.addr-info {
  padding: 10px;
  padding-top: 5px;
  background: #fff;
  margin-top: 10px;
}
.addr-input {
  font-size: 16px;
  height: 60px;
  border-bottom: #f2f2f2 solid 1px;
  display: flex;
}
.addr-input input {
  font-size: 16px;
  border: none;
  outline: none;
  width: 80%;
}
.addr-input input::placeholder {
  color: #ccc;
  font-weight: lighter;
}
.input-label {
  line-height: 60px;
  width: 60px;
  color: #666;
  font-weight: bold;
  margin-right: 10px;
}
.add-btn {
  width: 96%;
  height: 42px;
  background: #32aafa;

  margin-left: 2%;
  margin-top: 10px;

  line-height: 42px;
  color: #fff;
  font-size: 16px;
  text-align: center;
}
</style>

