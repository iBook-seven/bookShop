<template>
  <div class="img">
    <div class="header1">
      <router-link class="st1" to="/setting">&#xe602;</router-link>
      <h2>性别</h2>
    </div>

    <div class="io" >
      <input  type="radio" name="sex" value="男"  @click="jud" />男<br>
      <input  type="radio" name="sex" value="女"  @click="jud"/>女<br>
      <button type="button" value="保存" class="sub" @click="jjd">保存</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: "img",
       data(){
      return{
        se:this.$route.query.Se,
        is_Middle:"",
        cc:'',
      }
       },

    methods:{
      jud(){
        var aInt = document.querySelectorAll('input');
        for (var i = 0; i < aInt.length; i++) {
          if (aInt[i].checked == true) {

             this.cc=aInt[i].value;

          }
        }
      },
      jjd(){
        var that = this;
        $.ajax({
          url: 'http://h5h5h5.free.idcfengye.com/user/updateMyInfo.action',
          type: 'post',
          dataType: 'json',
          xhrFields: {
            withCredentials: true    // 前端设置是否带cookie
          },
          data:{
            userInfo:"u_sex:"+this.cc,
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
  .io input:nth-child(1),.io input:nth-of-type(2){
    width:0.5rem;
  height: 0.4rem;
    margin-left:0.5rem;
  }
  .sub{
    width:2rem;
    line-height: 0.5rem;
    color: white;
    border:none;
    border-radius: 3px;
    background: #009a61;
  }
  .io{
    display: block;
    width: 4rem;
    margin:1rem 40%;
  }
  .img{
    position: relative;
    bottom: 0;


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


</style>
