<template>
  <div class="mail">
  <div class="header1">
    <router-link class="st1" to="/setting">&#xe602;</router-link>
    <h2>邮箱</h2>
  </div>
    <form action="">
      <input type="text" class="oi" >
      <input type="submit" class="oi" value="提交" >
    </form>
  </div>
</template>
<script>
    export default {
        name: "mail"
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
  .oi{
    width:100%;
    height: 1rem;
    background-color: white;
    border:1px #009a61 solid;
    margin:0.1rem auto;
    font-size: 0.3rem;
    border-radius: 0.3rem;
  }
</style>
