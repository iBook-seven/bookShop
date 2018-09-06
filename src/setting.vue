<template>
  <div class="setting">
   <div class="header1">
     <router-link class="st1" to="/person">&#xe602;</router-link>
     <h2>设置</h2>
   </div>
   <div class="content3" >
    <div class="cl">
      <div> <span class="ic">&#xe616;</span><span class="st">头像</span></div>
      <div class="it"><span class="iner"></span>
        <router-link to="img"><span class="ic1"> &#xe6e0;</span></router-link></div>
    </div>
   </div>

    <div class="content3" >

      <div class="cl">
        <div> <span class="ic">&#xe608;</span><span class="st">昵称</span></div>
        <div><span class="pi">{{ssg.u_name}}</span></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
        <div> <span class="ic">&#xe65b;</span><span class="st">性别</span></div>
        <div><span class="pi">{{ssg.u_sex}}
        </span> <router-link :to="{path: '/sex' , query:{Se: ssg.u_sex}}"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
          <div> <span class="ic">&#xe689;</span><span class="st">生日</span></div>
        <div><span class="pi">{{ssg.u_birthday}}
        </span><router-link :to="{path: '/birthday' , query:{bir: ssg.u_birthday}}"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>
    <div class="content3">
      <div class="cl">
      <div><span class="ic">&#xe646;</span><span class="st">个性签名</span></div>
        <div><span class="pi">

        </span><router-link :to="{path: '/sign' , query:{sig: ssg.u_idio}}"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
         <div> <span class="ic">&#xe609;</span><span class="st" >电话</span></div>
        <div><span class="pi" >{{ssg.u_phone}}
        </span><router-link :to="{path: '/tel' , query:{num: ssg.u_phone}}">
          <span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
        <div> <span class="ic">&#xe661;</span><span class="st">邮箱</span></div>
        <div><span class="pi">

        </span><router-link :to="{path: '/mail' , query:{num: ssg.u_mail}}"><span class="ic1"> &#xe6e0;</span></router-link> </div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
        <div> <span class="ic">&#xe62a;</span><span class="st">收货地址</span></div>
        <div><span class="pi"></span><router-link to="/Address"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>
    <router-link class="dl"  to='Login' tag="div">
      退出登录
    </router-link>

  </div>
</template>

<script>
    export default {
        name: "setting",
      data(){
          return{

              ssg:{},
          }
      },
      mounted: function(){
        this.show();
      },
      methods: {
        show() {
          var that = this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/user/displayMyInfo.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
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
      },
    }
</script>

<style scoped>
  .setting{
    background-color: white;
    font-family: 'iconfont';
  }
  .ic1{
    display: block;
    float: left;
    color:#333;
    line-height: 0.5rem;
    font-size:0.4rem;
    padding-right: 0.5rem;
  }
  .ic{
    float: left;
    display: block;
    line-height: 0.5rem;
    color:#009a61;
    font-size:0.55rem;
    padding-left: 0.3rem;
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
    font-size:0.5rem;
    position: absolute;
    left:0.3rem;
  }
  h2{
    margin: 0  auto;

  }
  .content3{
    width:100%;
    border-bottom: 1px #f2f2f2 solid;

  }

  .content3 .cl{
    padding-top: 0.2rem;
    height: 1rem;
    /*line-height: 2.5rem;*/
    display: flex;
    justify-content: space-between;

  }
  .st{
    line-height: 0.5rem;
    display: block;
    float: left;
    font-size:0.3rem;
    padding-left: 0.4rem;
  }
  .it{
    position: relative;
  }
  .iner{
    position: absolute;
    right:1.1rem;;
   /* top:0rem;*/
    display: block;
    width: 0.5rem;
    height:0.5rem;
    border-radius: 50%;
    background-color: #009a61;
    float: left;
    padding-bottom: 0.5rem;

  }
  .pi{
    position: absolute;
    right:1.2rem;
    font-size: 0.3rem;
    color:#ccc;
  }
.dl{
  width:100%;
  height:1rem;
  position: fixed;
  bottom: 0;
  background-color: #00906a;
  color: white;
  line-height: 1rem;
   text-align: center;
}

</style>
