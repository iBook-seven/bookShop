<template>
  <ul class="part">
    <li class="part1 clearfix" v-for="(u,index) in ssg">
      <div class="left">
        <img :src="u.url" width="100" height="100"/>
      </div>
      <div class="right">
        <p>{{u.b_name}}</p>
      </div>
      <div class="lo">
        <h5>{{u.b_price*u.b_discountPrice}}</h5>
        <h6>{{u.b_price}}</h6>
      </div>
      <div class="ko">
        <div class="po">总计钱数{{u.number*u.b_price*u.b_discountPrice}}</div>
        <br>
        <div class="del">取消订单</div>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "goods",
      data(){
        return{
          ssg: [],
        }
      },
      methods:{
        tj(){
          var that = this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/showOrder/showAllOrder.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              console.log(goods);
              that.ssg = JSON.parse(JSON.stringify(goods));
            },
            error: function () {
              console.log("出错");
            }
          })
        }
      },
    }
</script>

<style scoped>
  .ko{
    width:100%;
    height: 0.6rem;
  }
  .part{
    background-color: #fff;
  }
  .part1{
    display: block;
    background-color: white;
    border-top:0.1rem #eaeaea solid;
    border-bottom: 0.1rem #ccc solid;
    position: relative;
    float: left;
  }
  .left>span:nth-child(1){
    background-color: forestgreen;
    color: white;
    padding:0 0.1rem;
    position: absolute;
    left: 0;
    top: 0;
    width: 0.2rem;
  }
  .left{
    float: left;
    position: relative;
    height: 2.5rem;
    margin-right: 1.5rem;
  }
  .right{
    float: left;
    position: relative;
    line-height: 0.2rem;
    padding-top:0.1rem;
    padding-bottom: 0.1rem;
  }
  .part1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 0.1rem solid #f5f5f5;
    /*padding: 20px;*/
  }
  .star span{
    font-family: 'iconfont';
    font-size: 0.1rem;
  }


.right{
  display: flex;
flex-grow: 2;

  margin:1rem auto;
}
.lo{
  margin-top: 0.5rem;
   float: right;
  display: flex;
 flex-direction: column;
  margin-right: 0.5rem;
}h5{
    font-size: 0.4rem;
    margin-bottom: 0.3rem;
 }
  h6{
    text-decoration: line-through;
    color:#ccc;
    font-size: 0.4rem;
  }
  .ko{
    height: 0.8rem;
    position: relative;
    display: flex;
    justify-content: space-around;
  }
 .po ,.del, .ko{

    float: right;
/*   margin-right: rem;*/
   font-size: 0.3rem;

  }
  .del{

    height:0.4rem;
    padding:0.05rem;
    border-radius: 3px;
    margin-top: 0.1rem;
    background-color: #009a61;
    color:#fff;

  }



</style>
