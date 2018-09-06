<template>
  <div class="container">
    <div class="title">
      <router-link to="/home"><span class="return">&#xe602;</span></router-link>
      <h2>秒杀</h2>
    </div>
    <ul class="time">
      <li v-for="(item,index) in timeList" :class="{active: index==n}"
         @click="show(item,index)">
        <span>{{item.time}}</span><span>{{item.status}}</span>
      </li>
    </ul>
    <ul class="list">
      <li v-for="item in goodsList" class="clearfix">
        <div class="left"><img :src="item.b_img"/></div>
        <div class="right">
          <p>{{item.b_description}}</p>
          <span>￥{{item.b_price}}</span>
          <span>￥{{(item.b_price*0.7).toFixed(2)}}</span>
          <div class="ready" @click="goto(item)">马上抢</div>
          <div class="clearfix wrap">
            <div class="bar">
              <div class="line"></div>
            </div>
            <span>已抢{{(item.b_saleNum/item.b_total).toFixed(2)*100}}%</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SuperKillPage",
      data(){
          return{
            n: 0,
            timeList:[
              {time: '00:00',status: '已开抢'},
              {time: '10:00',status: '进行中'},
              {time: '12:00',status: '未开抢'},
              {time: '17:00',status: '未开抢'},
              {time: '22:00',status: '未开抢'}],
            goodsList: [
              // {url: require('@/assets/img/book1.jpg'),desc: "精品图书文精品图书文精品图书文精品图书文", priceNow: "￥12.7",priceOld: "￥10.5"},
              // {url: require('@/assets/img/book2.jpg'),desc: "精品图书文...", priceNow: "￥13.5",priceOld: "￥10.5" },
              // {url: require('@/assets/img/book3.jpg'),desc: "精品图书文...", priceNow: "￥14.8",priceOld: "￥10.5" },
              // {url: require('@/assets/img/book3.jpg'),desc: "精品图书文...", priceNow: "￥34.1",priceOld: "￥10.5" }
            ]
          }
      },
      mounted: function(){
        this.show();
      },
      methods:{
        show(item,num){
          this.n = num;
          var that = this;
          console.log(item.time);
          $.ajax({
            url: 'http://localhost:8080/bookInformation/queryAllBooks.action',
            type: 'post',
            dataType: 'json',
            data: {date: item.time},
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.goodsList = JSON.parse(JSON.stringify(goods));
              console.log(goods);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
        show(){
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/bookInformation/queryAllBooks.action',
            type: 'post',
            dataType: 'json',
            data: {date: '12:00'},
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.goodsList = JSON.parse(JSON.stringify(goods));
              console.log(goods);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
        goto(item){
          this.$router.push({path: '/ProductDetails',query:{id: item.b_id}});
        }
      },

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
  }
  .time{
    width: 100%;
    display: flex;
    background-color: #454c5a;
    height: 0.88rem;
    justify-content: space-around;
    align-items: center;
  }
  .time li{
    width: 17.5%;
  }
  .time li span{
    color: #b5b7bd;
    display: block;
    text-align: center;
    line-height: 0.34rem;
    font-size: 0.2rem;
  }
  .time li span:nth-of-type(2){
    font-size: 0.18rem;
  }
  .time li.active{
    background-color: #009a61;
    color: #ffffff;
    border-radius: 5px;
  }
  .time li.active span{
    color: #fff;
  }
  .list{
    border-left: 0.1rem solid #eeeeee;
    border-right: 0.1rem solid #eeeeee;
  }
  .list li{
    border-bottom: 0.1rem solid #eeeeee;
    padding: 0.2rem 0;
  }
  .list .left{
    width: 25%;
    margin-right: 0.25rem;
    float: left;
  }
  .list img{
    width: 1.5rem;
    height: 1.6rem;
    margin: 0 auto;
  }
  .list .right{
    width: 70%;
    float: left;
    position: relative;
  }
  .list .right p{
    width: 95%;
    font-size: 0.26rem;
    color: #49505e;
    height: 1rem;
    overflow: hidden;
    line-height: 0.32rem;
  }
  .list .right span:nth-of-type(1){
    font-size: 0.25rem;
    color: forestgreen;
    letter-spacing: 1px;
    margin-right: 0.2rem;
  }
  .list .right span:nth-of-type(2){
    font-size: 0.22rem;
    color: #939192;
    text-decoration: line-through;
  }
  .list .right .ready{
    width: 1.1rem;
    line-height: 0.56rem;
    background-color: #0eb83a;
    color: #fff;
    border-radius: 3px;
    font-size: 0.22rem;
    text-align: center;
    position: absolute;
    right: 0.25rem;
    bottom: 0.2rem;
  }
  .list .right .bar{
    width: 1.6rem;
    background-color: #eeeeee;
    border-radius: 0.05rem;
    height: 0.1rem;
    margin: 0.15rem 0;
    float: left;
    margin-right: 0.2rem;
  }
  .list .right .bar div{
    width: 40%;
    height: 0.1rem;
    border-radius: 0.05rem;
    background-color: #009a61;
  }
  .list .right .wrap span{
    font-size: 0.22rem;
    color: #454c5b;
    float: left;
  }
</style>
