<template>
  <div id="app">
    <header>
    <div id="wrap">
      <p ><router-link to="/Login" tag="span">{{status}}</router-link></p>
      <p ><img :src="logo" width="30" height="30"></p>
     <router-link  class="jump" to="/setting"> {{p3}}</router-link>
    </div>
    </header>

    <!--//content-->
    <div class="content">
      <div class="own"><span class="sw">{{msg}}</span>
        <router-link to="/order"><span class="sa" >{{tg}}</span></router-link></div>
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
      <ul>
        <router-link to="collect" class="p1" > <li>&#xe622;<p>{{qbp}}</p></li></router-link>
        <router-link to="#"  class="p1"><li>&#xe627;<p>{{fhp}}</p></li></router-link>
        <router-link to="history"  class="p1"><li>&#xe67c;<p>{{shp}}</p></li></router-link>
        <router-link to="#"  class="p1"><li>&#xe6f9;<p>{{plp}}</p></li></router-link>
        <router-link to="#"  class="p1"> <li>&#xe618;<p>{{qb1p}}</p></li></router-link>
        <router-link to="#"  class="p1"> <li>&#xe60d;<p>{{fh1p}}</p></li></router-link>
        <router-link to="#"  class="p1"><li>&#xe6a5;<p>{{sh1p}}</p></li></router-link>
        <router-link to="#"  class="p1"><li>&#xe61f;<p>{{pl1p}}</p></li></router-link>
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
        status: '登录/注册',
        logo: logo,
        // imgUrl:"../assets/logo.png",
        p3: '设置',
        //content
        msg: '我的订单',
        tg: '查看所有订单 ',
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
        userName: this.$route.query.u_name,
      }
      },
    mounted(){
      this.judge();
    },
    methods: {
      judge(){
        if(this.userName){
          this.status = this.userName;
        }
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
  .p1{
    width:25%;
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

  }
  .conten2 p{
    margin-top:0.3rem;
    font-size:0.25rem;
    color:#535953;
  }
</style>
