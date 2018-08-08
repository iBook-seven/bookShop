<template>
    <div class="order">
      <div class="header1">
        <router-link class="st1" to="/person">&#xe602;</router-link>
        <h2>订单管理</h2>
      </div>
      <ul class="xc">
        <router-link to="/order" tag="li">全部</router-link>
        <router-link to="/apply" tag="li">待付款</router-link>
        <router-link to="/ssh" tag="li">待收货</router-link>
        <router-link to="/judge" tag="li">待评价</router-link>
       <router-link to="/finish" tag="li">已完成</router-link>
      </ul>
      <div id="df">
     <goods></goods>
      </div>

    </div>
</template>

<script>
  import goods from '@/components/person/goods'
    export default {
        name: "order",
      data(){
          return{



          }
      },
      components:{
          'goods':goods
      }
    }
</script>

<style scoped>
  .router-link-active{
    color: #009a61;
  }
  .header1{

    width:100%;
    height:1.2rem;
    background-color: white;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    justify-content: flex-start;
    padding:0.3rem;
  }
  .st1{
    font-family:iconfont;
    font-size:0.6rem;
    position: absolute;
    left:0.3rem;

  }

  h2{
    position: absolute;
    margin-left: 40%;

  }

 .xc{
    width:100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
   background-color: white;
   color: #666;
  }
  #df{
    width: 100%;
 position: absolute;
    top:2.5rem;
  }
  goods{
    width: 100%;

  }

</style>
