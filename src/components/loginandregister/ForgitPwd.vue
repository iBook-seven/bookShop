<template>
  <div id="forgitpwd">
    <router-link to="/Login"><span class="iconfont header">&#xe606;</span></router-link>
    <p class="f-write">请输入要找回的账号</p>
    <form action="http://ybt.free.ngrok.cc/user/shiroLogin.action" method="post" name="form">
      <div class="note-tel">
        <span class="iconfont">&#xe613;</span>
        <input type="text" name="message" placeholder="请输入手机号" @blur="GetUserP" v-model="message"/>
      </div>
      <input class="f-geting" @click="UseT" value="获取验证码"/>
    </form>
    <p v-show="phoneAlert" class="phone">请输入正确的邮箱或手机号</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        phoneAlert:false,
        message:''
      }
    },
    methods:{
      GetUserP:function(){
        var emph=$("input")[0].value;
        var regMobile=/^1\d{10}$/;
        var that=this;
        if(regMobile.test(emph)==false){
          this.phoneAlert=!this.phoneAlert;
        }
        this.phoneAlert=this.phoneAlert;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/queryByPhone.action',
          data:{message:this.message},
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true   //前端设置是否带cookie
          },
          crossDomain: true,
          success: function (list) {
            var hell=JSON.parse(JSON.stringify(list));
            if(hell.message=="success"){
            }else{
              that.hello=hell.message;
            }
          },
          error: function () {
          }
        })
      },
      UseT:function(){
        var that=this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/sendMessage_phone.action',
          data:{u_phone:this.message},
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true   //前端设置是否带cookie
          },
          crossDomain: true,
          success: function (list) {
            var hel=JSON.parse(JSON.stringify(list));
            if(hel="failure"){
              that.$router.push({path:'/FNoteGet'});
            }else{
              that.hello = hel;
            }
          },
          error: function () {

          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #forgitpwd {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .phone {
    width:80%;
    margin:0.2rem auto;
    font-size: 0.4rem;
    color:red;
  }
  .header { position:absolute;
    left:0.2rem;
    top:0.1rem;
    font-size: 0.3rem;}
  .f-write {
    width:80%;
    font-size: 0.36rem;
    font-weight: bold;
    margin:1.47rem auto 0.30rem auto;
    text-align: left;
  }
  form input {
    border:none;
    margin-left: 0.3rem;
    font-size: 0.3rem;
    line-height:1rem;
  }
  form div {  width:80%;
    height:1.3rem;
    line-height:1.3rem;
    font-size:0.50rem;
    border-bottom:0.01rem solid #ccc;
    margin:0 auto;
    text-align: left;
    display:flex;
    flex-direction: row;
    padding-top:0.3rem;
  }
  .f-geting {  width:80%;
    display: block;
    height:0.9rem;
    margin:0.8rem auto;
    text-align:center;
    line-height:0.9rem;
    font-size:0.34rem;
    background-color:#f3344a;
    color:#ffffff;
    border-radius:0.05rem;}
</style>
