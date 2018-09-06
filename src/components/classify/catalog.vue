<template>
<div class="catalog">
  <div class="head">
    <span class="jt" @click="back">&#xe602;</span>
    <div class="sear">
      <span>&#xe617;</span>
      <input type="text" name="b_category" v-model="word"/>
    </div>
  </div>
  <div class="naa">
    <ul>
      <li v-for="(item,index) in title" @click="choose(item,index)"
          :class="{choose: n==index}" v-html="item.kind" class="clearfix">
      </li>
    </ul>
  </div>
  <ul class="par">
    <li class="par1 clearfix" v-for="n in psdList" @click="goto(n)">
      <div class="zuo">
        <img :src="n.b_img"/>
      </div>
      <div class="you clearfix">
        <h4>{{n.b_catelogy}}</h4>
        <p>{{n.b_author}}</p>
        <p class="circle">
          <span>当当自营</span>
          <span>满80-5</span>
        </p>
        <div class="price">
          <h4>￥{{((n.b_discountPrice/10)*n.b_price).toFixed(2)}}</h4>
          <span>￥{{n.b_price}}</span>
        </div>
        <p>{{n.b_description}}</p>
      </div>
      <span class="car">&#xe73e;</span>
    </li>
  </ul>
  <button type="button" @click="toTop" class="btn">&#xe62b;</button>
</div>
</template>

<script>

    export default {
        name: "catalog",
      data(){
          return{
            isDis:false,
            isDiss:false,
            flag: 0,
            title: [{kind:"综合"},
              {kind:'<span>&#xe6aa;</span>'},{kind:"价格"},
              {kind:'<span>&#xe630;</span>'},{kind:"好评"}],
            n: 1,
            psdList:[],
            word: this.$route.query.chuan,
          }
      },
      mounted: function(){
        $(window).scroll(function (){
          $("button").css("display",$(window).scrollTop()>=200?"block":"none");
        });
        this.show();
        console.log(this.word);
      },
      methods:{
        goto(item){
          this.$router.push({path: '/ProductDetails',query:{id: item.b_id}});
        },
        back(){
          this.$router.go(-1);
        },
        toTop(){
          $(window).scrollTop(0);
        },
        show(){
          var that = this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/bookInformation/queryByCategory.action',
            type: 'post',
            dataType: 'json',
            data:{b_category: this.word},
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goo) {
              that.psdList = JSON.parse(JSON.stringify(goo));
              console.log(goo);
            },
            error: function () {
              console.log("出错了！");
            }
          });
        },
        choose(item,index){
          var that = this;
          this.n = index;
          console.log(index);
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/bookInformation/chooseController.action',
            type: 'post',
            dataType: 'json',
            data:{b_category: this.word , status: index},
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goo) {
              that.psdList = JSON.parse(JSON.stringify(goo));
              console.log(goo);
            },
            error: function () {
              console.log("出错了！");
            }
          });
        }
      }
    }
</script>

<style scoped>
  /*catalog*/
  .naa ul{
    width: 100%;
  }
  .naa ul li{
    text-align: center;
    line-height: 0.6rem;
    border-radius: 10px;
    color: #009a61;
    float: left;
    font-family: iconfont;
  }
  .naa ul li:nth-of-type(1){
    width: 20%;
    margin-right: 0.8rem;
    margin-left: 0.5rem;
  }
  .naa ul li:nth-of-type(2){
    width: 6%;
    border-radius: 3px;
  }
  .naa ul li:nth-of-type(3){
    width: 14%
  }
  .naa ul li:nth-of-type(4){
    width: 6%;
    margin-right: 0.8rem;
    border-radius: 3px;
  }
  .naa ul li:nth-of-type(5){
    width: 20%;
  }
  .catalog{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
  }

  .head{
    position:fixed;
    width:100%;
    height: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .naa ul li.choose{
    color: #fff;
    background-color: #009a61;
  }
  .sear{
    width:80%;
    height:0.6rem;
    display: flex;
    align-items:center;
    padding:0 0.2rem;
    border-radius: 20px;
    background-color:#eef2f1;
  }
  .jt{
    font-family:'iconfont';
    font-size:20px;
    color: darkgray;
    margin-right:0.5rem;
  }
  .sear span{
    font-family: 'iconfont';
    font-size:20px;
    color: darkgray;
    margin-right:0.2rem;
  }
  .sear input{
    background-color: transparent;
    border:none;
  }
  .sear input:focus{
    outline:none;
  }
  .naa{
    border-top: 2px solid #ccc;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 1rem;
  }
  .naa span{
    width: 33%;
    display: inline-block;
    text-align: center;
    line-height: 0.5rem;
  }
  .naa span:nth-child(0){
    position: relative;
  }
  .dis{
    width: 33%;
    position: absolute;
    border: 0.01rem forestgreen solid;
    left: 0;
    top: 1.6rem;
    background-color: snow;
  }
  .par{
    background-color: white;
  }
  .par1{
    border-top: 1px #eaeaea solid;
  }
  .zuo{
    float: left;
    height: 1.2rem;
    margin-right: 0.8rem;
  }
  .you{
    padding-top: 0.25rem;
    padding-bottom:0.25rem;
  }
  .par1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 1px solid #f5f5f5;
    width: 2rem;
    height: 2rem;
    /*padding: 20px;*/
  }
  .par li{
    position: relative;
  }
  .you p:nth-child(2){
    font-size: 0.18rem;
    color: #adadad;
  }
  .you .circle span:nth-child(1){
    color:forestgreen;
    border:1px forestgreen solid;
    border-radius: 10%;
    font-size:0.2rem;
  }
  .you .circle span:nth-child(2){
    color:white;
    background-color: forestgreen;
    border-radius: 10%;
    padding:2px;
    font-size:0.2rem;

  }
  .you .price h4{
    color:forestgreen;
    float:left;
  }
  .price span:nth-child(2){
    text-decoration: line-through;
    padding-left: 0.2rem;
    color: #adadad;
    font-size: 0.2rem;
  }
  .price span:nth-child(3){
    padding-left: 0.1rem;
    color: #adadad;
    font-size: 0.2rem;
  }
  .you p:nth-child(5){
    color: #666;
    font-size: 0.2rem;
    width: 60%;
    float: right;
    height: 1.1rem;
    overflow: hidden;
  }
  .car{
    color: forestgreen;
    font-family: 'iconfont';
    position: absolute;
    right: 0.9rem;
    top: 1rem;
  }
  /*body{height:2000px;}*/
  button{width:40px; height:40px; font-size:25px;border-radius: 50%;
    border:1px #009a61 solid;font-family: "iconfont";
    position:fixed; right:10px;display:none; bottom:10px;
  color:#009a61;background-color: snow;
    text-align: center;}
</style>
