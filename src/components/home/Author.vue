<template>
  <section>
    <div class="title">
      <p>FAMOUS AUTHOR</p>
      <h1>著名作家</h1>
    </div>
    <ul>
      <li v-for="item in authorList">
        <img :src="item.url"/>
      </li>
    </ul>
    <img src="../../assets/img/banner1.jpg" width="100%">
  </section>
</template>

<script>
    export default {
        name: "Author",
      data(){
          return{
            authorList: [
              {url: require('@/assets/img/a1.jpg') },
              {url: require('@/assets/img/a2.jpg') },
              {url: require('@/assets/img/a3.jpg') },
              {url: require('@/assets/img/a1.jpg') },
              {url: require('@/assets/img/a2.jpg') }
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
    margin: 0.1rem auto;
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
  section  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0.2rem auto;
    background-color: #f5f5f5;
    padding: 2px;
  }
  section ul li{
    width: 19.5%;
    padding: 0.1rem;
    background-color: #fff;
  }
  section ul li img{
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
  }
</style>
