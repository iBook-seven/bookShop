<template>
  <div class="footer">
    <router-link to="/home" class="icon">&#xe751;</router-link>
    <router-link to="/sort" class="icon">&#xe754;</router-link>
    <router-link to="/goods" class="icon">&#xe73e;</router-link>
    <router-link to="/person" class="icon">&#xe75e;</router-link>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    position:fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e6e6e6;
    padding: 0.3rem 0;
    background-color: #f9f9f9;
  }
  .icon{
    font-family: 'iconfont';
    font-size: 0.5rem;
    color: #65646c;
  }
  .router-link-active{
    color: forestgreen;
  }
</style>
