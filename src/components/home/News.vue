<template>
  <section>
    <div class="left">
      <span class="icon">&#xe62e;</span>
      <span class="text">快讯</span>
    </div>
    <ul class="show">
      <li v-for="item in newsList">
        <div>热卖</div>
        <span>{{item.title}}</span>
        <router-link to="/NewsPage" class="jump">更多</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
    export default {
        name: "NewsPage",
        data(){
          return{
            newsList:[{title: "猫贝乐电子琴"},{title: "中小学生读物"},{title: "暑假作业热销"},]
          }
      }
    }
</script>

<style scoped>
  section .icon{
    font-family: 'iconfont';
    font-size: 0.4rem;
    color: forestgreen;
    line-height: 0.5rem;
    display: block;
    float: left;
  }
  section{
    width: 80%;
    margin: 0.2rem auto;
    display: flex;
  }
  section .left{
    border-right: 1px solid darkseagreen;
    width: 20%;
  }
  section .text{
    font-size: 0.25rem;
    color: forestgreen;
    line-height: 0.5rem;
    display: block;
    float: left;
  }
  section .show{
    width: 80%;
    height: 0.5rem;
    overflow: hidden;
    font-size: 0.2rem;
    padding-left: 0.2rem;
  }
  section .show div{
    display: inline-block;
    border: 1px solid forestgreen;
    line-height: 0.3rem;
    padding: 0 0.05rem;
    font-size: 0.2rem;
    border-radius: 0.08rem;
    color: forestgreen;
    margin-right: 0.1rem;
  }
  section .show li span{
    display: inline-block;
    line-height: 0.5rem;
    margin-right: 1.2rem;
  }
  section .show .jump{
    color: forestgreen;
  }
</style>
