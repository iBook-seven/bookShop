<template>
  <section>
    <div class="title">
      <p>TOP SELLING</p>
      <h1>热销排行</h1>
    </div>
    <ul class="hot">
      <li v-for="item in hotList">
        <h3>{{item.kind}}</h3>
        <p>{{item.discount}}</p>
        <img :src="item.url"/>
      </li>
    </ul>
    <img src="../../assets/img/banner3.jpg" width="100%">
  </section>
</template>

<script>
    export default {
        name: "Hot",
        data(){
          return{
            hotList: [
              {url: require('@/assets/img/book1.jpg'),kind: "文学艺术", discount: "每满100减50"},
              {url: require('@/assets/img/book2.jpg'),kind: "电子书", discount: "每满3件打6折"},
              {url: require('@/assets/img/book3.jpg'),kind: "人文社科", discount: "每满100减50"},
              {url: require('@/assets/img/book3.jpg'),kind: "亲子社科", discount: "每满3件打6折"},
              {url: require('@/assets/img/book3.jpg'),kind: "亲子社科", discount: "每满3件打6折"},
              {url: require('@/assets/img/book3.jpg'),kind: "亲子社科", discount: "每满3件打6折"},
              {url: require('@/assets/img/book1.jpg'),kind: "文学艺术", discount: "每满100减50"},
              {url: require('@/assets/img/book2.jpg'),kind: "电子书", discount: "每满3件打6折"},
              {url: require('@/assets/img/book3.jpg'),kind: "人文社科", discount: "每满100减50"}
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
  section .hot{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    border-top: 1px solid #ebf0f6;
    border-bottom: 5px solid #f3f9f1;
  }
  section .hot li{
    width: 33.3%;
    margin: 0px auto;
    border-right: 1px solid #ebf0f6;
    border-bottom: 1px solid #ebf0f6;
    padding: 0.2rem 0;
  }
  section .hot img{
    margin: 0 auto;
    width: 1.2rem;
    height: 1.3rem;
  }
  section .hot li h3{
    color: #333;
    text-align: center;
    font-size: 0.26rem;
    line-height: 0.4rem;
  }
  section .hot li p{
    color: forestgreen;
    line-height: 0.4rem;
    text-align: center;
    font-size: 0.22rem;
  }
  section>img{
    margin-bottom: 54px;
  }
</style>
