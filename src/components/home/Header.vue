<template>
  <div class="search">
    <span class="icon-chazhao" @click="find">&#xe617;</span>
    <input type="search" name="search" v-model="key"/>
  </div>
</template>

<script>
    export default {
        name: "Header",
      data(){
        return{
          key: '',
        }
      },
      methods:{
        find(){
          this.$router.push({path:'/Search',query:{word: this.key}});
        }
      }
    }
</script>

<style scoped>
  .search{
    width: 80%;
    height: 0.6rem;
    background-color: #f1f2f6;
    border-radius: 0.3rem;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    margin: 0.2rem auto;
  }
  .icon-chazhao{
    font-family: "iconfont";
    font-size: 0.38rem;
    color: #999;
    margin-right: 0.15rem;
  }
  .search input{
    width: 80%;
    border: none;
    line-height: 0.6rem;
    background-color: transparent;
  }
  .search input:focus{
    outline: none;
  }
</style>
