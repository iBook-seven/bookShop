<template>
     <div class="all">
        <div class="bang">
          <router-link to="sort" class="arrow">&#xe602;</router-link>
          <h2>图书畅销榜</h2>
        </div>
        <ul class="part">
          <li class="part1 clearfix" v-for="(u,index) in jpgList">
          <div class="left">
              <span>{{index+1}}</span>
              <img :src="u.url"/>
          </div>
          <div class="right">
            <h4>{{u.title}}</h4>
            <p>作者：{{u.author}}</p>
            <p>出版社：{{u.press}}</p>
            <p class="circle">
              <span>当当自营</span>
              <span>满减</span>
            </p>
            <div class="price">
              <h4>{{u.priceNew}}</h4>
              <p>{{u.priceOld}}</p>
            </div>
            <p class="star"><span>&#xe60b;</span><span>&#xe60b;</span><span>&#xe60b;</span><span>&#xe60b;</span><span>&#xe60b;</span></p>
            <span class="span1">&#xe73e;</span>
          </div>
          </li>
        </ul>
     </div>
</template>

<script>
    export default {
        name: "bang",
      data(){
          return{
            jpgList:[
              {url:require('../../assets/img/1.jpg'),
                title:'中国历史',
                author:'匿名',
                press:'人民邮电出版社',
                priceNew:'￥40.80',
                priceOld:'￥45.00',},
              {url:require('../../assets/img/2.jpg'),
                title:'解忧杂货铺',
                author:'东野圭吾',
                press:'人民出版社',
                priceNew:'￥30.90',
                priceOld:'￥34.00',},
              {url:require('../../assets/img/3.jpg'),
                title:'我不',
                author:'大冰',
                press:'作家出版社',
                priceNew:'￥26.60',
                priceOld:'￥28.00',}
            ]
          }
      }
    }
</script>

<style scoped>

  /*bang*/
  .bang{
    width: 100%;
    background-color: white;
    padding:0.5rem 0.6rem 0.7rem;
  }
  .arrow{
    position: absolute;
    float: left;
    font-size:0.5rem;
    font-family: iconfont;
  }
  .bang h2{
    float: left;
    margin-left:2rem;
    font-size: 0.4rem;
  }
  .part{
    background-color: white;
  }
  .part1{
    border-top:0.02rem #eaeaea solid;

  }
  .left>span:nth-child(1){
    background-color: #009a61;
    color: white;
    padding:0 0.07rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.3rem;
  }
  .left{
    float: left;
    position: relative;
    height: 1.2rem;
    margin-right: 0.8rem;
  }
  .right{
    float: left;
    position: relative;
    padding-top: 0.25rem;
    padding-bottom:0.25rem;
  }
  .part1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 1px solid #f5f5f5;
    width: 2rem;
    height: 2rem;
    /*padding: 20px;*/
  }
  .right p:nth-child(2),p:nth-child(3){
    font-size: 0.18rem;
    color: #9fa0a0;
  }
  .star span,.span1{
    font-family: 'iconfont';
    font-size: 0.2rem;
  }
  .right .circle span:nth-child(1){
    color:forestgreen;
    border:1px forestgreen solid;
    border-radius: 10%;
    font-size:0.2rem;
  }
  .right .circle span:nth-child(2){
    color:white;
    background-color: forestgreen;
    border-radius: 10%;
    padding:2px;
    font-size:0.2rem;
  }
  .right .price h4{
    color:forestgreen;
    float:left;
  }
  .right .price p{
    text-decoration: line-through;
    padding-left: 0.7rem;
    font-size: 0.2rem;
    color: #adadad;
  }
  .right .span1{
    color:#009a61;
    position:absolute;
    left:2.5rem;
    bottom:0.3rem;
    font-size:0.3rem;

  }





</style>
