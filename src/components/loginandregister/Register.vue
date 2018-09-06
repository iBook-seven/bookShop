<template>
  <div id="register">
    <router-link to="/Login"><span class="iconfont header">&#xe606;</span></router-link>
    <p class="register-p">注册新用户</p>
    <form method="post" name="form" action="http://5tk2th.natappfree.cc/user/sendMessage_phone.action">
      <div class="register-tel">
        <span class="iconfont">&#xe613;</span>
        <input type="text" name="u_phone" placeholder="请输入手机号"  v-model="u_phone" @blur="GetUserP"/>
      </div>
      <input type="button" value="获取验证码" class="register-geting" @click="Rgetn" />
    </form>
    <p v-show="phoneAlert">请输入正确的手机号</p>
    <p>{{hello}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        phoneAlert:false,
        u_phone:'',
        hello:''
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
          data:{u_phone:this.u_phone},
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
              //that.hello=hell.message;
            }
          },
          error: function () {
          }
        })
      },
      Rgetn:function(){
        var that=this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/sendMessage_phone.action',
          data:{u_phone:this.u_phone},
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true   //前端设置是否带cookie
          },
          crossDomain: true,
          success: function (list) {
            var hel=JSON.parse(JSON.stringify(list));
            if(hel.message=="success"){
              that.$router.push({path:'/RNoteGet'});
            }else{
              that.hello = hel.message;//弹出的字段
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

  #register {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:0.2rem;
    top:0.1rem;
    font-size: 0.3rem;}
  .register-p {
    width:80%;
    font-size: 0.36rem;
    font-weight: bold;
    margin:1.47rem auto 0.30rem auto;
    text-align: left;
  }
  form input {
    border:none;
    line-height:1rem;
    margin-left: 0.3rem;
    font-size: 0.3rem;
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
  .register-geting {
    display:block;
    width:80%;
    height:0.9rem;
    margin:0.8rem auto;
    text-align:center;
    line-height:0.9rem;
    font-size:0.34rem;
    background-color:#f3344a;
    color:#ffffff;
    border-radius:0.05rem;}
</style>
