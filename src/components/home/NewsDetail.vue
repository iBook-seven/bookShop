<template>
  <div class="recommend">
    <div class="title">
      <router-link to="/NewsPage"><span class="return">&#xe602;</span></router-link>
      <h2>最新活动</h2>
    </div>
    <ul class="clearfix">
      <li v-for="item in bookList">
        <img :src="item.b_img"/>
        <p class="rec-title">{{item.b_name}}</p>
        <p class="rec-more">
          <span>领劵</span>
          <span>满减</span>
          <span class="ico">&#xe73e;</span>
        </p>
        <p class="rec-price">￥{{item.b_price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AuthorBook",
    data(){
      return{
        type: this.$route.query.kind,
        bookList : []
      }
    },
    mounted: function(){
      this.show();
      console.log(this.type);
    },
    methods:{
      show(){
        var that = this;
        $.ajax({
          url: 'http://localhost:8080/bookInformation/activitySale.action',
          type: 'post',
          dataType: 'json',
          data: {type: this.type},
          xhrFields: {
            withCredentials: true   // 前端设置是否带cookie
          },
          crossDomain: true,
          success: function (goods) {
            that.bookList = JSON.parse(JSON.stringify(goods));
            console.log(goods);
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
  .ico{
    font-family: 'iconfont';
    width: 0.2rem;
    height: 0.2rem;
    color: forestgreen;
    float: right;
    margin-right: 0.4rem;
  }
  .return{
    font-family: 'iconfont';
    font-size: 0.4rem;
    position: absolute;
    left: 10px;
    top: 0.3rem;
    color: #323232;
  }
  .title{
    position: relative;
    /*margin-bottom: 0.2rem;*/
  }
  .title h2{
    font-size: 0.45rem;
    line-height: 1.2rem;
    text-align: center;
    /*color: #666;*/
    border-bottom: 1px solid #f5f5f5;
    background: linear-gradient(to right, forestgreen, yellow);
    -webkit-background-clip: text;
    color: transparent;
  }
  .recommend ul{
    margin-bottom: 0.6rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .recommend ul li {
    width:33.3%;
    padding-top: 0.1rem;
  }
  .recommend ul li img {
    width:1.9rem;
    height:2.5rem;
    margin:0 auto;
  }
  .recommend ul li .rec-title {
    height:1.1rem;
    line-height:0.3rem;
    font-size: 0.2rem;
    padding-top: 0.1rem;
    padding-left: 0.2rem;
    overflow: hidden;
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
    padding:0.04rem;
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
  .recommend ul li {
    border-bottom: 0.01rem solid #eee;
    border-right: 0.01rem solid #eee;
  }
</style>
