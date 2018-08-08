<template>
    <div class="cart">
    <ul>
      <li v-for="m in cat">
        <div class="bg">
          <input type="checkbox">
          <img :src="m.url" alt="">
        </div>
        <div class="write">
          <p>{{m.name}}</p>
          <p><span>{{m.pri}}</span><span>{{m.priold}}</span></p>
          <p>x{{m.num}}</p>
        </div>
        <div class="del"><span>&#xe649;</span></div>
      </li>
    </ul>
      <div class="fu">
        <input type="checkbox">
        <span>全选</span>
        <p>合计：<span>￥0.00</span></p>
        <router-link to="/pay" tag="div" class="h">
            结算
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        data(){
          return{
           cat:[{
             url:require('@/assets/img/book1.jpg'),
             name:'看见',
             pri:"￥28",
             priold:'45',
             num:'1'
           },{
             url:require('@/assets/img/book1.jpg'),
             name:'看见',
             pri:"￥28",
             priold:'45',
             num:'1'
           },{
             url:require('@/assets/img/book1.jpg'),
             name:'看见',
             pri:"￥28",
             priold:'45',
             num:'1'
           }]
          }
        }
    }
</script>

<style scoped>
  ul{
    width: 100%;
    font-size: 0.25rem;
  }
  li{
    display: flex;
    border-bottom: 0.04rem solid #f3f3f3;
  }
  .bg{
    margin-left: 0.3rem;
  }
  .bg img{
    display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
  }
  .write{
    display: inline-block;
    width: 60%;
    padding-top: 0.2rem;
  }
  .write p{
    line-height: 0.5rem;
  }
  .write p span:nth-child(1){
    color: #009a61;
  }
  .write p span:nth-child(2){
    margin-left: 0.2rem;
    text-decoration: line-through;
  }
  .del{
    position: relative;
  }
  .del span{
    font-size: 0.32rem;
    color: #009a61;
    font-family: iconfont;
    position: absolute;
    top: 1rem;
    right: 0.2rem;
  }
  .cart{

  }
  .fu{
    width: 100%;
    height: 1rem;
   border-bottom: 0.02rem solid #f3f3f3;
    display: flex;
  }
  .fu span{
    line-height: 1rem;
  }
  .fu input{
    margin-left: 0.3rem;
    margin-top: 0.35rem;
  }
  .fu p{
    color: #009a61;
    margin-left: 1.5rem;
  }
.h{
  width: 2.0rem;
  height: 1rem;
  background-color: #009a61;
  color: white;
  text-align: center;
  line-height: 1rem;
  margin-left: 0.9rem;
}
.h p{
  color: white;
}
</style>
