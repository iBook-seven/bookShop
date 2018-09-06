<template>
  <div class="wrap">
    <div class="title">
      <router-link to="/home"><span class="return">&#xe602;</span></router-link>
      <h2>促销资讯</h2>
    </div>
    <ul class="list">
      <li v-for="item in newsList" @click="getType(item)">
        <span class="reduce">满减</span>
        <h3>{{item.b_description}}</h3>
        <p>{{item.activityType}}</p>
        <img :src="item.dt_img">
        <p>2018-07-27</p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "News",
        data(){
        return{
          type: '',
          newsList: [],
        }
      },
      mounted: function(){
        this.show();
      },
      methods:{
        getType(item){
          this.$router.push({path: '/NewsDetail',query:{kind: item.activityType}});
        },
        show(){
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/bookInformation/queryAllActivitySale.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.newsList = JSON.parse(JSON.stringify(goods));
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
  .wrap{
    /*padding-bottom: 2.8rem;*/
  }
  .return{
    font-family: 'iconfont';
    font-size: 0.5rem;
    position: absolute;
    left: 10px;
    top: 0.42rem;
    color: #009a61;
  }
  .title{
    position: relative;
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
  .reduce{
    display: inline-block;
    line-height: 0.35rem;
    padding: 0 0.08rem;
    background: linear-gradient(to right,#009a61,lightslategray);
    color: #fff;
    border-radius: 4px;
    float: left;
    margin-right: 0.08rem;
    margin-top: 0.05rem;
    font-size: 0.13rem;
  }
  .list li h3{
    font-size: 0.28rem;
    line-height: 0.5rem;
    color: #333333;
  }
  .list li p{
    color: #8b8b8b;
    font-size: 0.22rem;
    line-height: 0.4rem;
    padding-left: 10px;
  }
  .list li p:nth-of-type(2){
    text-align: right;
    padding-right: 13px;
    line-height: 5vh;
  }
  .list li{
    position: relative;
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 2vh;
    /*height: 1.8rem;*/
  }
  .list li img{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 1.5rem;
    height: 1rem;
  }
  ul.list li p:nth-of-type(2){
    padding-top: 0.3rem;
  }
  .list li h3{
    width: 70%;
  }

</style>
