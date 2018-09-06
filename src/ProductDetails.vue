<template>
  <div id="productdetails">
    <header>
      <span class="iconfont" @click="back">&#xe615;</span>
      <p @click="GoToO">商品</p>
      <p @click="GoToT">评论</p>
      <p @click="GoToTh">详情</p>
      <p @click="GoToF">推荐</p>
      <span class="iconfont">&#xe60e;</span>
      <span class="iconfont">&#xe66f;</span>
    </header>
    <main>
      <div class="pic">
        <mt-swipe :auto="2000">
          <mt-swipe-item v-for="item in kiterunner[0].bookImgs" :key="item.bi_id">
            <a rel="external nofollow" >
              <img :src="item.bi_url" class="img"/>
              <span class="desc"></span>
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <p class="p-d-name">
        <span>当当自营</span>
        {{kiterunner[0].b_name}}
      </p>
      <p class="short">{{kiterunner[0].b_description}}</p>
      <p class="sale">{{kiterunner[0].sale}}</p>
      <h2 class="price">￥{{kiterunner[0].b_price*kiterunner[0].b_discountPrice*0.1}}
        <span>{{kiterunner[0].b_discountPrice}}折</span>
      </h2>
      <p class="money">{{kiterunner[0].b_price}}元</p>
      <div class="full-dis">
        <span class="left">满减</span>
        <p>每满￥100减￥50 </p>
        <span class="iconfont right">&#xe6e0;</span>
      </div>
      <ol>
        <li class="clearfix">
          <span class="ol-left">作者</span>
          <p>{{kiterunner[0].b_author}}</p>
          <span class="iconfont ol-rigth">&#xe6e0;</span>
        </li>
        <li class="clearfix">
          <span class="ol-left">出版</span>
          <p>{{kiterunner[0].b_publish}}</p>
          <span class="iconfont ol-rigth">&#xe6e0;</span>
        </li>
        <li class="clearfix">
          <span class="ol-left">排名</span>
          <p>当当小说榜第5名</p>
          <span class="iconfont ol-rigth">&#xe6e0;</span>
        </li>
        <li class="clearfix">
          <span class="ol-left">分类</span>
          <p>图书>小说>世界名著>其他地区</p>
          <span class="iconfont ol-rigth">&#xe6e0;</span>
        </li>
      </ol>
      <div class="address">
        <span class="left">送至</span>
        <div class="user">
          <div class="three">陕西省西安市长安区西安邮电大学</div>
          <div>今天23：00前下单，预计后天送达</div>
          <div>运费5元，满49包邮</div>
        </div>
        <span class="iconfont right">&#xe6e0;</span>
      </div>
      <p class="more">
        <span>当当发货&售后</span>
        <span>正品保障</span>
        <span>支持七天无理由退货</span><br>
        <span>支持礼品卡</span>
        <span>礼品包装</span>
        <span>货到付款</span>
      </p>
      <hr/>
      <div class="comment">
        <p class="comment-hesd clearfix">
          <span>短评<a>97.00%好评</a></span>
          <a class="right">写短评</a>
        </p>
        <div class="comment-commit">
          <span>好评（）</span>
          <span>最新（）</span><br>
          <span>装帧精美（）</span>
          <span>经典必读（）</span>
        </div>
        <div class="comment-user clearfix">
            <div class="comment-usero">
              <img>
              匿名用户
            </div>
            <div class="comment-usert">
              <span class="iconfont">&#xe60a;</span>
              <span class="iconfont">&#xe60a;</span>
              <span class="iconfont">&#xe60a;</span>
              <span class="iconfont">&#xe60a;</span>
              <span class="iconfont">&#xe60a;</span>
              <span>10分</span>
            </div>
        </div>
        <p class="comment-commit-de">
          <span>精彩</span>
          为你，千千万万遍。这是看完这本书我最大的感受，因为其他感受真的无法用需要描述。既叹息人物所处时代的悲哀，又感叹阿米尔当时个性中的无力，如果是我，我会怎样做呢？
        </p>
        <hr>
        <div class="comment-user clearfix">
          <div class="comment-usero">
            <img>
            匿名用户
          </div>
          <div class="comment-usert">
            <span class="iconfont">&#xe60a;</span>
            <span class="iconfont">&#xe60a;</span>
            <span class="iconfont">&#xe60a;</span>
            <span class="iconfont">&#xe60a;</span>
            <span class="iconfont">&#xe60a;</span>
            <span>10分</span>
          </div>
        </div>
        <p class="comment-commit-de">
          <span>精彩</span>
          为你，千千万万遍。这是看完这本书我最大的感受，因为其他感受真的无法用需要描述。既叹息人物所处时代的悲哀，又感叹阿米尔当时个性中的无力，如果是我，我会怎样做呢？
        </p>
        <div class="comment-more">查看更多评论</div>
      </div>
      <hr>
      <div class="details">
        <p>
          <a>图文详情</a>
        </p>
        <ul>
          <li v-for="u in kiterunner[0].describeImages"><img :src="u.di_url"/></li>
        </ul>
        <router-view></router-view>
      </div>
      <hr class="de-rec"/>
      <p class="recommend-p">更多推荐</p>
      <div class="recommend">
        <ul class="clearfix">
          <li v-for="a in kiterunnerR">
            <img :src="a.url"/>
            <p class="rec-title">{{a.title}}</p>
            <p class="rec-more">
              <span>当当自营</span>
              <span>加价购</span>
            </p>
            <p class="rec-price">{{a.price}}</p>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div class="store">
        <p class="iconfont">&#xe71b;</p>
        <p>店铺</p>
      </div>
      <div class="like">
        <p class="iconfont" @click="Collection" :class="{checked: flag}">&#xe6af;</p>
        <p>收藏</p>
      </div>
      <div class="car">
        <router-link to="/goods"><p class="iconfont">&#xe73e;</p></router-link>
        <p>购物车</p>
      </div>
      <div class="nowbuy" @click="buyNow">立即购买</div>
      <div class="addcar" @click="Addball">加入购物车</div>
      <transition
        @bafore-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
      >
        <div class="ball" v-show="ballshow"></div>
      </transition>
    </footer>
  </div>
</template>

<script>
  import { Picker } from 'mint-ui';
  import {Swipe, SwipeItem} from 'mint-ui'
  import 'mint-ui/lib/style.css'
  import myaddress from '../static/address.json';
    export default {
        name: "ProductDetails",
        components: {
        },
        data(){
          return {
            isShow: false,
            ballshow:false,
            b_id: this.$route.query.id,
            myAddressSlots: [
              {
                flex: 1,
                defaultIndex: 1,
                values: Object.keys(myaddress), //省份数组
                className: 'slot1',
                textAlign: 'center'
              }, {
                divider: true,
                content: '-',
                className: 'slot2'
              }, {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
              },
              {
                divider: true,
                content: '-',
                className: 'slot4'
              },
              {
                flex: 1,
                values: [],
                className: 'slot5',
                textAlign: 'center'
              }
            ],
            kiterunner:[],
            kiterunnerR : [
              { url: require('@/assets/img/rec-1.png'),
                title:'浮生六记（珍藏本）',
                price:'￥19.5',
              },
              { url: require('@/assets/img/rec-2.png'),
                title:'品尝到科学：从地球生命的第一口，到饮食科学研究最前沿',
                price:'￥35.5',
              },
              { url: require('@/assets/img/rec-1.png'),
                title:'浮生六记（珍藏本）',
                price:'￥19.5',
              },
              { url: require('@/assets/img/rec-2.png'),
                title:'品尝到科学：从地球生命的第一口，到饮食科学研究最前沿',
                price:'￥35.5',
              },
              { url: require('@/assets/img/rec-1.png'),
                title:'浮生六记（珍藏本）',
                price:'￥19.5',
              },
              { url: require('@/assets/img/rec-2.png'),
                title:'品尝到科学：从地球生命的第一口，到饮食科学研究最前沿',
                price:'￥35.5',
              },
            ],
            flag: false,
          }
        },
      mounted(){
        this.show1();
      },
      methods: {
        back(){
          this.$router.go(-1);
        },
        Addball(){
          this.ballshow = !this.ballshow;
          var that=this;
          $.ajax({
            url:' http://localhost:8080/shopCartController/insertShopCart.action',
            data:{b_id:this.b_id},
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true   //前端设置是否带cookie
            },
            crossDomain:true,
            success:function(){
              console.log(that.b_id);
            },
            error:function(){
              console.log("出错");
            }
          })
        },
        beforeEnter(el){
          el.style.transform = 'translate(0,0)';
        },
        enter(el){
          el.offsetWidth;
          el.style.transform = 'translate(-4.5rem,0)';
          el.style.transition = 'all 1s ease';
          done();
        },
        afterEnter(el){
          this.ballshow = !this.ballshow;
        },
        //根据id查找详情
        show1(){
          var that = this;
          $.ajax({
            url:'http://localhost:8080/bookInformation/selectInformation.action',
            type:'post',
            dataType:'json',
            data: {b_id: this.b_id},
            xhrFields:{
              withCredentials:true   //前端设置是否带cookie
            },
            crossDomain:true,
            success:function(list){
              console.log(list);
              that.kiterunner=JSON.parse(JSON.stringify(list));
            },
            error:function(){
              console.log("出错");
            }
          })
        },
        Collection(){//收藏
          this.flag=!this.flag;
          var that=this;
          $.ajax({
            url:'http://localhost:8080/collection/addMyCollection.action',
            data:{ b_id: this.b_id },
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true   //前端设置是否带cookie
            },
            crossDomain:true,
            success:function(){

            },
            error:function(){
              console.log("出错");
            }
          })
        },
        //王子涵的数据
        buyNow(){
          var that=this;
          $.ajax({
            url:'http://localhost:8080/confirmOrder/addOrder.action',
            data:{books:this.b_id+'='+'1'},
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true   //前端设置是否带cookie
            },
            crossDomain:true,
            success:function(){
              console.log('success');
            },
            error:function(){
              console.log("出错");
            }
          });
          this.buyNow2();
          this.$router.push({path:'/pay'});
        },
        //王晶晶的数据
        buyNow2(){
          var that=this;
          $.ajax({
            url:'http://localhost:8080/alipay/alipayController.action',
            data:{total: this.b_id+'='+'1'},
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true   //前端设置是否带cookie
            },
            crossDomain:true,
            success:function(){
              console.log('success');
            },
            error:function(){
              console.log("出错");
            }
          })
        },
        GoToO(){
          var TopO=$("main")[0].offsetTop+1;
          $("html, body").animate({scrollTop:TopO+'rem'},0);
        },
        GoToT(){
          var TopT=$(".comment")[0].offsetTop-0.94;
          $("html, body").animate({scrollTop:TopT+'rem'},0);
        },
        GoToTh(){
          var TopTh=$(".details")[0].offsetTop-0.94;
          $("html, body").animate({scrollTop:TopTh+'rem'},0);
        },
        GoToF(){
          var TopF=$("p.recommend-p")[0].offsetTop-0.94;
          $("html, body").animate({scrollTop:TopF+'rem'},0);
        },
      }
    }
</script>

<style scoped>
  .pic img{
    width: 3.6rem;
    height:4.6rem;
    margin:0 auto;
  }
  .mint-swipe {
    height: 4.6rem;
  }
  .desc {
    /*font-weight: 600;*/
    opacity: 0.9;
    font-size: 0.18rem;
    text-align: center;
    padding: 5px;
    height: 0.1rem;
    /*line-height: 0.4rem;*/
    width: 100%;
    color: #fff;
    background-color: rgba(0,0,0,0.2);
    position: absolute;
    bottom: 0;
  }
#productdetails {
  display: flex;
  flex-direction:column;
  justify-content:left;
  font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";
  margin:0;
  padding:0;
}
a { text-decoration: none;
  display:block;}
header {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  margin:0 auto;
  line-height:0.94rem;
  position:fixed;
  top:0;
  left:0;
  background-color: white;
}
  header a {
    font-size:0.3rem;
  }
  header .iconfont {
    font-size: 0.4rem;
    margin-right: 0.5rem;
    margin-left: 0.1rem;
  }
  header .router-link-active {
    color:forestgreen;
    border-bottom:1px solid forestgreen;
  }
  main {
    margin-top:0.94rem;
  }
  .all ul {
    position:absolute;
    left:0;
    top:0;
  }
  .all ul li {
    float:left;
    width:3.6rem;
    height:4.6rem;
  }
.all ul li img {
  width:3.6rem;
  height:4.6rem;
}
p,h2 {
  width:94%;
  margin:0 auto;
}
.p-d-name {
  line-height:0.8rem;
  font-size:0.28rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
}
.p-d-name span {
    display:block;
    width:1.19rem;
    height:0.34rem;
    text-align: center;
    line-height:0.34rem;
    background-color:forestgreen;
    color:#ffffff;
    font-size: 0.18rem;
    border-radius:0.17rem;
    margin-right:0.14rem;
    padding:0.01rem 0.1rem;
}
.short {
  font-size:0.24rem;
  line-height:0.32rem;
  color: #666;
}
.sale {
  font-size:0.24rem;
  color:forestgreen;
}
.price {
  font-size:0.36rem;
  color:forestgreen;
  line-height: 0.7rem;
}
.price span {
  font-size: 0.24rem;
  color: #666;
}
.money {
  font-size:0.24rem;
  line-height: 0.5rem;
  color:#666;
  text-decoration:line-through;
}
  .full-dis{
    width:100%;
    height:1.06rem;
    text-align: center;
    border-top: 0.1rem solid #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding:0 3%;
  }
  .full-dis .left  {
    display:block;
    width:0.9rem;
    height:0.32rem;
    line-height: 0.32rem;
    border:1px solid forestgreen;
    border-radius: 0.05rem;
    font-size: 0.2rem;
    margin:auto;
  }
.full-dis .right{
  font-size: 0.22rem;
  color:#666;
  padding:0.3rem 0;
}
.full-dis p {
  width:5.8rem;
  font-size: 0.2rem;
  text-align: left;
  padding:0 0.2rem;
}
ol {
  border-top:0.1rem solid #eee;
  border-bottom:0.1rem solid #eee;
}
ol li {
  width:94%;
  margin:0 auto;
  height:0.88rem;
}
  ol li span {
    display:block;
    font-size:0.22rem;
    line-height: 0.88rem;
  }
  ol li .ol-left,ol li p {
    float:left;
  }
  ol li .ol-rigth {
    float:right;
  }
ol li p {
  width:5.8rem;
  font-size: 0.2rem;
  text-align: left;
  padding:0 0.2rem;
  line-height: 0.88rem;
}
  ol li:nth-child(1),ol li:nth-child(2),ol li:nth-child(3){
    border-bottom: 0.01rem solid #eee;
  }
  .address {
    width:94%;
    height:2.02rem;
    margin:0 auto;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .address .left{
    display:block;
    padding-top:0.4rem;
  }
  .address .right{
    display:block;
    padding-top:1.4rem;
  }
  .user {
    padding:0.4rem 0.2rem;
  }
  .more {
    padding:0.2rem 0;
    line-height:0.5rem;
    font-size: 0.24rem;
  }
  .address .three{
    margin:0 0 0.1rem 0 ;
  }
  .more span {
    color:#666;
  }
  .more span:before {
    content:"· ";
    font-size: 0.3rem;
    color:#ff896b;
  }
  hr {
    width:100%;
    height:0.1rem;
    background-color: #ccc;
    color:#ccc;
  }
  .comment{
    width:94%;
    margin:0 auto;
  }
  .comment hr {
    height:0.01rem;
    color:#ccc;
    background-color: #ccc;
  }
  .comment-hesd {
    font-size:0.26rem;
  }
  .comment-hesd span {
    float:left;
  }
  .comment-hesd span a {
    display: inline;
    margin-left:0.1rem;
    color:#fe7446;
  }
  .comment-hesd a{
    float:right;
  }
  .comment-commit span {
    display:inline-block;
    heigth:0.62rem;
    border:1px solid #fe7446;
    padding:0 0.34rem;
    line-height:0.62rem;
    font-size:0.24rem;
    border-radius:0.31rem;
    color:#fe7446;
    margin:0.1rem;
  }
  .comment-commit span:nth-child(1),.comment-commit span:nth-child(2) {
    width:2.15rem;
  }
  .comment-commit span:nth-child(3),.comment-commit span:nth-child(4) {
    width:2.46rem;
  }
  .comment-usero{
    float:left;
    padding-top:0.2rem;
  }
  .comment-usero img {
    height:0.8rem;
    width:0.8rem;
    margin-rigth:0.2rem;
    float:left;
    border:none;
  }
  .comment-usert {
    float:right;
    padding-top: 0.2rem;
  }
  .comment-user {
    line-height: 0.8rem;
  }
  .comment-usert span {
    color:#fe7446;
  }
  .comment-commit-de {
    font-size: 0.24rem;
    line-height:0.36rem;
    padding:0.15rem 0;
  }
  .comment-commit-de span {
    font-size: 0.2rem;
    padding:0.02rem;
    border:0.01rem solid forestgreen;
    color:forestgreen;
    border-radius: 0.05rem;
  }
  .comment-more {
    width:2.42rem;
    height:0.64rem;
    border:0.01rem solid #fe7446;
    color:#fe7446;
    padding:0.12rem 0.37rem;
    font-size: 0.24rem;
    text-align: center;
    border-radius: 0.32rem;
    margin:0 auto;
  }
  .details {
    width:94%;
    margin:0 auto;
    padding-bottom: 0.2rem;
  }
  .details p {
    text-align: center;
  }
  .details p a {
    display:inline;
    font-size: 0.38rem;
    line-height:0.85rem;
  }
  .details p .router-link-active {
    color:forestgreen;
  }
  .details img {
    width:100%;
  }
  .de-rec {
    width:100%;
    height:0.01rem;
    background-color: #eee;
    margin:0;
  }
  .recommend-p{
    width:100%;
    line-height:0.6rem;
    font-size: 0.22rem;
    background-color: #eee;
    padding:0 3%;
  }
  .recommend-p:before{
    content:"| ";
    font-size:0.5rem;
  }
  .recommend ul li {
    width:50%;
    float:left;
  }
  .recommend ul li img {
    width:2.67rem;
    height:3.74rem;
    margin:0 auto;
  }
  .recommend ul li .rec-title {
    height:0.6rem;
    line-height:0.3rem;
    font-size: 0.2rem;
    padding-left: 0.2rem;
  }
  .recommend ul li .rec-more{
    padding-left: 0.2rem;
  }
  .recommend ul li .rec-more span:nth-child(1){
    border:1px solid forestgreen;
    color:forestgreen;
    font-size:0.18rem ;
    width:0.86rem;
    height:0.24rem;
    line-height:0.24rem;
    padding:0.03rem;
    border-radius: 0.1rem;
  }
  .recommend ul li .rec-more span:nth-child(2){
    width:0.66rem;
    height:0.24rem;
    padding:0.03rem;
    background-color:forestgreen;
    color:#ffffff;
    font-size:0.18rem ;
    line-height: 0.24rem;
    border-radius: 0.1rem;
  }
  .recommend ul li .rec-price {
    font-size: 0.3rem;
    line-height: 0.5rem;
    color:forestgreen;
    padding-left: 0.2rem;
  }
  .recommend ul li:nth-child(2n+1) {
    border-bottom: 0.01rem solid #eee;
    border-right: 0.01rem solid #eee;
  }
  .recommend ul li:nth-child(2n) {
    border-bottom: 0.01rem solid #eee;
  }
  footer {
    padding-left:0.3rem;
    position: fixed;
    height: 1rem;
    width: 100%;
    right:0;
    bottom:0;
    background-color: #fff;
  }
  footer .store,footer .like,footer .car {
    width:0.9rem;
  }
  footer .car {
    position: absolute;
    right:4.38rem;
    bottom:0;
  }
  footer .like {
    position: absolute;
    right:5.28rem;
    bottom:0;
  }
  footer .store {
    position: absolute;
    right:6.18rem;
    bottom:0;
    padding-top: 0.1rem;
  }
  footer div .iconfont{
    font-size: 0.38rem;
    text-align: center;
  }
  .checked{
    font-weight: bold;
    color: #f9524f;
  }
  footer div p {
    font-size: 0.18rem;
    line-height: 0.5rem;
    text-align: center;
  }
  footer .nowbuy {
    position:absolute;
    right:2.19rem;
    bottom: 0;
    width:2.19rem;
    height:1rem;
    background-color: forestgreen;
    color:#ffffff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
  }
  footer .addcar {
    position: absolute;
    right:0;
    bottom:0;
    width:2.19rem;
    height:1rem;
    background-color: #f9524f;
    color:#ffffff;
    text-align: center;
    line-height: 1rem;
    font-size: 0.3rem;
  }
  footer .ball {
    width:0.2rem;
    height:0.2rem;
    position:absolute;
    right:0;
    top:0;
    z-index: 99;
    background-color:red;
    border-radius: 50%;
  }
</style>
