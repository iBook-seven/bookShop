<template>
  <router-link to="/SuperKillPage">
    <section>
      <div class="title">
        <p>SUPER SECKILL</p>
        <h1>超级秒杀</h1>
        <span class="icon">&#xe783;</span>
      </div>
      <div class="time">
        <p><span>{{hour | addZ}}</span>时<span>{{minute | addZ}}</span>分<span>{{second | addZ}}</span>秒</p>
      </div>
      <ul>
        <li v-for="good in four">
          <img :src="good.b_img"/>
          <p>{{good.b_description}}</p>
          <h3>￥{{good.b_price}}</h3>
          <p>￥{{(good.b_price * 1.2).toFixed(2)}}</p>
        </li>
      </ul>
      <img src="../../assets/img/banner2.jpg" width="100%">
    </section>
  </router-link>
</template>

<script>
    export default {
        name: "SuperKill",
        data(){
          return{
            timer: null,
            allTime: 4801,
            hour: 0,
            minute: 0,
            second: 0,
            goodsList: [],
            four:[],
          }
      },
      mounted(){
        var that = this;
        this.timer = setInterval(function(){
          that.getTime();
          // console.log(that.hour+':'+that.minute+":"+that.second);
        },1000);
        this.show();
        // this.goodsList.length = 4;

      },
      methods:{
          getTime(){
            this.hour = Math.floor(this.allTime/3600);
            this.minute = Math.floor(this.allTime%3600/60);
            this.second = Math.floor(this.allTime%60);
            if(this.allTime>=1){
              this.allTime--;
            }
            else{
              clearInterval(this.timer);
            }
          },
        show(){
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/bookInformation/queryAllBooks.action',
            type: 'post',
            dataType: 'json',
            data: {date: '10:00'},
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.goodsList = JSON.parse(JSON.stringify(goods));
              that.four = that.goodsList.slice(0,4);
              console.log(that.four);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
      },
      filters: {
          addZ: function(value){
            return value>10 ? ''+value : '0'+value;
          }
      },

    }
</script>

<style scoped>
  section .title{
    font-size: 1rem;
    width: 40%;
    border-top: 1px solid forestgreen;
    border-bottom: 1px solid forestgreen;
    border-radius: 10px;
    margin: 0.2rem auto;
    position: relative;
  }
  section .title p{
    font-size: 0.12rem;
    color: forestgreen;
    text-align: center;
  }
  section .title h1{
    font-size: 0.22rem;
    color: forestgreen;
    text-align: center;
    line-height: 0.31rem;
  }
  .icon{
    font-family: 'iconfont';
    font-size: 0.35rem;
    position: absolute;
    right: -1.9rem;
    top: 0.2rem;
    color: forestgreen;
  }
  section .time{
    width: 30%;
    margin: 0rem auto;
    font-size: 0.18rem;
  }
  section .time p{
    margin: 0.15rem auto;
  }
  section .time p span{
    display: inline-block;
    background-color: #323232;
    color: #fff;
    padding: 0.01rem 0.04rem;
    border-radius: 0.05rem;
    margin: 0 0.04rem;
  }
  section .time p span:nth-of-type(3){
    background-color: forestgreen;
  }
  section ul{
    margin: 0.25rem auto;
    padding: 0.05rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  section ul li{
    width: 25%;
    margin: 0 auto;
    border-right: 1px solid #e6e6e6;
  }
  section ul li img{
    width: 1.3rem;
    height: 1.35rem;
    margin: 0 auto;
  }
  section ul li p:nth-of-type(1){
    padding: 8px 0 0 3px;
    margin: 0 auto;
    font-size: 0.18rem;
    line-height: 0.28rem;
    color: #323232;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  section ul li h3{
    color: forestgreen;
    font-size: 0.27rem;
    line-height: 0.6rem;
    padding-left: 0.15rem;
  }
  section ul li p:nth-of-type(2){
    text-decoration: line-through;
    color: #929091;
    font-size: 0.22rem;
    line-height: 0.23rem;
    padding-left: 0.15rem;
  }
</style>
