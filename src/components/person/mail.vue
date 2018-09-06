<template>
  <div class="mail">
  <div class="header1">
    <router-link class="st1" to="/setting">&#xe602;</router-link>
    <h2>邮箱</h2>
  </div>

      <input type="email" class="oi" v-model="u_Mil" placeholder="请输入您的邮箱">
      <button type="button" class="sub" value="提交" @click="tj">保存</button>

  </div>
</template>
<script>
    export default {
        name: "mail",
      data(){
          return{
            u_Mil: this.$route.query.num,
          }
      },
      methods:{
          tj(){
            var that = this;
            $.ajax({
              url: 'http://h5h5h5.free.idcfengye.com/user/updateMyInfo.action',
              type: 'post',
              dataType: 'json',
              xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            data:{
              userInfo:"u_email:"+this.Mil,
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
      }

    }
</script>

<style scoped>
  .mail{
    height: 13.34rem;
    background-color: #f5f5f5;
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
  .oi{
    width:100%;
    height: 0.9rem;
    border: none;
    background-color: white;
    margin:0.15rem auto;
    font-size: 0.25rem;
    color: #808080;
    padding: 0 0.5rem;
  }
  .oi:focus{
    outline: none;
  }
  .sub{
    border: none;
    width: 1.5rem;
    height: 0.8rem;
    line-height: 0.8rem;
    color: #009a61;
    font-size: 0.3rem;
    display: block;
    margin: 0.35rem auto;
    background-color: #f5f5f5;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }
</style>
