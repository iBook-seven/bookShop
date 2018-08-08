<template>
  <div class="setting">
   <div class="header1">
     <router-link class="st1" to="/person">&#xe602;</router-link>
     <h2>设置</h2>
   </div>
   <div class="content3">
    <div class="cl">
      <div> <span class="ic">&#xe616;</span><span class="st">头像</span></div>
      <div class="it"><span class="iner "></span><router-link to="img"><span class="ic1"> &#xe6e0;</span></router-link></div>
    </div>
   </div>

    <div class="content3">

      <div class="cl">
        <div> <span class="ic">&#xe608;</span><span class="st">昵称</span></div>
        <div><span class="pi">{{ssg.name}}</span></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
        <div> <span class="ic">&#xe65b;</span><span class="st">性别</span></div>
        <div><span class="pi">{{ssg.sex}}</span> <router-link to="sex"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
          <div> <span class="ic">&#xe689;</span><span class="st">生日</span></div>
        <div><span class="pi">{{ssg.brithday}}</span><router-link to="birthday"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>
    <div class="content3">
      <div class="cl">
      <div><span class="ic">&#xe646;</span><span class="st">个性签名</span></div>
        <div><span class="pi"></span>  <router-link to="sign"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
         <div> <span class="ic">&#xe609;</span><span class="st">电话</span></div>
        <div><span class="pi">{{ssg.tel}}</span><router-link to="tel"><span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
        <div> <span class="ic">&#xe661;</span><span class="st">邮箱</span></div>
        <div><span class="pi"></span><router-link to="mail"><span class="ic1"> &#xe6e0;</span></router-link> </div>
      </div>
    </div>

    <div class="content3">
      <div class="cl">
        <div> <span class="ic">&#xe62a;</span><span class="st">收货地址</span></div>
        <div><span class="pi"></span><router-link to="/Address"> <span class="ic1"> &#xe6e0;</span></router-link></div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "setting",
      data(){
          return{

              ssg:{
                name:'cl',
                sex:'女',
                brithday:'0304',
                tel:'12345678901'
              }


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


</style>
