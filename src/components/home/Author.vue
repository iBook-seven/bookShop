<template>
  <section>
    <div class="title">
      <p>FAMOUS AUTHOR</p>
      <h1>著名作家</h1>
    </div>
    <ul>
      <li v-for="item in five" @click="childClick(item)">
        <img :src="item.b_authorImg"/>
        <p>{{item.b_author}}</p>
      </li>
    </ul>
    <img src="../../assets/img/banner1.jpg" width="100%">
  </section>
</template>

<script>
    export default {
        name: "Author",
      data(){
          return{
            key: '',
            authorList: [
              // {b_authorImg: require('@/assets/img/a1.jpg'),b_author: '芥川龙之介' },
              // {b_authorImg: require('@/assets/img/a2.jpg'),b_author: '列夫·托尔斯泰' },
              // {b_authorImg: require('@/assets/img/a3.jpg'),b_author: '芥川龙之介' },
              // {b_authorImg: require('@/assets/img/a1.jpg'),b_author: '芥川龙之介' },
              // {b_authorImg: require('@/assets/img/a2.jpg'),b_author: '芥川龙之介' }
            ],
            five:[],
          }
      },
      mounted: function(){
        this.show();
      },
      methods: {
        childClick(item){
          this.$router.push({path: '/AuthorBook',query:{name: item.b_author}});
        },
        show(){
          var that = this;
          $.ajax({
            url: 'http://localhost:8080/bookInformation/hotSaleAuthor.action',
            type: 'post',
            dataType: 'json',
            xhrFields: {
              withCredentials: true   // 前端设置是否带cookie
            },
            crossDomain: true,
            success: function (goods) {
              that.authorList = JSON.parse(JSON.stringify(goods));
              that.five = that.authorList.slice(0,5);
              console.log(goods);
            },
            error: function () {
              console.log("出错了！");
            }
          })
        },
        getKey(item){
          this.key = item.b_author;
          console.log(this.key);
        }
      },
    }
</script>

<style scoped>
  section .title{
    font-size: 1rem;
    width: 40%;
    border-top: 1px solid forestgreen;
    border-bottom: 1px solid forestgreen;
    border-radius: 10px;
    margin: 0.1rem auto;
  }
  section .title p{
    font-size: 0.12rem;
    color: forestgreen;
    text-align: center;
  }
  section .title h1{
    font-size: 0.22rem;
    color: forestgreen;
    text-align: center;
    line-height: 0.31rem;
  }
  section  ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0.2rem auto;
    background-color: #f5f5f5;
    padding: 2px;
  }
  section ul li{
    width: 19.5%;
    padding: 0.1rem;
    background-color: #fff;
  }
  section ul li img{
    width: 1rem;
    height: 1rem;
    margin: 0 auto;
  }
  section ul li p{
    margin-top: 0.1rem;
    font-size: 0.15rem;
    text-align: center;
    line-height: 0.27rem;
    color: #333;
  }
</style>
