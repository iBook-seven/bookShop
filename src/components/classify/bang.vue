<template>
     <div class="all">
        <div class="bang">
          <router-link to="sort" class="arrow">&#xe602;</router-link>
          <h2>图书畅销榜</h2>
        </div>
        <ul class="part">
          <li class="part1 clearfix" v-for="(u,index) in jpgList" @click="goto(u)">
          <div class="left">
              <span>{{index+1}}</span>
              <img :src="u.b_img"/>
          </div>
          <div class="right">
            <h4>{{u.b_category}}</h4>
            <p>作者：{{u.b_author}}</p>
            <p>出版社：{{u.b_publish}}</p>
            <p class="circle">
              <span>当当自营</span>
              <span>满减</span>
            </p>
            <div class="price">
              <h4>￥{{((u.b_discountPrice/10)*u.b_price).toFixed(2)}}</h4>
              <p>￥{{u.b_price}}</p>
              <span>销量：{{u.b_saleNum}}</span>
            </div>
            <p class="star"><span>&#xe60b;</span><span>&#xe60b;</span><span>&#xe60b;</span><span>&#xe60b;</span><span>&#xe60b;</span></p>
            <span class="span1">&#xe73e;</span>
          </div>
          </li>
        </ul>
       <button type="button" @click="toTop" class="btn">&#xe62b;</button>
     </div>
</template>

<script>
    export default {
        name: "bang",
      data(){
          return{
            jpgList: this.$route.query.list,
          }
        },
      mounted:function(){
        // this.show();
         $(window).scroll(function (){
         $("button").css("display", $(window).scrollTop()>=100?"block":"none");
        });
      },
      methods:{
        goto(item){
          this.$router.push({path: '/ProductDetails',query:{id: item.b_id}});
        },
        toTop(){
            $(window).scrollTop(0);
          },
        show(){
          var that = this;
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/bookInformation/hotSaleController.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true
            },
            crossDomain: true,
            success: function (goods) {
              that.jpgList = JSON.parse(JSON.stringify(goods));
              console.log(that.jpgList);

            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
      },
    }
</script>

<style scoped>

  /*bang*/
  .bang{
    width: 100%;
    background-color: white;
    padding:0.5rem 0.6rem 0.7rem;
  }
  .arrow{
    position: absolute;
    float: left;
    font-size:0.5rem;
    font-family: iconfont;
  }
  .bang h2{
    float: left;
    margin-left:2rem;
    font-size: 0.4rem;
  }
  .part{
    background-color: white;
  }
  .part1{
    border-top:0.02rem #eaeaea solid;

  }
  .left>span:nth-child(1){
    background-color: #009a61;
    color: white;
    padding:0 0.07rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.35rem;
  }
  .left{
    float: left;
    position: relative;
    height: 1.2rem;
    margin-right: 0.8rem;
  }
  .right{
    float: left;
    position: relative;
    padding-top: 0.25rem;
    padding-bottom:0.25rem;
  }
  .part1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 1px solid #f5f5f5;
    width: 2rem;
    height: 2rem;
    /*padding: 20px;*/
  }
  .right p:nth-child(2),p:nth-child(3){
    font-size: 0.18rem;
    color: #9fa0a0;
  }
  .star span,.span1{
    font-family: 'iconfont';
    font-size: 0.2rem;
  }
  .right .circle span:nth-child(1){
    color:forestgreen;
    border:1px forestgreen solid;
    border-radius: 10%;
    font-size:0.2rem;
  }
  .right .circle span:nth-child(2){
    color:white;
    background-color: forestgreen;
    border-radius: 10%;
    padding:2px;
    font-size:0.2rem;
  }
  .right .price h4{
    color:forestgreen;
    float:left;
  }
  .right .price p{
    text-decoration: line-through;
    padding-left: 0.7rem;
    font-size: 0.2rem;
    color: #adadad;
  }
  .right .span1{
    color:#009a61;
    position:absolute;
    left:2.5rem;
    bottom:0.3rem;
    font-size:0.3rem;

  }
  button{width:40px; height:40px; font-size:25px;border-radius: 50%;
    border:1px #009a61 solid;font-family: "iconfont";
    position:fixed; right:10px;display:none; bottom:10px;
    color:#009a61;background-color: snow;
    text-align: center;}
</style>
