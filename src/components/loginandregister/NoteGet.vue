<template>
    <div id="noteget">
      <router-link to="/Note"><span class="iconfont header">&#xe606;</span></router-link>
      <p class="inentifying-code">验证码已发送至{{tel}}
        <span class="iconfont">&#xe610;</span>
      </p>
      <p class="noteget-p">请输入6位数字验证码
        <span></span>
      </p>
      <div class="get">
        <input type="text" maxlength="1"/>
        <input type="text" maxlength="1"/>
        <input type="text" maxlength="1"/>
        <input type="text" maxlength="1"/>
        <input type="text" maxlength="1"/>
        <input type="text" maxlength="1"/>
      </div>
      <input type="button" class="nexting" @click="Goon" value="下一步"/><!--链接至首页-->
      <p>{{hello}}</p>
      <a class="safety-problem">收不到验证码？</a>
    </div>
</template>

<script>
    export default {
      name: "NoteGet",
      data() {
        return {
          tel: "",
          message: '',
          hello: ''
        }
      },
      mounted() {
        this.Next();
      },
      methods: {
        Next: function () {
          var txts = $("input");
          for (var i = 0; i < txts.length; i++) {
            var t = txts[i];
            t.index = i;
            t.setAttribute("readonly", true);
            t.onkeyup = function () {
              this.value = this.value.replace(/^(.).*$/, '$1');
              var next = this.index + 1;
              if (next > txts.length - 1) return;
              txts[next].removeAttribute("readonly");
              txts[next].focus();
            }
          }
          txts[0].removeAttribute("readonly");
        },
        methods: {
          Goon: function () {
            var inputall = $(".get input");
            var arr = [];
            var that = this;
            for (var i = 0; i < inputall.length; i++) {
              arr.push(inputall[i].value);
            }
            this.message = arr.join("");
            console.log(this.message);
            $.ajax({
              url: 'http://h5h5h5.free.idcfengye.com/user/loginByMessage.action',
              data: {message: this.message},
              type: 'post',
              dataType: 'json',
              xhrFields: {
                withCredentials: true   //前端设置是否带cookie
              },
              crossDomain: true,
              success: function (list) {
                var helll = JSON.parse(JSON.stringify(list));
                if (helll.message == "success") {
                  console.log(helll.message);
                  that.$router.push({path: '/home'});
                } else {
                  that.hello = helll.message;
                }
              },
              error: function () {
                that.hello = "验证码输入错误";
              }
            })
          }
        }
      }
    }
</script>

<style scoped>
  #noteget {  display: flex;
    flex-direction:column;
    justify-content:space-between;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";}
  a { text-decoration: none;
    display:block;}
  .header {
    position:absolute;
    left:0.2rem;
    top:0.1rem;
    font-size: 0.3rem;
  }
  .inentifying-code {
    width:80%;
    font-size: 0.36rem;
    font-weight: bold;
    margin:1.47rem auto 0.30rem auto;
    text-align: left;
  }
  .noteget-p {width:80%;
    margin:0.3rem auto;
    display:flex;
    justify-content: flex-start;
    align-items: baseline;
    font-size: 0.26rem;
    color:#ccc;
  }
  .noteget-p span {
    color:#f3344a;
    border:0.01rem solid #ccc;
    border-radius:0.05rem;
    margin-left:0.2rem;
    width:2.57rem;
    height:0.54rem;
  }
  .get { width:80%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    margin:0 auto;
    padding:0.5rem 0 0 0;
  }
  .get input {
    display: block;
    border:none;
    width:0.9rem;
    height:0.9rem;
    border-bottom: 0.01rem solid #ccc;
  }
  .nexting {
    display: block;
    width:80%;
    height:0.9rem;
    margin:0.84rem auto;
    text-align:center;
    line-height:0.9rem;
    font-size:0.34rem;
    background-color:#fd4e4b;
    color:#ffffff;
    border-radius:0.05rem;}
  .safety-problem {
    font-size: 0.3rem;
    position:absolute;
    left:0.44rem;
    bottom:0.70rem;}
</style>
