<template>
<div class="tel">
  <div class="header1">
    <router-link class="st1" to="/setting">&#xe602;</router-link>
    <h2>电话号码</h2>
  </div>
  <form action="">
  <input type="text" class="lp">
    <input type="submit" value="保存" class="lp1">
  </form>
</div>
</template>

<script>
    export default {
        name: "tel"
    }
</script>

<style scoped>
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
  .lp{
    width:100%;
    height:1rem;
    font-size: 0.5rem;
    border:1px #009a61 solid;
    margin-bottom: 0.3rem;
  }
  .lp1{
    width:100%;
    height:1rem;
    background-color: #fff;
    padding-top: 0.3rem;
    border:1px #009a61 solid;
    border-radius: 3rem;
  }
</style>
