<template>
  <div id="login">
    <router-link to="/person"><span class="iconfont header">&#xe606;</span></router-link><!--跳转至个人中心-->
    <div class="login-des">
      <router-link to="/Login"><a href="" class="login-login">账号密码登录</a></router-link>
      <router-link to="/Note"><a href="">短信快捷登陆</a></router-link>
    </div>
    <form action="http://ybt.free.ngrok.cc/user/shiroLogin.action" method="post" name="form">
      <div class="login-user">
        <span class="iconfont">&#xe658;</span>
        <input type="text" name="u_name" placeholder="请输入手机号" @blur="GetUserP" @focus="ChaClo" v-model="u_name"/>
        <span class="iconfont login-user-clear">&#xe605;</span>
        <span class="iconfont login-user-more">&#xe695;</span>
      </div>
      <div class="login-password">
        <span class="iconfont">&#xe604;</span>
        <input type="password" name="u_password" placeholder="请输入密码" v-model="u_password"/>
        <span class="iconfont login-password-close">&#xe625;</span>
        <span class="iconfont login-password-open">&#xe901;</span>
      </div>
      <router-link to=""><input type="submit" class="loaging" value="登录" @click="GetLogin"/></router-link><!--成功则链接主页-->
    </form>
    <div class="login-link">
      <router-link to="/ForgitPwd"><a href="" class="forget-parseword">忘记密码？</a></router-link><!--点击链接忘记密码-->
      <router-link to="/Register"><a href="" class="now-enroll">立即注册</a></router-link><!--点击链接注册页-->
    </div>
    <p v-show="phoneAlert">请输入正确的手机号</p>
    <p>{{hello}}</p>
    <div class="login-other">
      <span class="iconfont login-other-qq">&#xe65e;</span>
      <span class="iconfont login-other-zfb">&#xe64a;</span>
      <span class="iconfont login-other-wb">&#xe73c;</span>
      <span class="iconfont login-other-wx">&#xe61b;</span>
    </div>
    <a class="safety-problem">安全问题</a>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        phoneAlert:false,
        emailAlert:false,
        u_name:'',
        u_password:'',
        hello:'',
      }
    },
    methods: {
      show() {
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/shiroLogin.action',
          data:{u_name:this.u_name,u_password:this.u_password},
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true   //前端设置是否带cookie
          },
          crossDomain: true,
          success: function (list) {
            var hel=JSON.parse(JSON.stringify(list));
            console.log(list);
            if(hel.message=="success"){
              console.log(list);
              that.$router.push({path: '/person',query:{u_name:that.u_name}});
            }else{
              that.hello=hel.message;
            }
          },
          error: function () {
            // this.hello="用户名密码输入错误！";
          }
        })
      },
      GetUserP:function(){
        var emph=$("input")[0].value;
        var regMobile=/^1\d{10}$/;
        var regEm=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
        if(regEm.test(emph)==false && regMobile.test(emph)==false){
          this.phoneAlert=!this.phoneAlert;
        }
        this.phoneAlert=this.phoneAlert;
      },
      ChaClo:function(){
        $("input")[2].style.backgroundColor='#f3344a';
      },
      GetLogin:function(){
        this.show();
      }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #login {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
    #login p { width:80%;
      margin:0.2rem auto;
    font-size: 0.4rem;
    color:red;}
  .header { position:absolute;
    left:0.2rem;
    top:0.1rem;
    font-size: 0.3rem;}
  .login-des {  width:80%;
    margin:0.43rem auto 0 auto;
    height:1.22rem;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom:1px solid #ccc;}
  .login-des a {  display:block;
    height:1.22rem;
    line-height:1.22rem;
    font-size:0.38rem;
    color:#3c3c3c;}
  .login-login {
    font-weight: bold;
    border-bottom:0.02rem solid #000000;
    color:#000000;
  }
  form input {
    border:none;
    font-size: 0.22rem;
    line-height:1rem;
  }
  form input:focus{
    outline: none;
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
    justify-content: space-between;
    padding-top:0.3rem;
  }
  .loaging {
    display:block;
    width:80%;
    height:0.9rem;
    margin:0.36rem auto;
    text-align:center;
    line-height:0.9rem;
    font-size:0.34rem;
    background-color:#f7a9b2;
    color:#ffffff;
    border-radius:0.05rem;}
  .login-link { display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:80%;
    margin:0 auto;
    font-size: 0.24rem;
  }
  .login-link a { color:#f3344a;}
  .login-other {
    position:absolute;
    left:10%;
    bottom:2rem;
    width:80%;
    margin:0 auto;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    font-size:0.8rem;
  }

  .login-other-qq { color:#98d4f7;}
  .login-other-zfb { color:#a3baef;}
  .login-other-wb { color:#ff999b;}
  .login-other-wx { color:#9adca3;}
  .safety-problem {
    font-size: 0.3rem;
    position:absolute;
    left:0.44rem;
    bottom:0.70rem;}
</style>
