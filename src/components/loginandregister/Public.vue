<template>
  <div id="public">
    <div>
      <a>图文详情</a>
      <a>出版信息</a>
    </div>
    <p class="clearfix">
      <span>书名</span>
      <span>{{publicinformation.title}}</span>
    </p>
    <p class="clearfix">
      <span>ISBN</span>
      <span>{{publicinformation.isbn}}</span>
    </p>
    <p class="clearfix">
      <span>作者</span>
      <span>{{publicinformation.author}}</span>
    </p>
    <p class="clearfix">
      <span>出版社</span>
      <span>{{publicinformation.public}}</span>
    </p>
    <p class="clearfix">
      <span>出版时间</span>
      <span>{{publicinformation.publictime}}</span>
    </p>
    <p class="clearfix">
      <span>开本</span>
      <span>{{publicinformation.format}}</span>
    </p>
    <p class="clearfix">
      <span>纸张</span>
      <span>{{publicinformation.paper}}</span>
    </p>
    <p class="clearfix">
      <span>包装</span>
      <span>{{publicinformation.packing}}</span>
    </p>
    <p class="clearfix">
      <span>是否套装</span>
      <span>{{publicinformation.suit}}</span>
    </p>
  </div>
</template>

<script>
    export default {
        name: "Public",
      data() {
          return {
            publicinformation : {
              title :'追风筝的人',
              isbn:'9787208061644',
              author:'[美]卡勒德.胡赛尼（Khaled Hosseini）著，李继宏译',
              public:'上海人民出版社',
              publictime:'2006-05-01',
              format:'32开',
              paper:'胶版纸',
              packing:'平装-胶订',
              suit:'否',
            },
          }
      }
    }
</script>

<style scoped>
  #public {
    display: flex;
    flex-direction:column;
    justify-content:left;
    font-family: Arial, Verdana, Tahoma, "微软雅黑", "黑体";
    margin:0;
    padding:0;
  }
  a { text-decoration: none;
    display:block;}
  #public div {
    text-align: center;
  }
  #public div a {
    display:inline;
    font-size: 0.38rem;
    line-height:0.85rem;
  }
  #public div a:nth-child(1):after{
    content:"| ";
    margin:0 0.3rem;
  }
  #public p {
    width:80%;
    margin:0 auto;
  }
  #public p span:nth-child(1) {
    display: block;
    width:30%;
    line-height:0.82rem;
    font-size: 0.26rem;
    float:left;
    padding-left:0.2rem;
  }
  #public p  span:nth-child(2){
    display: block;
    width:70%;
    line-height:0.82rem ;
    float:left;
    font-size: 0.26rem;
  }
</style>
