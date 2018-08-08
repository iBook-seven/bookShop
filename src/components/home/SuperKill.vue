<template>
  <router-link to="/SuperKillPage">
    <section>
      <div class="title">
        <p>SUPER SECKILL</p>
        <h1>超级秒杀</h1>
        <span class="icon">&#xe783;</span>
      </div>
      <div class="time">
        <p><span>01</span>时<span>02</span>分<span>22</span>秒</p>
      </div>
      <ul>
        <li v-for="good in goodsList">
          <img :src="good.url"/>
          <p>{{good.desc}}</p>
          <h3>{{good.priceNow}}</h3>
          <p>{{good.priceOld}}</p>
        </li>
      </ul>
      <img src="../../assets/img/banner2.jpg" width="100%">
    </section>
  </router-link>
</template>

<script>
    export default {
        name: "SuperKill",
        data(){
          return{
            goodsList: [
              {url: require('@/assets/img/book1.jpg'),desc: "精品图书文...", priceNow: "￥12.7",priceOld: "￥10.5"},
              {url: require('@/assets/img/book2.jpg'),desc: "精品图书文...", priceNow: "￥13.5",priceOld: "￥10.5" },
              {url: require('@/assets/img/book3.jpg'),desc: "精品图书文...", priceNow: "￥14.8",priceOld: "￥10.5" },
              {url: require('@/assets/img/book3.jpg'),desc: "精品图书文...", priceNow: "￥34.1",priceOld: "￥10.5" }
            ]
          }
      }
    }
</script>

<style scoped>
  section .title{
    font-size: 1rem;
    width: 40%;
    border-top: 1px solid forestgreen;
    border-bottom: 1px solid forestgreen;
    border-radius: 10px;
    margin: 0.2rem auto;
    position: relative;
  }
  section .title p{
    font-size: 0.12rem;
    color: forestgreen;
    text-align: center;
  }
  section .title h1{
    font-size: 0.22rem;
    color: forestgreen;
    text-align: center;
    line-height: 0.31rem;
  }
  .icon{
    font-family: 'iconfont';
    font-size: 0.35rem;
    position: absolute;
    right: -1.9rem;
    top: 0.2rem;
    color: forestgreen;
  }
  section .time{
    width: 30%;
    margin: 0rem auto;
    font-size: 0.18rem;
  }
  section .time p{
    margin: 0.15rem auto;
  }
  section .time p span{
    display: inline-block;
    background-color: #323232;
    color: #fff;
    padding: 0.01rem 0.04rem;
    border-radius: 0.05rem;
    margin: 0 0.04rem;
  }
  section .time p span:nth-of-type(3){
    background-color: forestgreen;
  }
  section ul{
    margin: 0.25rem auto;
    padding: 0.05rem;
    display: flex;
    justify-content: space-between;
  }
  section ul li{
    width: 24.5%;
    margin: 0 auto;
    border-right: 1px solid #e6e6e6;
  }
  section ul li img{
    width: 1.2rem;
    height: 1.25rem;
    margin: 0 auto;
  }
  section ul li p:nth-of-type(1){
    padding: 8px 0 0 3px;
    margin: 0 auto;
    font-size: 0.18rem;
    line-height: 0.28rem;
    color: #323232;
  }
  section ul li h3{
    color: forestgreen;
    font-size: 0.27rem;
    line-height: 0.6rem;
    padding-left: 0.15rem;
  }
  section ul li p:nth-of-type(2){
    text-decoration: line-through;
    color: #929091;
    font-size: 0.22rem;
    line-height: 0.23rem;
    padding-left: 0.15rem;
  }
</style>
