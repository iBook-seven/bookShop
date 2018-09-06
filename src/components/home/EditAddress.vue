<template>
    <div>
      <div class="title">
        <router-link to="/Address"><span class="return">&#xe602;</span></router-link>
        <h2>修改收货地址</h2>
      </div>
      <!--<form>-->
        <ul>
          <li>
            <span>收货人：</span>
            <input type="text" v-model="name"/>
          </li>
          <li>
            <span>手机：</span>
            <input type="text" v-model="tel"/>
          </li>
          <li>
            <span>所在地区：</span>
            <input type="text" v-model="addressBefore"/>
          </li>
          <li>
            <span>详细地址：</span>
            <input type="text" v-model="addressDetail"/>
          </li>
        </ul>
        <input type="button" value="保存地址" class="sub" @click="show"/>
      <!--</form>-->
    </div>
</template>

<script>
    export default {
        name: "EditAddress",
        data(){
          return{
            id: this.$route.query.id,
            name: this.$route.query.userName,
            tel: this.$route.query.tel ,
            address: this.$route.query.address,
            addressBefore: '',
            addressDetail: '',
            default: this.$route.query.default,
          }
      },
      mounted(){
        this.splitAddress();
      },
      methods: {
        splitAddress(){
            var p = this.address.indexOf(',');
            // var p = (x==-1)? y : x;
            // var reg = /[\u4e00-\u9fa5]*区/;
            // var p = this.address.search(reg);
            console.log(p);
            this.addressBefore = this.address.slice(0,p);
            this.addressDetail = this.address.slice(p+1);
         },
        show() {
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/address/update.action',
            type: 'post',
            dataType: 'json',
            data: {
              a_consignee: this.name ,
              a_phone: this.tel ,
              a_address: this.addressBefore+','+this.addressDetail,
              a_id: this.id,
              a_default: this.default
            },
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function () {
              console.log("success");
            },
            error: function () {
              console.log("出错了！");
            }
          });
          this.$router.push({path: '/Address'});
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
  ul li{
    padding: 0 0.25rem;
    border-bottom: 1px solid #e1e1e1;
  }
  ul li span{
    font-size: 0.26rem;
    line-height: 1rem;
    color: #232323;
  }
  ul li input{
    border: none;
    background-color: transparent;
    line-height: 1rem;
    padding-left: 0.1rem;
    color: #333;
  }
  ul li input:focus{
    outline: none;
  }
  .sub{
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
