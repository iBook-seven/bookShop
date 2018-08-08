<template>
  <div class="apply">
    <div class="back">
      <router-link to="/goods">
        <span>&#xe602;</span>
      </router-link>
      <p>订单结算</p>
    </div>
    <div class="address">
      <span>姓名</span>
      <span>15529343236</span>
      <p><span>&#xe607;</span>陕西省西安市长安区你猜在哪</p>
      <div class="bg">&#xe6e0;</div>
    </div>
    <div class="button"></div>
    <div class="bgc"></div>
    <div class="home">
      <span></span>
      <span>亚马逊</span>
    </div>
    <div class="goods">
      <div class="left">
        <img src="../../assets/img/1.jpg" alt="">
        <img src="../../assets/img/2.jpg" alt="">
      </div>
      <div class="right">
        <span>￥：22.27</span>
        <p>共三件，免运费</p>
      </div>
      <div class="bg-one">&#xe6e0;</div>
    </div>
    <div class="send">
      <span>配送方式</span>
      <span class="one">亚马逊快递(送货时间不限)</span>
      <p class="on">今日<span>15:25</span>前付款</p>
      <p class="ono">预计<span>08</span>月<span>07日</span><span>(周日)</span>送达</p>
      <div class="bg-two">&#xe6e0;</div>
    </div>
    <div class="give">
      <span>送礼</span>
      <span>不可用</span>
      <div class="bg-three">&#xe6e0;</div>
    </div>
    <div class="deliver">
      <span>配送方式</span>
      <span>普通快递</span>
      <div class="bg-four">&#xe6e0;</div>
    </div>
    <div class="message">
      <span>买家留言：</span>
      <input type="text" placeholder="要对商家说...(仅限70字)">
    </div>
    <div class="app">
      <span>支付方式</span>
      <p><span>&#xe64a;</span>&nbsp;支付宝</p>
      <div class="bg-five">&#xe6e0;</div>
    </div>
    <div class="gift">
    <span>礼品卡</span>
    <span>无可用</span>
    <div class="bg-six">&#xe6e0;</div>
  </div>
    <div class="money">
      <p>余额<span>￥0.00</span></p>
      <span>不可用</span>
    </div>
    <div class="end">
      <span>商品金额：</span>
      <span>￥22.7</span><br>
     <p><span>运费</span><span>￥0.00</span></p>
    </div>
    <div class="finally">
      <p><span>实付:&nbsp</span><span>￥22.7</span></p>
      <div class="btn">
        <span>去支付</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pay"
  }
</script>
<style scoped>
  .back {
    width: 100%;
    height: 1.06rem;
    border-bottom: 0.02rem solid #f3f3f3;
  }

  .back p {
    display: inline-block;
    text-align: center;
    line-height: 1.06rem;
    margin-left: 2.29rem;
  }

  .back span {
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
    margin-left: 0.33rem;
  }

  .address {
    height: 1.22rem;
    width: 100%;
    padding-left: 0.6rem;
    position: relative;
    font-size: 0.23rem;
  }

  .address span {
    line-height: 0.55rem;
    padding-top: 0.1rem;
  }

  .address span:nth-child(2) {
    margin-left: 0.6rem;
  }

  .address p {
    height: 0.51rem;
    line-height: 0.51rem;
  }

  .address p span {
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
    margin-left: -0.32rem;
  }

  .bg {
    position: absolute;
    top: 0.42rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }

  .button {
    width: 100%;
    background-image: url("../../assets/img/2.png");
    height: 0.04rem;
  }

  .bgc {
    height: 0.16rem;
    background-color: #f3f3f3;
  }

  .home {
    height: 0.67rem;
  }

  .home span {
    line-height: 0.67rem;
    margin-left: 0.87rem;
  }

  .goods {
    width: 100%;
    height: 1.4rem;
    background-color: #fafafa;
    display: flex;
    padding-top: 0.2rem;
    position: relative;
    border-bottom: 0.02rem solid #f3f3f3;
    font-size: 0.23rem;
  }

  .goods .left {
    height: 1.4rem;
    width: 50%;
  }

  .left img {
    margin-left: 0.29rem;
    width: 1rem;
    height: 1rem;
    display: inline-block;
  }

  .goods .right {
    width: 50%;
  }

  .goods .right span {
    line-height: 0.58rem;
    margin-left: 1.8rem;
  }

  .right p {
    line-height: 0.53rem;
    margin-left: 1.2rem;
  }

  .goods .right span {
    color: #009a61;
  }

  .bg-one {
    position: absolute;
    top: 0.48rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }

  .send {
    height: 1.52rem;
    width: 100%;
    border-bottom: 0.02rem solid #f3f3f3;
    font-size: 0.25rem;
    padding-top: 0.1rem;
    padding-left: 0.28rem;
    position: relative;
  }

  .one {
    margin-left: 2.3rem;
  }

  .on {
    margin-left: 4.4rem;
    line-height: 0.42rem;
  }

  .ono {
    margin-left: 3.6rem;
    line-height: 0.42rem;
  }

  .send p span {
    color: #009a61;
  }

  .bg-two {
    position: absolute;
    top: 0.48rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }

  .give {
    position: relative;
    height: 0.9rem;
    width: 100%;
    font-size: 0.25rem;
    border-bottom: 0.02rem solid #f3f3f3;
    padding-top: 0.18rem;
  }

  .give span:nth-child(1) {
    margin-left: 0.3rem;
  }

  .give span:nth-child(2) {
    margin-left: 5.0rem;
  }

  .bg-three {
    position: absolute;
    top: 0.18rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }

  .deliver {
    height: 1.1rem;
    width: 100%;
    border-bottom: 0.02rem solid #f3f3f3;
    padding-top: 0.35rem;
    position: relative;
    font-size: 0.25rem;
  }

  .deliver span:nth-child(1) {
    margin-left: 0.3rem;
  }

  .deliver span:nth-child(2) {
    margin-left: 4.2rem;
  }

  .bg-four {
    position: absolute;
    top: 0.38rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }

  .message {
    width: 100%;
    height: 0.9rem;
    border-bottom: 0.04rem solid #f3f3f3;
    padding-top: 0.26rem;
  }

  .message span {
    margin-left: 0.3rem;
    font-size: 0.25rem;
  }

  .message input {
    border: none;
    width: 60%;
    font-size: 0.25rem;
  }

  .app {
    height: 0.9rem;
    width: 100%;
    border-bottom: 0.02rem solid #f3f3f3;
    font-size: 0.25rem;
    padding-top: 0.3rem;
    position: relative;
  }

  .app span {
    margin-left: 0.3rem;
  }

  .app p {
    display: inline-block;
    margin-left: 3.8rem;
  }
  .app p span{
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }
  .bg-five {
    position: absolute;
    top: 0.38rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }
  .gift{
    width: 100%;
    height: 0.9rem;
    position: relative;
    font-size: 0.25rem;
    border-bottom: 0.04rem solid #f3f3f3;
    padding-top: 0.3rem;
  }
  .bg-six {
    position: absolute;
    top: 0.38rem;
    left: 6.9rem;
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
  }
  .gift span {
    margin-left: 0.3rem;
  }

  .gift span:nth-child(2) {
    margin-left: 4.7rem;
  }
  .money{
    width: 100%;
    height: 0.9rem;
    font-size: 0.25rem;
    padding-top: 0.3rem;
    border-bottom: 0.08rem solid #f3f3f3;
  }
  .money p{
    display: inline-block;
  }
  .money p{
    margin-left: 0.3rem;
  }
  .money p span{
    color: #009a61;
  }
  .money span:nth-child(2){
    margin-left: 4.3rem;
  }
  .end{
    height: 1.06rem;
    width: 100%;
    font-size: 0.25rem;
    padding-top: 0.2rem;
  }
  .end span:nth-child(1){
    margin-left: 0.3rem;
    line-height: 0.48rem;
  }
  .end span:nth-child(2){
  margin-left: 4.3rem;
  }
  .end p span:nth-child(2){
    margin-left: 5.1rem;
  }
  .finally{
    height: 1.03rem;
    width: 100%;
    padding-top: 0.38rem;
    position: relative;
  }
  .finally p span:nth-child(1){
   margin-left: 3rem;
    color:#009a61 ;
  }
  .finally p span:nth-child(2){
    color:#009a61 ;
  }
  .btn{
    position: absolute;
    width: 1.94rem;
    height: 1.02rem;
    background-color: #009a61;
    text-align: center;
    line-height: 1.02rem;
    right: 0rem;
    top: 0.1rem;
  }
  .btn span{
    color: white;
  }

</style>

