<template>
  <div class="recommend">
    <div class="title">
      <router-link to="/home"><span class="return">&#xe602;</span></router-link>
      <h2>作者相关书籍</h2>
    </div>
    <ul class="clearfix">
      <li v-for="item in bookList">
        <img :src="item.b_img" @click="goto(item)"/>
        <p class="rec-title">{{item.b_name}}</p>
        <p class="rec-more">
          <span>领劵</span>
          <span>限时购</span>
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
        authorName: this.$route.query.name,
        bookList : []
      }
    },
    mounted: function(){
      this.show();
      console.log(this.authorName);
    },
    methods:{
      show(){
        var that = this;
        console.log(this.authorName)
        $.ajax({
          url: 'http://localhost:8080/bookInformation/selectByAuthor.action',
          type: 'post',
          dataType: 'json',
          data: {author: this.authorName},
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
      goto(item){
        this.$router.push({path: '/ProductDetails',query:{id: item.b_id}});
      }
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
    margin-bottom: 0.4rem;
  }
  .title h2{
    font-size: 0.3rem;
    line-height: 0.9rem;
    text-align: center;
    color: #323232;
    border-bottom: 1px solid #b2b2b2;
    letter-spacing: 1px;
  }
  .recommend ul{
    margin-bottom: 0.6rem;
  }
  .recommend ul li {
    width:50%;
    float:left;
  }
  .recommend ul li img {
    width:2.4rem;
    height:2.8rem;
    margin:0 auto;
  }
  .recommend ul li .rec-title {
    padding-top: 0.1rem;
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
  .recommend ul li:nth-child(2n+1) {
    border-bottom: 0.01rem solid #eee;
    border-right: 0.01rem solid #eee;
  }
  .recommend ul li:nth-child(2n) {
    border-bottom: 0.01rem solid #eee;
  }
</style>
