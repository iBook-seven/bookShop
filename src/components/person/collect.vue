<template>
  <ul class="collect">
    <div class="header1">
      <router-link class="st1" to="/person">&#xe602;</router-link>
      <h2 >收藏商品</h2>
    </div>
    <!--<form action="" >-->

    <li class="part1 clearfix" v-for="(u,index) in jpgList">
      <div class="left">
        <!--<span>{{index+1}}</span>-->
        <img :src="u.b_img" width="100" height="100"/>
      </div>
      <div class="right">
        <p class="ido">{{u.b_name}}</p>
      </div>
      <div class="lo">
        <h5>现价${{u.b_price*u.b_discountPrice*0.1}}</h5>
        <h6>原价${{u.b_price}}</h6>
        <span class="deli" @click="del">&#xe6b4;</span>
      </div>
      <div class="ko">
        <div class="po">总计钱数{{u.b_total-u.b_saleNum}}</div>

      </div>
    </li>
    <!--</form>-->
  </ul>

</template>

<script>
  export default {
    name: "collect",

    data() {
      return {
          jpgList:[],

       /* jpgList: [{
          "b_name": "追风筝的人",
          "b_discountPrice": 5.0,
          "b_price": 36.0,
          "b_total": 3000,
          "b_description": "为你，千千万万遍！快乐大本营高圆圆感动推荐，朗读者张一山深情朗读，窦靖童创作灵感的来源，奥巴马送给女儿的新年礼物",
          "b_id": "0917d2bf-5131-4f9f-8b97-9a269df52f60",
          "b_img": "http://pcgbf3gld.bkt.clouddn.com/book11.jpg",
          "b_saleNum": 25,

        },
          {
            "b_name": "现代操作系统(原书第3版)",
            "b_discountPrice": 7.58,
            "b_price": 89.0,
            "b_total": 2000,
            "b_description": "操作系统经典教材全新升级，与时俱进呈现当代操作系统的基础理论与研究动态",
            "b_id": "24c8681f-cf92-415b-aa90-a2d32341f70a",
            "b_img": "http://pcgbf3gld.bkt.clouddn.com/book16.jpg",
            "b_saleNum": 21,

          }]
*/
      }
    },
    mounted: function () {
      this.show();
    },
    methods: {
      del(index){
        var that = this;
        var listName = this.jpgList.splice(index,1)[0].b_id;
        // console.log(listName);
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/collection/delCollection.action',
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true    // 前端设置是否带cookie
          },
          data:{
            b_id: listName
          },
          crossDomain: true,
        })
      },
      show() {
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/collection/displayCollection.action',
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true    // 前端设置是否带cookie
          },
          crossDomain: true,
          success: function (goods) {
            console.log(goods);
            that.jpgList = JSON.parse(JSON.stringify(goods));
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
  .ido{
    padding-top:0.5rem;
    width: 2.8rem;
    overflow: hidden;
    height:1rem;
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .deli{
    margin-top: 0.2rem;
    font-family: iconfont;
    font-size: 0.5rem;
    color:#009a61;
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

  .part1 img{
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    border: 0.1rem solid #f5f5f5;
    /*padding: 20px;*/
  }
  .star span,.span1{
    font-family: 'iconfont';
    font-size: 0.1rem;
  }


  .right{
    display: flex;
    flex-grow: 2;

    float: left;
    position: relative;

    padding-top:0.1rem;
    padding-bottom: 0.1rem;

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

  .po ,.del, .ko{

    float: right;

    font-size: 0.3rem;

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
