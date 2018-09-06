<template>
    <div class="sort">
      <!--header-->
    <div class="header">
        <div class="search">
          <router-link :to="{path:'/catalog',query:{num:we}}"><span class="icon-chazhao">&#xe617;</span></router-link>
          <input type="search" name="search" v-model="we"/>
        </div>
    </div>
      <!--nav-->
      <div class="clearfix">
      <div class="nav">
        <div @click="show(item,index)" v-for="(item,index) in books"
             :class="{active:index==n}">{{item.t}}</div>
      </div>
      <!--content-->
      <div class="content">
        <div class="lunbo">
          <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in items" :key="item.id">
              <a :href="item.href" rel="external nofollow" >
                <img :src="item.url" class="img" width="100%" height="100%"/>
                <span class="desc"></span>
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="wrap">
          <div class="left">
            <h5>进入电子书馆</h5>
            <p>精选版</p>
            <!--<router-link :to="{path:'/catalog',query:{chuan:this.word}}">-->
              <span @click = send class="icon">&#xe6e0;</span>
            <!--</router-link>-->
          </div>
          <div class="right">
            <h5>进入童书馆</h5>
            <p>精选版</p>
            <span class="icon">&#xe6e0;</span>
          </div>
        </div>
        <div class="jpg">
        <div class="p1">
          <h4>畅销榜</h4>
          <span @click="more">&#xe6e0;</span>
          <div class="i1" >
            <img :src="item.b_img" alt="" v-for="item in one" width="80" height="110">
          </div>
        </div>
        <div class="p2">
          <h4>热搜榜</h4>
          <span @click="more">&#xe6e0;</span>
          <div class="i1">
            <img :src="item.b_img" alt="" v-for="item in two" width="80" height="110">
          </div>
        </div>
        <div class="p3">
          <h4>热卖榜</h4>
          <span @click="more">&#xe6e0;</span>
          <div class="i1">
            <img :src="item.b_img" alt="" v-for="item in three" width="80" height="110">
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
  import {Swipe, SwipeItem} from 'mint-ui'

    export default {
        name: "sort",
      data(){
          return{
            we:"",
            // nav
            word:'',
            books:[
              {t:"计算机"},
              {t:"艺术"},
              {t:"电子书"},
              {t:"教科书"},
              {t:"历史书"},
              {t:"军事书"},
              {t:"社会"},
              {t:"外语书"},
              {t:"宗教"},
            ],
            n:0,
            //content
            psdList:[],
            items: [{
              url: require('@/assets/img/banner1.jpg')
            }, {
              url: require('@/assets/img/banner2.jpg')
            }, {
              url: require('@/assets/img/banner3.jpg')
            }
            ],
            one:[],
            two:[],
            three:[]
          }
      },
      mounted: function(){
         this.display();
      },
      methods: {
        send(){
          this.$router.push({path: '/catalog',query:{chuan: this.word}});
        },
        more(){
          this.$router.push({path: '/bang',query:{list: this.psdList}});
        },
        show(item,index){
          this.n =index;
          console.log(item.t);
          this.word = item.t;
          var that = this;
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/bookInformation/hotSaleController.action',
            type: 'post',
            dataType: 'json',
            data:{b_category: item.t},
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            success: function (goods) {
              that.psdList = JSON.parse(JSON.stringify(goods));
              console.log(goods);
              that.one = that.psdList.slice(0,3);
              that.two = that.psdList.slice(3,6);
              that.three = that.psdList.slice(6,9);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
        display(){
          var that = this;
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/bookInformation/hotSaleController.action',
            type: 'post',
            dataType: 'json',
            data:{b_category: '计算机'},
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            success: function (goods) {
              that.psdList = JSON.parse(JSON.stringify(goods));
              console.log(goods);
              that.one = that.psdList.slice(0,3);
              that.two = that.psdList.slice(3,6);
              that.three = that.psdList.slice(6,9);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },

      },
      components:{
        "app_footer": Footer,
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem,
      }
    }
</script>

<style scoped>
  /*header*/
  .icon{
    font-family: iconfont;
  }
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
    padding-bottom: 1.2rem;
    background-color: white;
    line-height: 1.2rem;
    text-align: center;
    /*font-size:0.3rem;*/
    float:left;
    margin-right: 0.2rem;
  }
  .active{
    background-color:#eff4fa;
    color: forestgreen;
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
  .mint-swipe {
    height: 2rem;
  }
  .wrap{
    margin-top:0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .left,.right{
    width:47.5%;
    height: 1rem;
    background-color: white;
    position: relative;
    padding: 0.1rem 0.2rem;
  }
  .p1,.p2,.p3{
    width:100%;
    background-color: white;
    margin:0.2rem;
  }
  .p1,.p2,.p3 span{
    font-family: iconfont;
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
    height: 2.5rem;
  }
  .i1 img{
    display:inline-block;
    /*margin: 0.2rem 0.1rem;*/
    height:1.5rem;
  }
  .i1{

  }
</style>
