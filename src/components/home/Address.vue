<template>
    <div class="wrap">
      <div class="title">
        <router-link to="/setting"><span class="return">&#xe602;</span></router-link>
        <h2>我的地址薄</h2>
      </div>
      <ul>
        <li v-for="(item,index) in addressList">
          <span>{{item.a_consignee}}</span>
          <span>{{item.a_phone}}</span>
          <p>{{item.a_address}}</p>
          <div class="clearfix">
            <i class="icon icon1" :class="{active: item.a_default}"
                                   @click="change(item)"></i>
            <span @click="change(item)">设为默认</span>
          </div>
          <div>
            <!--<router-link to="/EditAddress">-->
            <i class="icon">&#xe649;</i><span @click="edit(item)">编辑</span>
            <!--</router-link>-->
            <i class="icon" @click="del(item,index)">&#xe6b4;</i>
            <span @click="del(item,index)">删除</span>
          </div>
        </li>
      </ul>
      <router-link to="/AddAddress" tag="p" class="add">+增加新地址</router-link>
    </div>
</template>

<script>
    export default {
      name: "Address",
      data() {
        return {
          addressList: [
            // {
            //   a_consignee: '浩浩',
            //   a_phone: '18829488562',
            //   a_address: '陕西省,西安市,蓝田区,西安邮电区学校',
            // }
          ],
          status: this.$route.query.status,
        }
      },
      mounted: function () {
        this.show();
      },
      methods: {
        del(item,index){
          var that = this;
          this.addressList.splice(index,1);
          $.ajax({
            url: 'http://localhost:8080/address/del.action',
            type: 'post',
            dataType: 'json',
            data: {a_id: item.a_id},
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              // that.addressList = JSON.parse(JSON.stringify(goods));
              // console.log(goods);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
        edit(item){
          this.$router.push({path:'/EditAddress',
            query:{
              id: item.a_id,
              userName: item.a_consignee,
              tel: item.a_phone,
              address: item.a_address,
              default: item.a_default
          }});
        },
        change(item){
          this.addressList.forEach(i=>{
            i.a_default = 0;
          });
          item.a_default=1;
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/address/update.action',
            type: 'post',
            dataType: 'json',
            data: {a_id: item.a_id,a_default: 1},
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.addressList = JSON.parse(JSON.stringify(goods));
              console.log(goods);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
        show() {
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/address/query.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.addressList = JSON.parse(JSON.stringify(goods));
              console.log(goods);
            },
            error: function () {
              console.log("出错了！");
            }
          })
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
      margin-bottom: 1rem;
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
