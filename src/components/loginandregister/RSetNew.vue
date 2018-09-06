<template>
  <div id="rsetnew">
    <router-link to="/RNoteGet"><span class="iconfont header">&#xe606;</span></router-link>
    <form action="http://5tk2th.natappfree.cc/user/register.action" method="post" name="form">
      <p class="r-write">用户名</p>
      <div class="r-user">
        <span class="iconfont">&#xe658;</span>
        <input type="text" name="u_name" placeholder="请输入用户名" @blur="Nameu" v-model="u_name"/>
        <span class="iconfont r-password-open">&#xe901;</span>
      </div>
      <p class="r-write">设置密码</p>
      <div class="r-password">
        <span class="iconfont">&#xe604;</span>
        <input type="text" name="u_password" placeholder="请输入密码" @blur="Paswo" v-model="u_password"/>
        <span class="iconfont r-spassword-open">&#xe901;</span>
      </div>
      <router-link to="/Login"><input type="button" class="setingnpwd" value="完成" @click="Fin"/></router-link>
    </form>
    <p class="goodpsd" v-show="goodpsda">密码不能含有非法字符，长度在4-10之间</p>
    <p class="set-about">为保障您账户安全，请不要设置与邮箱密码相同的账户登录密码，谨防诈骗</p>
    <p>{{hello}}</p>
  </div>
</template>

<script>
  export default {
    name: 'RSetNew',
    data () {
      return {
        goodpsda: false,
        u_name:'',
        u_password:'',
        hello:''
      }
    },
    methods:{
      Paswo:function(){
        var item=$("input")[1];
        var reg=/^[a-zA-Z0-9]{4,10}$/;
        if(reg.test(item)==false){
          this.goodpsda=!this.goodpsda;
        }else {
          this.goodpsda = false;
        }
      },
     Nameu :function(){
      var that=this;
      $.ajax({
        url: 'http://h5h5h5.free.idcfengye.com/user/queryByName.action',
        data:{u_name:this.u_name},
        type: 'post',
        dataType: 'json',
        xhrFields: {
          withCredentials: true   //前端设置是否带cookie
        },
        crossDomain: true,
        success: function (list) {
          var hell=JSON.parse(JSON.stringify(list));
          if(hell.messages=="success"){
          }else{
            that.hello="用户名已存在，请重新输入";
          }
        },
        error: function () {
        }
      })
    },
      Fin :function(){
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/register.action',
          data:{u_name:this.u_name,u_password:this.u_password},
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true   //前端设置是否带cookie
          },
          crossDomain: true,
          success: function (list) {
            var helll=JSON.parse(JSON.stringify(list));
            if(helll.message=="success"){
              console.log(helll.messages);
              that.$router.push({path:'/Login'});
            }else{
              that.hello = helll.message;
            }
          },
          error: function () {
            that.hello="验证码输入错误";
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #rsetnew {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:0.2rem;
    top:0.1rem;
    font-size: 0.3rem;}
  .goodpsd{
    width:80%;
    margin:0.2rem auto;
    font-size: 0.4rem;
    color:red;
  }
  .r-write {
    width:80%;
    font-size: 0.36rem;
    font-weight: bold;
    margin:1.47rem auto 0.30rem auto;
    text-align: left;
  }
  form input {
    border:none;
    font-size: 0.22rem;
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
    justify-content: space-between;
    padding-top:0.3rem;
  }
  .setingnpwd {
    display: block;
    width:80%;
    height:0.9rem;
    margin:0.8rem auto;
    text-align:center;
    line-height:0.9rem;
    font-size:0.34rem;
    background-color:#f3344a;
    color:#ffffff;
    border-radius:0.05rem;}
  .set-about {
    width:80%;
    line-height:0.8rem;
    font-size:0.2rem;
    margin:0.2rem auto;
    color:#999;
  }
</style>
