<template>
  <div class="recommend">
    <ul class="clearfix">
      <li v-for="a in kiterunnerR">
        <img :src="a.b_img"/>
        <p class="rec-title">{{a.b_name}}</p>
        <p class="rec-more">
          <span>当当自营</span>
          <span>加价购</span>
        </p>
        <p class="rec-price">{{a.b_price}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import {Loadmore} from 'mint-ui';
    export default {
        name: "LoadMore",
        data(){
          return{
            kiterunnerR : []
          }
      },
      mounted: function(){
        this.show();
      },
      methods:{
        show(){
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/bookInformation/promotionalBooks.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.kiterunnerR = JSON.parse(JSON.stringify(goods));
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
  .recommend ul{
    margin-bottom: 0.6rem;
  }
  .recommend ul li {
    width:50%;
    float:left;
  }
  .recommend ul li img {
    width: 2.5rem;
    height: 2.8rem;
    margin:0 auto;
  }
  .recommend ul li .rec-title {
    height:0.6rem;
    line-height:0.3rem;
    font-size: 0.2rem;
    padding-left: 0.2rem;
    padding-top: 0.1rem;
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
</style>
