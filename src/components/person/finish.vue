<template>
  <ul class="finish">
    <div class="header1">
      <router-link class="st1" to="/person">&#xe602;</router-link>
      <h2>订单管理</h2>
    </div>
    <ul class="xc">
      <router-link to="/order" tag="li">全部</router-link>
      <router-link to="/apply" tag="li">待付款</router-link>
      <router-link to="/ssh" tag="li">待收货</router-link>
      <router-link to="/judge" tag="li">待评价</router-link>
      <router-link to="/finish" tag="li">已完成</router-link>
    </ul>
    <li class="part1 clearfix" v-for="(u,index) in jpgList">
      <div class="left">
        <img :src="u.b_img" width="100" height="100"/>
      </div>
      <div class="right">
        <p class="ido">{{u.b_name}}</p>
      </div>
      <div class="lo">
        <h5>现价{{(u.b_price*u.b_discountPrice*0.1).toFixed(2)}}</h5>
        <h6>原价{{u.b_price}}</h6>
      </div>
      <div class="ko">
        <div>数量{{u.number}}</div>
        <div class="po">总计钱数{{(u.b_price*u.b_discountPrice*u.number*0.1).toFixed(2)}}</div>
        <br>



      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "collect",
    data(){
      return{
        jpgList: [],

      }
    },
    mounted(){
      this.aj();
    },
    methods:{
      aj()
      {
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/showOrder/showOrder3.action',
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true    // 前端设置是否带cookie
          },

          crossDomain: true,
          success: function (goods) {
            console.log(goods);
            that.jpgList = JSON.parse(JSON.stringify(goods));
          },
          error: function () {
            console.log("出错");
          }
        })
      },

    }
  }

</script>

<style scoped>
  .ido{
    width: 2.8rem;
    overflow: hidden;
    height:1rem;
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top:0.5rem;
  }
  .router-link-active{
    color: #009a61;
  }
  .header1{

    width:100%;
    height:1.5rem;
    background-color: white;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    justify-content: flex-start;
    padding:0.5rem;
  }
  .xc{
    width:100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
  }
  .st1{
    font-family:iconfont;
    font-size:0.6rem;
    position: absolute;
    left:0.3rem;

  }
  h2{
    width:4rem;
    position: absolute;
    margin-left:40%;

  }

  .ko{
    width:100%;
    height: 0.6rem;
  }

  .part1{
    display: block;
    width:100%;
    background-color: white;
    border-top:0.1rem #eaeaea solid;
    border-bottom: 0.1rem #ccc solid;
    position: relative;
    float: left;
  }
  .left>span:nth-child(1){
    background-color: forestgreen;
    color: white;
    padding:0 0.1rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.2rem;
  }
  .left{
    float: left;
    position: relative;
    height: 2.5rem;
    margin-right: 1rem;
  }

  .right h2{
    position: absolute;
    margin-left: 40%;
  }

  .part1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 0.1rem solid #f5f5f5;
    /*padding: 20px;*/
  }
  .star span,.span1{
    font-family: 'iconfont';
    font-size: 0.1rem;
  }


  .right{
    display: flex;
    flex-grow: 2;
    float: left;
    position: relative;
    padding-top:0.1rem;
    padding-bottom: 0.1rem;

  }
  .lo{
    margin-top: 1rem;
    float: right;
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
  }h5{
     font-size: 0.4rem;
     margin-bottom: 0.3rem;
   }
  h6{
    text-decoration: line-through;
    color:#ccc;
    font-size: 0.4rem;
  }
  .ko{
    height: 0.7rem;
    position: relative;
    display: flex;
    justify-content: space-around;
  }
  .po , .ko{

    float: right;

    font-size: 0.3rem;

  }


</style>
