<template>
<div class="catalog">
  <div class="head">
    <router-link to="sort"><span class="jt">&#xe602;</span></router-link>
    <div class="sear">
      <span>&#xe617;</span>
      <input type="text"/>
    </div>
  </div>
  <div class="naa">
    <span>作者</span><span>价格</span><span>好评</span>
  </div>
  <ul class="par">
    <li class="par1 clearfix" v-for="n in pngList">
      <div class="zuo">
        <img :src="n.url"/>
      </div>
      <div class="you">
        <h4>{{n.title}}</h4>
        <p>{{n.author}}</p>
        <p class="circle">
          <span>当当自营</span>
          <span>满100-50</span>
        </p>
        <div class="price">
          <h4>{{n.priceNew}}</h4>
          <span>{{n.priceOld}}</span>
          <span>{{n.discount}}</span>
        </div>
        <p>{{n.discuss}}</p>
        <span class="car">&#xe73e;</span>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
        name: "catalog",
      data(){
          return{
            pngList:[
              {url:require('../../assets/img/1.jpg'),
                title:'中国历史',
                author:'匿名',
                priceNew:'￥40.80',
                priceOld:'￥45.00',
                discount:'8.2折',
                discuss:'98%好评(33)人'},
              {url:require('../../assets/img/2.jpg'),
                title:'中国地理',
                author:'匿名',
                priceNew:'￥30.90',
                priceOld:'￥34.00',
                discount:'9.3折',
                discuss:'99%好评(333)人'},
              {url:require('../../assets/img/3.jpg'),
                title:'中国政治',
                author:'匿名',
                priceNew:'￥26.60',
                priceOld:'￥28.00',
                discount:'7.5折',
                discuss:'100%好评(3333)人'}
            ]
          }
      }
    }
</script>

<style scoped>
  /*catalog*/
  .catalog{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .head{
    position:fixed;
    width:100%;
    height: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .sear{
    width:80%;
    height:0.6rem;
    display: flex;
    align-items:center;
    padding:0 0.2rem;
    border-radius: 20px;
    background-color:#eef2f1;
  }
  .jt{
    font-family:'iconfont';
    font-size:20px;
    color: darkgray;
    margin-right:0.5rem;
  }
  .sear span{
    font-family: 'iconfont';
    font-size:20px;
    color: darkgray;
    margin-right:0.2rem;
  }
  .sear input{
    background-color: transparent;
    border:none;
    font-size:0.4rem;
  }
  .sear input:focus{
    outline:none;
  }
  .naa{
    /*line-height: 20px;*/
    border-top: 2px solid #ccc;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
  }
  .naa span{
    width: 33%;
    display: inline-block;
    font-size: 0.2rem;
    text-align: center;
    line-height: 0.5rem;
  }
  /*part*/
  .par{
    background-color: white;
  }
  .par1{
    border-top:2px #eaeaea solid;

  }
  .zuo{
    float: left;
    /*position: relative;*/
    height: 1.2rem;
    margin-right: 0.8rem;
  }
  .you{
    float: left;
    position: relative;
    padding-top: 0.25rem;
    padding-bottom:0.25rem;
  }
  .par1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 1px solid #f5f5f5;
    width: 2rem;
    height: 2rem;
    /*padding: 20px;*/
  }
  .you p:nth-child(2){
    font-size: 0.18rem;
    color: #adadad;
  }
  .you .circle span:nth-child(1){
    color:forestgreen;
    border:1px forestgreen solid;
    border-radius: 10%;
    font-size:0.2rem;
  }
  .you .circle span:nth-child(2){
    color:white;
    background-color: forestgreen;
    border-radius: 10%;
    padding:2px;
    font-size:0.2rem;

  }
  .you .price h4{
    color:forestgreen;
    float:left;
  }
  .price span:nth-child(2){
    text-decoration: line-through;
    padding-left: 0.2rem;
    color: #adadad;
    font-size: 0.2rem;
  }
  .price span:nth-child(3){
    padding-left: 0.1rem;
    color: #adadad;
    font-size: 0.2rem;
  }
  .you p:nth-child(5){
    color: #adadad;
    font-size: 0.2rem;
  }
  .you .car{
    color:#009a61;
    position:absolute;
    left:3rem;
    bottom:0.2rem;
    font-family:'iconfont';
  }

</style>
