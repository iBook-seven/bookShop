<template>
    <div class="sign">
      <div class="header1">
        <router-link class="st1" to="/setting">&#xe602;</router-link>
        <h2>个性签名</h2>
      </div>
      <textarea  id="tt" cols="30" rows="10"  v-model="ui" @blur="judge">{{ui}}</textarea>
      <button type="button" class="yt1" @click="judge" >保存</button>
    </div>
</template>

<script>
    export default {
        name: "sign",

      data(){

        return{

         ui: this.$route.query.sig,
          /*   {
             name:'cl',
             sex:'女',
             birthday:'0304',
             tel:'12345678901'
           }*/

        }
      },


      methods: {
        judge(){
          var that = this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/user/updateMyInfo.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            data:{
              userInfo:"u_idiograph:"+this.ui,
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

        },
      },


    }
</script>

<style scoped>
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
  .yt1{
    float: left;
    width:100%;
    height:0.8rem;
    color:#009a61;
    background-color: #f3f3f3;
    border: 1px #009a61  solid;
    font-size: 0.3rem;
    border-radius: 3rem;
    padding-top: 0.2rem;
    padding-left:3.6rem;

  }
  #tt{
    width: 100%;
    height:3rem;
    background:linear-gradient(to right,lightgreen,lightcyan);
    color:black;
    border-radius: 0.3rem;
    border:0.06rem #009a61 solid;
    font-size: 0.5rem;
  }
</style>
