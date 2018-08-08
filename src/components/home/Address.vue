<template>
    <div class="wrap">
      <div class="title">
        <router-link to="/home"><span class="return">&#xe602;</span></router-link>
        <h2>我的地址薄</h2>
      </div>
      <ul>
        <li v-for="item in addressList">
          <span>{{item.userName}}</span>
          <span>{{item.tel}}</span>
          <p>{{item.address + item.addressDetail}}</p>
          <div class="clearfix"><i class="icon icon1" :class="{active: isActive}"
                                   @click="isActive=!isActive"></i>
            <span @click="isActive=!isActive">设为默认</span>
          </div>
          <div>
            <router-link to="/EditAddress"><i class="icon">&#xe649;</i><span>编辑</span></router-link>
            <i class="icon">&#xe6b4;</i><span>删除</span>
          </div>
        </li>
      </ul>
      <router-link to="/AddAddress" tag="p" class="add">+增加新地址</router-link>
    </div>
</template>

<script>
    export default {
        name: "Address",
      data(){
          return{
            isActive: false,
            addressList:[
              { userName: '浩浩' ,tel: '18829488562' ,  address: '陕西省，西安市，蓝田县 ', addressDetail: '三里镇李后村四组'}
            ]
          }
      }
    }
</script>

<style scoped>
  .return{
    font-family: 'iconfont';
    font-size: 0.4rem;
    position: absolute;
    left: 10px;
    top: 0.3rem;
    color: #323232;
  }
  .title{
    position: relative;
  }
  .title h2{
    font-size: 0.3rem;
    line-height: 0.9rem;
    text-align: center;
    color: #323232;
    border-bottom: 1px solid #f5f5f5;
    letter-spacing: 1px;
  }
  ul{

  }
  ul li{
    border-bottom: 0.2rem solid #f5f5f5;
    padding: 0.1rem 0.25rem;
    position: relative;
  }
  ul li span{
    font-size: 0.28rem;
    line-height: 0.7rem;
    color: #232323;
    margin-right: 0.2rem;
  }
  ul li p{
    font-size: 0.22rem;
    line-height: 0.5rem;
    color: #747373;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .icon{
    font-family: 'iconfont';
    font-size: 0.3rem;
    color: #7c7b7b;
  }
  ul li div:nth-of-type(1){
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .icon1{
    width: 0.3rem;
    height: 0.3rem;
    border: 1px solid #ababab;
    border-radius: 50%;
    display: block;
    line-height: 0.78rem;
    margin-right: 0.05rem;
  }
  .active{
    background-color: #009a61;
    border: 1px solid #fff;
  }
  ul li div:nth-of-type(1) span{
    font-size: 0.22rem;
    line-height: 0.78rem;
    color: #747373;
  }
  ul li div:nth-of-type(2){
    position: absolute;
    right: 0.2rem;
    bottom: 0.12rem;
  }
  ul li div:nth-of-type(2) span{
    color: #767575;
    margin-left: 0.05rem;
  }
  .wrap{
    position: relative;
  }
  .add{
    width: 100%;
    line-height: 0.9rem;
    background-color: #009a61;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    display: block;
    position: fixed;
    bottom: 0;
  }
</style>
