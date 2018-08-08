<template>
  <div class="wrap">
    <div class="title">
      <router-link to="/home"><span class="return">&#xe602;</span></router-link>
      <h2>促销资讯</h2>
    </div>
    <div class="banner">
      <span class="reduce">满减</span>
      <h3>当当自营超级品牌日</h3>
      <p>全场3折封锁</p>
      <img src="../../assets/img/new_banner.jpg" width="100%" height="200">
      <p>2018-07-26</p>
    </div>
    <ul class="list">
      <li v-for="item in newsList">
        <span class="reduce">满减</span>
        <h3>{{item.title}}</h3>
        <p>{{item.discount}}</p>
        <img :src="item.url" width="100" height="50">
        <p>{{item.data}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "News",
        data(){
        return{
          newsList: [
            {title: "图书大折扣，满减优惠多多………",url: require('@/assets/img/new_img1.jpg'),discount: "跨店2件5折" ,data: "2018-07-27"},
            {title: "图书大折扣，满减优惠多多………",url: require('@/assets/img/new_img1.jpg'),discount: "跨店2件5折" ,data: "2018-07-27"},
            {title: "图书大折扣，满减优惠多多………",url: require('@/assets/img/new_img1.jpg'),discount: "跨店2件5折" ,data: "2018-07-27"},
            {title: "图书大折扣，满减优惠多多………",url: require('@/assets/img/new_img1.jpg'),discount: "跨店2件5折" ,data: "2018-07-27"}
          ],
        }
      }
    }
</script>

<style scoped>
  .wrap{
    /*padding-bottom: 2.8rem;*/
  }
  .return{
    font-family: 'iconfont';
    font-size: 0.5rem;
    position: absolute;
    left: 10px;
    top: 0.42rem;
    color: #009a61;
  }
  .title{
    position: relative;
  }
  .title h2{
    font-size: 0.45rem;
    line-height: 1.2rem;
    text-align: center;
    /*color: #666;*/
    border-bottom: 1px solid #f5f5f5;
    background: linear-gradient(to right, forestgreen, yellow);
    -webkit-background-clip: text;
    color: transparent;
  }
  .banner{
    border-bottom: 1px solid #e6e6e6;
  }
  .reduce{
    display: inline-block;
    line-height: 0.35rem;
    padding: 0 0.08rem;
    background: linear-gradient(to right,#009a61,lightslategray);
    color: #fff;
    border-radius: 4px;
    float: left;
    margin-right: 0.08rem;
    margin-top: 0.05rem;
    font-size: 0.13rem;
  }
  .banner h3,.list li h3{
    font-size: 0.28rem;
    line-height: 0.5rem;
    color: #333333;
  }
  .banner p,.list li p{
    color: #8b8b8b;
    font-size: 0.22rem;
    line-height: 0.4rem;
    padding-left: 10px;
  }
  .banner p:nth-of-type(2),.list li p:nth-of-type(2){
    text-align: right;
    padding-right: 13px;
    line-height: 5vh;
  }
  .list li{
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 2vh;
  }
  .list li img{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  ul.list li p:nth-of-type(2){
    line-height: 1rem;
  }
  .list li h3{
    width: 70%;
  }

</style>
