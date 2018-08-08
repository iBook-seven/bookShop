<template>
  <div id="rsetnew">
    <router-link to="/RNoteGet"><span class="iconfont header">&#xe606;</span></router-link>
    <form action="#" method="post" name="form">
      <p class="r-write">用户名</p>
      <div class="r-user">
        <span class="iconfont">&#xe658;</span>
        <input type="text" name="r-user-write" placeholder="请输入用户名"/>
        <span class="iconfont r-password-open">&#xe901;</span>
      </div>
      <p class="r-write">设置密码</p>
      <div class="r-password">
        <span class="iconfont">&#xe604;</span>
        <input type="text" name="r-password" placeholder="请输入密码"/>
        <span class="iconfont r-spassword-open">&#xe901;</span>
      </div>
      <router-link to="/Login"><a href="" class="setingnpwd">完成</a></router-link>
    </form>
    <p class="set-about">为保障您账户安全，请不要设置与邮箱密码相同的账户登录密码，谨防诈骗</p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {

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
  .setingnpwd {  width:80%;
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
