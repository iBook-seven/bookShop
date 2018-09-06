<template>
  <div class="history">
  <div class="header1">
    <router-link class="st1" to="/person">&#xe602;</router-link>
    <h2>浏览历史</h2>
    <button type="button" class="ci" @click="dlt">&#xe6b4;</button>
  </div>
  <ul>
    <li class="part1 clearfix" v-for="(u,index) in jpgList">
      <div class="left">
        <!--<span>{{index+1}}</span>-->
        <img :src="u.b_img" width="100" height="100"/>
      </div>
      <div class="right">
        <p class="ido">{{u.b_name}}</p>
      </div>
      <div class="lo">
        <h5>现价:{{$(u.b_price*u.b_discountPrice*0.1)}}</h5>
        <h6>原价:{{$(u.b_price)}}</h6>
      </div>
    </li>
  </ul>
  </div>
</template>

<script>
  export default {
    name: "history",
    data(){
      return{
        jpgList:[],
      }
    },
    mounted(){
   /*   this.show();*/
    },
    methods:{
      show(){
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/bookInformation/displayBrowseHistory.action',
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
      },
      dlt(){
        var that = this;
        this.jpgList.splice(this.jpgList-1)
        // console.log(listName);
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/bookInformation/clearBrowseHistory.action',
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true    // 前端设置是否带cookie
          },
          crossDomain: true,
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
  .ko{
    width:100%;
    height: 0.6rem;
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
  .ci{
    width:1.5rem;
    height: 0.7rem;
    background-color: #fff;
    font-family: 'iconfont';
    font-size:0.5rem;
    padding-bottom:1px;
    border: none;
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
            float: left;
            position: relative;

            padding-top:0.1rem;
            padding-bottom: 0.1rem;

    display: flex;
    flex-grow: 2;


  }
  .lo{
    margin-top: 1rem;
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

  .po , .ko{

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
