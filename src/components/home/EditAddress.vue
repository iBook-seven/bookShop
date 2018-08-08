<template>
    <div>
      <div class="title">
        <router-link to="/Address"><span class="return">&#xe602;</span></router-link>
        <h2>管理收货地址</h2>
      </div>
      <form>
        <ul>
          <li>
            <span>收货人：</span>
            <input type="text" :value="oneAddress.userName"/>
          </li>
          <li>
            <span>手机：</span>
            <input type="text" :value="oneAddress.tel"/>
          </li>
          <li>
            <span>所在地区：</span>
            <input type="text" :value="oneAddress.address"/>
          </li>
          <li>
            <span>详细地址：</span>
            <input type="text" :value="oneAddress.addressDetail"/>
          </li>
        </ul>
        <input type="submit" value="保存地址" class="sub"/>
      </form>
    </div>
</template>

<script>
    export default {
        name: "EditAddress",
        data(){
        return{
          oneAddress: {
            userName: '浩浩' ,
            tel: '18829488562' ,
            address: '陕西省，西安市，蓝田县',
            addressDetail: '三里镇李后村四组'
          }
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
    border-bottom: 1px solid #b2b2b2;
    letter-spacing: 1px;
  }
  form ul li{
    padding: 0 0.25rem;
    border-bottom: 1px solid #e1e1e1;
  }
  form ul li span{
    font-size: 0.26rem;
    line-height: 1rem;
    color: #232323;
  }
  form ul li input{
    border: none;
    background-color: transparent;
    line-height: 1rem;
    padding-left: 0.1rem;
    color: #333;
  }
  form ul li input:focus{
    outline: none;
  }
  form .sub{
    width: 6.22rem;
    line-height: 0.82rem;
    background-color: #009a61;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    border: none;
    border-radius: 4px;
    display: block;
    margin: 1rem auto;
  }
</style>
