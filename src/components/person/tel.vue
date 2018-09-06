<template>
<div class="tel">
  <div class="header1">
    <router-link class="st1" to="/setting">&#xe602;</router-link>
    <h2>电话号码</h2>
  </div>

  <input type="text" class="lp" v-model="phoneNum" @blur="fui">
    <button class="lp1" @click="ttj">保存</button>


</div>
</template>

<script>
    export default {
      name: "tel",
      data(){
        return{
          phoneNum: this.$route.query.num,

        }
      },

      methods: {
        fui(){
          var ePattern = /^1[34578]\d{9}$/;
          if (this.phoneNum == "" || !ePattern.test(this.phoneNum)){
            alert("出错");
         }
        },
        ttj(){
          var that = this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/user/updateMyInfo.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            data:{
              userInfo:"u_phone:"+this.phoneNum,
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
  .lp{
    width:100%;
    height:1rem;
    font-size: 0.5rem;
    border:1px #009a61 solid;
    margin-bottom: 0.3rem;
  }
  .lp1{
    width:100%;
    height:1rem;
    background-color: #fff;
    padding-top: 0.3rem;
    border:1px #009a61 solid;
    border-radius: 3rem;
  }
</style>
