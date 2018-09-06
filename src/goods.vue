<template>
 <div class="goods">
   <router-view/>
   <div class="a-header">
     <p>购物车</p>
   </div>
   <div class="home">
     <p>图书自营</p>
   </div>
   <cart></cart>
   <app-footer></app-footer>
   <router-view/>
 </div>
</template>

<script>

 import cart from './components/shopCart/cart'
 import Footer from './components/home/Footer'
    export default {
      name: "goods",
      components:{
        "cart":cart,
        "app-footer": Footer
      },
      data:{
        return:{

        }
      },

    }
</script>
<style scoped>
.a-header{
  width: 100%;
  height: 0.95rem;
  font-size: 0.25rem;
}
  .a-header p{
    display: inline-block;
    line-height: 0.95rem;
    margin-left: 3.0rem;
    font-size: 0.5rem;
  }
  .a-header span{
    margin-left: 1.7rem;
  }
  .home{
    height: 0.8rem;
    width: 100%;
    line-height: 0.8rem;
    background-color: #fafafa;
  }
  .home p{
    margin-left: 0.8rem;
  }
</style>
