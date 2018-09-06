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
          <input type="text" placeholder="请输入收货人姓名" v-model="name"/>
        </li>
        <li>
          <span>手机：</span>
          <input type="number" placeholder="请输入手机号" v-model="tel"/>
        </li>
        <li>
          <span>所在地区：</span>
          <input type="text" placeholder="省份 城市 地区 "
                 :value="myAddressProvince+' | '+myAddressCity+' | '+myAddresscounty"
                 @click="isShow=!isShow"/>
          <span class="choose" @click="isShow=!isShow">请选择&#xe6e0;</span>
          <div v-show="isShow">
            <mt-picker :slots="myAddressSlots" @change="onMyAddressChange"></mt-picker>
          </div>
        </li>
        <li>
          <span>详细地址：</span>
          <input type="text" placeholder="街道、楼牌号" v-model="detail"/>
        </li>
      </ul>
      <input type="button" value="保存地址" class="sub" @click="show"/>
    </form>
  </div>
</template>

<script>
  import { Picker } from 'mint-ui';
  import myaddress from '../../../static/address.json';
    export default {
        name: "AddAddress",
      data () {
        return {
          isShow: false,
          name: '',
          tel: '',
          detail: '',
          myaddress: {},
          myAddressSlots: [
            {
              flex: 1,
              defaultIndex: 1,
              values: Object.keys(myaddress), //省份数组
              className: 'slot1',
              textAlign: 'center'
            }, {
              divider: true,
              content: '-',
              className: 'slot2'
            }, {
              flex: 1,
              values: [],
              className: 'slot3',
              textAlign: 'center'
            },
            {
              divider: true,
              content: '-',
              className: 'slot4'
            },
            {
              flex: 1,
              values: [],
              className: 'slot5',
              textAlign: 'center'
            }
          ],
          myAddressProvince:'省',
          myAddressCity:'市',
          myAddresscounty:'区/县',
        }
      },
      methods: {
        onMyAddressChange(picker, values) {
          if(myaddress[values[0]]){
            picker.setSlotValues(1,Object.keys(myaddress[values[0]])); // Object.keys()会返回一个数组，当前省的数组
            picker.setSlotValues(2,myaddress[values[0]][values[1]]); // 区/县数据就是一个数组
            this.myAddressProvince = values[0];
            this.myAddressCity = values[1];
            this.myAddresscounty = values[2];
          }
        },
        show(){
          var that = this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/address/add.action',
            type: 'post',
            dataType: 'json',
            data:{
              a_consignee: this.name ,
              a_phone: this.tel,
              a_address: this.myAddressProvince+this.myAddressCity+this.myAddresscounty+','+this.detail,
              a_id: this.id
            },
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (address) {
              // that.myaddress = JSON.parse(JSON.stringify(address));
              console.log(address);
            },
            error: function () {
              console.log("出错了！");
            }
          });
          this.$router.push({path: '/Address'});
        },
      },
      mounted(){
        this.$nextTick(() => { //vue里面全部加载好了再执行的函数 （类似于setTimeout）
          this.myAddressSlots[0].defaultIndex = 0
          // 这里的值需要和 data里面 defaultIndex 的值不一样才能够初始化
          // this.show();
        });
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
    font-size: 0.25rem;
  }
  form ul li input:focus{
    outline: none;
  }
  input::-webkit-input-placeholder {
    color: #ceced4;
    font-size: 0.24rem;
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
  .choose{
    font-family: 'iconfont';
    color: #a8a8a8;
    font-size: 0.26rem;
    margin-left: 0.3rem;
  }
</style>
