<template>
    <div class="sort">
      <!--header-->
    <div class="header">
        <div class="search">
          <span class="icon-chazhao">&#xe617;</span>
          <router-link to="catalog"><input type="text" name="search"/></router-link>
        </div>
    </div>
      <!--nav-->
      <div class="clearfix">
      <div class="nav">
        <div>{{t1}}</div>
        <div>{{t2}}</div>
        <div>{{t3}}</div>
        <div>{{t4}}</div>
        <div>{{t5}}</div>
        <div>{{t6}}</div>
        <div>{{t7}}</div>
        <div>{{t8}}</div>
        <div>{{t9}}</div>
      </div>
      <!--content-->
      <div class="content">
        <div class="lunbo">
        </div>
        <div class="wrap">
          <div class="left">
            <h5>进入电子书馆</h5>
            <p>精选版</p>
            <span>></span>
          </div>
          <div class="right">
            <h5>进入童书馆</h5>
            <p>精选版</p>
            <span>></span>
          </div>
        </div>
        <div class="jpg">
          <div class="p1">
            <h4>畅销榜</h4><router-link to="/bang"><span>></span></router-link>
            <div class="i1">
              <img :src="item.url" alt="" v-for="item in psdList"
                   width="80" height="110">
            </div>
          </div>
          <div class="p2">
            <h4>热搜榜</h4><span>></span>
            <div class="i1">
              <img :src="item.url" alt="" v-for="item in psdList" width="80" height="110">
            </div>
          </div>
          <div class="p3">
            <h4>热卖榜</h4><span>></span>
            <div class="i1">
              <img :src="item.url" alt="" v-for="item in psdList" width="80" height="110">
            </div>
          </div>
        </div>
      </div>
      </div>
      <!--footer-->
      <app_footer></app_footer>
      <router-view/>
    </div>
</template>

<script>
  import Footer from './components/home/Footer'
    export default {
        name: "sort",
      data(){
          return{
            //  nav
            t1:"图书",
            t2:"童书",
            t3:"电子书",
            t4:"教科书",
            t5:"历史书",
            t6:"军事书",
            t7:"艺术",
            t8:"外语书",
            t9:"宗教",
            //content
            psdList:[
              {url:require('@/assets/img/1.jpg')},
              {url:require('@/assets/img/2.jpg')},
              {url:require('@/assets/img/3.jpg')},
            ]

          }
      },
      components:{
        "app_footer": Footer
      }

    }
</script>

<style scoped>
  /*header*/
  .sort{
    background-color: #eff4fa;
  }
  .header{
    background-color: white;
    padding: 0.2rem 0;
  }
  .search{
    width: 80%;
    height: 0.6rem;
    background-color: #f1f2f6;
    border-radius: 0.3rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  .search .icon-chazhao{
    font-family: "iconfont";
    font-size: 0.3rem;
    color: #999;
    margin-right: 0.15rem;
  }
  .search input{
    width: 80%;
    border: none;
    line-height: 0.6rem;
    background-color: transparent;
  }
  .search input:focus{
    outline: none;
  }
  /*nav*/
  .nav{
    /*display:flex;*/
    /*flex-direction: column;*/
    width:27%;
    padding-bottom: 0.5rem;
    background-color: white;
    line-height: 1.2rem;
    text-align: center;
    font-size:0.3rem;
    float:left;
    /*font-weight: bold;*/
    margin-right: 0.2rem;
  }
  /*content*/
  .content{
    float:left;
    margin-bottom: 1rem;
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color:#eff4fa;
  }
  .lunbo{
    width:100%;
    height: 2rem;
    background-color: limegreen;
  }
  .wrap{
    margin-top:0.1rem;
    display: flex;
    justify-content: space-between;
  }
  .left,.right{
    width:47.5%;
    height: 1rem;
    background-color: white;
    position: relative;
  }
  .p1{
    width:100%;
    height: 3rem;
    background-color: white;
    margin:0.1rem auto;
  }
  .p2{
    width:100%;
    height: 3rem;
    background-color: white;

  }
  .p3{
    width:100%;
    height: 3rem;
    background-color: white;
    margin: 0.1rem auto;
  }
  .left span{
    position:absolute;
    top:0.2rem;
    right:0.2rem;
    font-size: 0.3rem;
  }
  .right span{
    position:absolute;
    top:0.2rem;
    right:0.2rem;
    font-size: 0.3rem;
  }
  .content h4{
    padding-top:0.2rem;
    padding-left:0.3rem;
  }
  .wrap p{
    color: #a3a3a3;
    font-size: 0.2rem;
    /*padding-left:0.1rem;*/
  }
  .p1 span{
    top: 0.2rem;
    right:0.2rem;
    position:absolute;
    font-size: 0.3rem;
  }
  .p2 span{
    top: 0.2rem;
    right:0.2rem;
    position:absolute;
    font-size: 0.3rem;
  }
  .p3 span{
    top: 0.2rem;
    right:0.2rem;
    position:absolute;
    font-size: 0.3rem;
  }
  .p1,.p2,.p3{
    position:relative;
  }
  .i1 img{
    display:inline-block;
    margin:20px auto;
    height:1.5rem;
  }
  .i1{
    display: flex;
    justify-content: space-around;
    margin:0 auto;
  }
</style>
