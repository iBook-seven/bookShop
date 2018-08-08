<template>
    <div class="a-judge">
      <div class="header1">
        <router-link class="st1" to="/person">&#xe602;</router-link>
        <h2>发表评价</h2>

      </div>
      <div class="pj">
        <img :src="ei.url">
        <p class="pd">{{ei.ut}}</p>
        <ul>
          <span v-for="(a,index) of arr"
              :class="{active:index<=n}"
              @click = "changeN(index)" class="star">&#xe633;</span>
        </ul>
        <p class="pdf">{{arr[n]}}</p>
      </div>
      <form>
        发表评论
        <input type="textarea">
        <button type="submit" class="ci">发布</button>
      </form>

    </div>
</template>

<script>

    export default {
        name: "a-judge",
      data(){
          return{
            ei:{
              url:require('../../assets/img/1.jpg'),
              ut:'书籍信息'
            },
            arr : ["很差","差","一般","好","完美"],
            n : 0
          }
      },
      methods:{
        changeN (i){
          this.n = i;
          // $('.star').html('&#xe633;');
        }
      }
    }
</script>

<style scoped>
  .header1{

    width:100%;
    height:1.5rem;
    background-color: white;
    border-bottom: 1px #f2f2f2 solid;
    display: flex;
    justify-content: space-around;
    padding:0.5rem;
  }
  .pj{
     width:100%;
    height: 2.5rem;
    background-color: #fff;

  }
  .a-judge{
    background-color: white;
  }
  .pd{
    position: absolute;
    top:2rem;
    left:2.9rem;
    font-size: 0.2rem;

  }
  form{
    color:#009a61;
    font-size: 0.3rem;
    position: relative;
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
  .ci{
    padding:0.1rem 0.3rem;
    background-color: #009a61;
    /*border:1px #009a61 solid;*/
    margin-top:0.3rem;
    font-size: 0.2rem;
    color:#fff;
    border: none;
    border-radius: 0.1rem;
    position: absolute;
    right:0.4rem;
  }
  img
  {
    width:2.5rem;
    height: 2rem;
    padding-left: 0.5rem;
    float: left;
  }
  input{
    width: 100%;
    height: 3.5rem;
  }

  .pj ul{float: left; list-style:none;  margin:0.5rem; padding-top:1rem;font-family: 'iconfont';
    font-size:0.4rem ;}
  .pj span{ float:left;   cursor:pointer; margin-right:0.1rem;
    transition:all 0.4s; line-height: 0.5rem; color: #adadad;}
  .pj span.active{color: forestgreen}
  .pj span:hover{transform:scale(1.1,1.1);}
  .pdf{margin:0.1rem;  font-size:0.2rem; color:#009a61;position: absolute;top:3rem;left:5.5rem; float: left}
</style>
