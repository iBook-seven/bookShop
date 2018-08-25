<template>
  <div class="app">

    <mt-header fixed title="顶部"></mt-header>
    <h1>手机</h1>

    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        我的
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style   scoped>
.app{
padding-top:50px;
}
</style>
