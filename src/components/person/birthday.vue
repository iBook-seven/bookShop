<template>
  <div class="birthday">
  <div class="header1">
    <router-link class="st1" to="/setting">&#xe602;</router-link>
    <h2>生日</h2>
  </div>

    <input type="date" v-model="birNum" />
    <button type="button" @click="sub">提交</button>

    </div>

</template>
<script>
    export default {
        name: "birthday",
      data(){
        return{
          birNum: this.$route.query.bir,
        }
      },
      methods:{
          sub(){

            var that = this;
            $.ajax({
              url: 'http://h5h5h5.free.idcfengye.com/user/updateMyInfo.action',
              type: 'post',
              dataType: 'json',
              xhrFields: {
                withCredentials: true    // 前端设置是否带cookie
              },
              data:{
                userInfo:"u_birthday:"+this.birNum,
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
  .div1{
    font-size: 1rem;
    color: forestgreen;
width: 4rem;
    height: 2rem;
  }
  h2{
    margin: 0 auto;
  }
  input,button{
    width:100%;
    height: 0.7rem;
    border:1px #009a61 solid;
    border-radius: 0.3rem;
    background:linear-gradient(to right,#009a61,lightgreen);
    color:#fff;
    font-size: 0.3rem;
margin-bottom: 0.3rem;
  }
</style>
