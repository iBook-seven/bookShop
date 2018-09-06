<template>
  <div id="setnew">
    <router-link to="/#"><span class="iconfont header">&#xe606;</span></router-link>>
    <p class="s-write">设置新密码</p>
    <form action="#" method="post" name="form">
      <div class="s-password">
        <span class="iconfont">&#xe604;</span>
        <input type="text" name="u_password" placeholder="请输入新密码" @blur="Paswo" v-model="u_password"/>
        <span class="iconfont s-password-open">&#xe901;</span>
      </div>
      <input type="button" @click="Fnewp" value="完成" class="setingnpwd"/>
    </form>
    <p>{{hello}}</p>
    <p class="goodpsd" v-show="goodpsda">密码不能含有非法字符，长度在4-10之间</p>
    <p class="set-about">为保障您账户安全，请不要设置与邮箱密码相同的账户登录密码，谨防诈骗</p>
  </div>
</template>

<script>
  export default {
    name: 'SetNew',
    data () {
      return {
        goodpsda: false,
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
        }else{
          this.goodpsda=false;
        }
      },
      Fnewp :function(){
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/updatePassword.action',
          data:{u_password:this.u_password},
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
              // that.$router.push({path:'/home'});
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

  #setnew {  display: flex;
    flex-direction:column;
    justify-content:center;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header { position:absolute;
    left:0.2rem;
    top:0.1rem;}
  .s-write {
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
