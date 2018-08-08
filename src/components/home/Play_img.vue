<template>
  <div class="container">
    <ul class="wrap">
      <li><img src="../../assets/img/banner3.jpg"></li>
      <li><img src="../../assets/img/banner2.jpg"></li>
      <li><img src="../../assets/img/banner1.jpg"></li>
      <li><img src="../../assets/img/banner3.jpg"></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Play_img"
    }
</script>

<style scoped>
  .container{
    height: 1.9rem;
    position: relative;
    overflow: hidden;
    margin-bottom: 0.2rem;
  }
  .container .wrap{
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
  .container .wrap img{
    display: block;
    float: left;
    width: 100%;
    height: 1.9rem;
  }
</style>
