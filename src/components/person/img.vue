<template>
    <div class="img">
    <!--  <div class="header1">
        <router-link class="st1" to="/setting">&#xe602;</router-link>
        <h2>头像</h2>
      </div>
      <form action="post">
        <input type="file" class="yt" value="【图片】" id="file">
        <button type="submit" class="yt" @click="imgChange">确认上传</button>
      </form>-->
      <!--<divclass="upload_box">-->
      <div class="header1">
        <router-link class="st1" to="/setting">&#xe602;</router-link>
        <h2>头像</h2>
      </div>

     <!--文件上传选择按钮-->
      <div id="preview">
      <img :src="sy.u_image" id="imghead" width="260" height="180" /> <!--图片显示位置-->
<div class="xc">
        <input type="file" name="file" id="test1" accept="image/*" /><!-- v-on:change="imgChange(this);-->"
         <button type="submit" class="btn" @click="change" > 确定</button>
</div>
      </div>
<!--  </div>-->

    </div>
</template>

<script>

    export default {
      name: "img",
        data(){
           return{
             eer:"",
             sy:"",
           }
        },
      mounted(){
        this. xg();
      },
      methods: {
        change(){
          var url = "http://h5h5h5.free.idcfengye.com/user/updateImg.action";//这里填请求的地址
          $.ajaxFileUpload({
            url : url,
            type : 'POST',
            fileElementId : 'test1',  //这里对应html中上传file的id
            contentType:"application/json;charset=UTF-8",

          })
        },
        xg(){
          var that=this;
          $.ajax({
            url: 'http://h5h5h5.free.idcfengye.com/bookInformation/clearBrowseHistory.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              console.log(goods);
             /* that.jpgList = JSON.parse(JSON.stringify(goods));*/
            },
            error: function () {
              console.log("出错");
            }
          })
        }

        }

        /*btnChange() {
          var that=this;
          var url = "http://ljn.free.idcfengye.com/user/updateImg.action";//这里填请求的地址
          $.ajaxFileUpload({
            url : url,
            type : 'POST',
            fileElementId : 'test1',  //这里对应html中上传file的id
            contentType:"application/json;charset=UTF-8",
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            crossDomain: true,
            /!*success: function(data){
                  console.log(data);
              /!*var str = $(data).find("body").text();//获取返回的字符串
              console.log(str);
              var json = $.parseJSON(str);//把字符串转化为json对象*!/
              this.sy=json.url;
              if(json.status){
                alert("success:" + json.url);
              }
              else{
                alert("failure");
              }*!/
            }, error: function(){
              alert("please link network");
            }*!/
            success: function (goods) {
              console.log("sssssss");
              console.log(goods);
              that.jpgList = JSON.parse(JSON.stringify(goods));
            },
            error: function () {
              console.log("出错");
            }
          })



         /!* var file = document.getElementById("file");
          var imgUrl = window.URL.createObjectURL(file.files[0]);
          this.eer=this.imgurl;
          var that = this;
          $.ajax({
            url: 'http://ljn.free.ngrok.cc/user/updateImg.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true    // 前端设置是否带cookie
            },
            data: {
              userInfo: "u_sex:" + this.eer,
            },
            crossDomain: true,
            success: function (goods) {
              console.log(goods);
              that.ssg = JSON.parse(JSON.stringify(goods));
            },
            error: function () {
              console.log("出错");
            }
          })*!/
        }*/

    }
</script>

<style scoped>
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
  #imghead{
    width:2rem;
    height: 2rem;
    border-radius: 50%;
    border:3px #e6e6e6 solid;
    margin:1rem auto;
  }
  #file{
    width: 1.4rem;
    margin:0 auto;
    display: block;
    float: left;
  }
  .btn{
    display: block;
    float: left;
  }
.xc{
  width: 3rem;
  height:3rem;
  position: relative;
  display: block;
  margin:0 auto;
}
</style>
