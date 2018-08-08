<template>
  <div class="img">
    <div class="header1">
      <router-link class="st1" to="/setting">&#xe602;</router-link>
      <h2>性别</h2>
    </div>
    <div class="op">男</div>
    <div class="op">女</div>
    <div class="yt1">保存</div>
  </div>
</template>

<script>
  export default {
    name: "img"
  }
</script>

<style scoped>
  .img{
    position: relative;
    bottom: 0;


  }
  .header1{

    width:100%;
    height:1.5rem;
    background-color: white;
    border-bottom: 0.1rem #f2f2f2 solid;
    display: flex;
    justify-content: flex-start;
    padding:0.5rem;
  }
  .st1{
    font-family:iconfont;
    font-size:0.6rem;
    position: absolute;
    left:0.3rem;

  }
  h2{
    margin: 0 auto;
  }
.op{
  width:100%;
  height: 0.6rem;
  background: linear-gradient(to right,#009a61,lightgreen);
  color: #fff;
  border: 3px #9f9494  solid;
  border-radius: 0.3rem;
  font-size: 0.3rem;
  float: left;
/*  opacity: 0.7;*/
  padding-top: 0.1rem;
  margin-bottom: 0.1rem;
  padding-left:3.8rem;
}
  .yt1{
    float: left;
    width:100%;
    height:0.6rem;
    color:#009a61;
    background-color: #f3f3f3;
    border: 1px #009a61  solid;
    font-size: 0.3rem;
    border-radius: 3rem;
    padding-top: 0.1rem;
    padding-left:3.7rem;

  }
</style>
