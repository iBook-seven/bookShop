<template>
  <div class="container">
    <div class="title">
      <router-link to="/home"><span class="return">&#xe602;</span></router-link>
      <h2>秒杀</h2>
    </div>
    <ul class="time">
      <li><span>00:00</span><span>已开抢</span></li>
      <li class="active"><span>10:00</span><span>进行中</span></li>
      <li><span>12:00</span><span>未开抢</span></li>
      <li><span>17:00</span><span>未开抢</span></li>
      <li><span>22:00</span><span>未开抢</span></li>
    </ul>
    <ul class="list">
      <li v-for="item in goodsList" class="clearfix">
        <div class="left"><img :src="item.url"/></div>
        <div class="right">
          <p>{{item.desc}}</p>
          <span>{{item.priceNow}}</span>
          <span>{{item.priceOld}}</span>
          <router-link to="/ProductDetails"><div class="ready">马上抢</div></router-link>
          <div class="clearfix wrap">
            <div class="bar">
              <div></div>
            </div>
            <span>已抢99%</span>
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
            goodsList: [
              {url: require('@/assets/img/book1.jpg'),desc: "精品图书文精品图书文精品图书文精品图书文", priceNow: "￥12.7",priceOld: "￥10.5"},
              {url: require('@/assets/img/book2.jpg'),desc: "精品图书文...", priceNow: "￥13.5",priceOld: "￥10.5" },
              {url: require('@/assets/img/book3.jpg'),desc: "精品图书文...", priceNow: "￥14.8",priceOld: "￥10.5" },
              {url: require('@/assets/img/book3.jpg'),desc: "精品图书文...", priceNow: "￥34.1",priceOld: "￥10.5" }
            ]
          }
      },
      methods:{

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
