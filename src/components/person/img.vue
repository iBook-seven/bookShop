<template>
    <div class="img">
      <div class="header1">
        <router-link class="st1" to="/setting">&#xe602;</router-link>
        <h2>头像</h2>
      </div>
      <form action="post">
        <input type="file" class="yt" value="【图片】">
        <button type="submit" class="yt">确认上传</button>
      </form>

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
  .yt{
    padding-left: 3rem;

   }
    .yt{
      /*padding-top:0.6rem;
      color: #009a61;
      font-size: 0.5rem;
      width: 100%;
      background-color: white;
      height: 1.5rem;
      border:0.1rem #ccc solid;*/
      width:100%;
      height: 1rem;
      background-color: #fff;
      color: #009a61;
      border: 1px #009a61  solid;
      border-radius: 0.2rem;
      font-size: 0.3rem;
      float: left;
      padding-top: 0.1rem;
      margin-bottom: 0.1rem;

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
</style>
