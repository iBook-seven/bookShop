<template>
  <div id="app">
    <header>
    <div id="wrap">
      <p ><router-link to="/Login" tag="span">{{login}}/{{sign}}</router-link></p>
      <p ><img :src="logo" width="30" height="30"></p>
     <router-link  class="jump" to="/setting"> {{p3}}</router-link>
    </div>
    </header>

    <!--//content-->
    <div class="content">
      <div class="own"><span class="sw">{{msg}}</span>
        <router-link to="/order"><span class="sa">{{tg}}</span></router-link></div>
      <ul>
        <router-link to="/apply"><li>&#xe600;<br/><p>{{qb}}</p></li></router-link>
        <router-link to="/ssh"><li>&#xe626;<br/><p>{{sh}}</p></li></router-link>
        <router-link to="/judge"><li>&#xe639;<br/><p>{{pl}}</p></li></router-link>
          <router-link to="/finish"><li>&#xe6a9;<br/><p>{{fh}}</p></li></router-link>
      </ul>
    </div>
    <!--//conten2-->
    <div class="conten2">
      <div class="own"><span class="sw">{{msgp}}</span>
      </div>
      <ul >
        <li>&#xe622;<br/><router-link to="collect"><p>{{qbp}}</p></router-link></li>
        <li>&#xe627;<br/><router-link to="wu"><p>{{fhp}}</p></router-link></li>
        <li>&#xe67c;<br/> <router-link to="history"><p>{{shp}}</p></router-link></li>
        <li>&#xe6f9;<br/><router-link to="#"><p>{{plp}}</p></router-link></li>
        <li>&#xe618;<br/><router-link to="#"><p>{{qb1p}}</p></router-link></li>
        <li>&#xe60d;<br/><router-link to="#"><p>{{fh1p}}</p></router-link></li>
        <li>&#xe6a5;<br/><router-link to="#"><p>{{sh1p}}</p></router-link></li>
        <li>&#xe61f;<br/> <router-link to="#"><p>{{pl1p}}</p></router-link></li>
      </ul>
    </div>
    <app_footer></app_footer>
    <router-view/>

  </div>
</template>

<script>
  import logo from './assets/logo.png';
  import Footer from './components/home/Footer'
  export default {
    name: 'App',
    components:{
      "app_footer": Footer
    },
    data () {
      return {
        //header
        /*title:'123',*/
        login: '登录',
        sign: '注册',
        logo: logo,
        // imgUrl:"../assets/logo.png",
        p3: '设置',
        //content
        msg: '我的订单',
        tg: '查看所有订单 >',
        qb: "待付款",
        sh: "待收货",
        pl: "待评论",
        fh: '已完成',
        //conten2
        msgp: '我的工具',
        qbp: "收藏的商品",
        fhp: "关注的店铺",
        shp: "浏览历史",
        plp: "我的拼团",
        qb1p: "客服帮忙",
        fh1p: "安全中心",
        sh1p: "领劵中心",
        pl1p: "我的拍卖",
      }
      }
  }
</script>

<style scoped>
  /*
header*/
  #app {
    text-align: center;
    color: #2c3e50;
  }
  header{
    width:100%;
    background-color:#009a61;
    color:#fff;
    margin-bottom: 0.2rem;
  }
  header p{
    font-size: 0.3rem;
    color: #fff;
    position: relative;
  }
  header span{
    color: #fff;
  }
  header p img{
    position: absolute;
    top: -0.2rem;
    left: 23%;
  }
  #wrap{
    display: flex;
    justify-content:space-around;
    align-items:center;
  }
  #wrap p{
    width: 33%;
    line-height: 2rem;
    font-size: 0.3rem;
  }
  p span{
    font-size: 0.3rem;
  }
  .jump{
    color:#ffffff;
    font-size: 0.3rem;
    padding-right: 0.6rem;
  }
  /*
  content*/
  .content{
    margin-bottom: 0.3rem;
  }

  .content .own{
    font-size:0.28rem;
    display: flex;
    justify-content:space-between;
    padding:0.25rem;
    background-color: white;


  }
  .content .sw{
    color:#535953;
  }
  .content .sa{
    color:#009a61;
  }
  .content ul{
    width:100%;
    height:2rem;
    background-color: #fff;
    display: flex;
    justify-content:space-around ;
    align-items:center;
  }
  .content li{
    font-family: 'iconfont';
    font-size:0.4rem;
    color:#009a61;
  }
  .content p{
    margin-top:0.3rem;
    font-size:0.25rem;
    color:#535953;
  }
  /*
  conten2*/
  .conten2{
    margin-bottom: 0.15rem;
    background-color: white;
  }

  .conten2 .own{
    font-size:0.3rem;
    display: flex;
    justify-content:space-between ;
    padding: 0.25rem;
  }
  .conten2 .sw{
    color:#535953;
  }

  .conten2 ul{
    flex-wrap: wrap;
    width:100%;
    height:4rem;
    background-color: #fff;
    padding-top:0.5rem;
    display: flex;
    justify-content:space-around ;
    align-items:center;
  }
  .conten2 li{
    flex-grow: 2;
    font-family: 'iconfont';
    font-size:0.4rem;
    color:#009a61;
    width:25%;
  }
  .conten2 p{
    margin-top:0.3rem;
    font-size:0.25rem;
    color:#535953;
  }
</style>
