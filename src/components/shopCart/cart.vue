<template>
   <div class="cart">
     <ul>
       <transition-group appear>
         <li v-for="(g,index) in list" :key="index">
           <div class="btn"><span :class="{checked : g.checked}" @click="sty(g)"></span></div>
           <router-link to="/ProductDetails"> <div class="poto"><img :src="g.b_img" ></div></router-link>
           <div class="dir">
             <p>{{g.b_name}}</p>
             <span>{{g.b_price}}</span>
             <p>x{{g.sc_num}}</p>
           </div>
           <div class="del" >
             <span @click="de(g,index)">&#xe6b4;</span>
           </div>
           <div class="dian">
             <a href="" @click.prevent="big(g,-1)">-</a>
             <input type="text" value="1" v-model="g.sc_num" readonly="readonly">
             <a href="" @click.prevent="big(g,1)">+</a>
           </div>
         </li>
       </transition-group>
     </ul>
     <div class="pay">
       <p><span class="btn1" @click="all" :class="{checked:flag}"></span><span>全选</span>
         <span>总价：</span><span v-model="sum">{{a}}</span></p>
       <div class="end" @click="pay()">结算</div>
     </div>
   </div>
</template>

<script>
    export default {
      name: "cart",
      data(){
        return {
          arr:[],
          a:0,
          flag:false,
          list: [

          ]
        }
      },
      mounted(){
        this.sy();
      },
      methods: {
        pay(){
          this.calculate();
          this.wang();
          if(this.a>0){
            this.$router.push({path: '/pay'});
          }
        },
        big(item,op){
          if(op<0){
           if(item.sc_num>1){
             item.sc_num--;
           }else{
             item.sc_num = 1
           }
          }else{
            item.sc_num++;
          }
          this.sum();
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/shopCartController/addAndDel.action',
            type:'post',
            dataType:'json',
            data: {b_id: item.b_id,status: op,sc_num: item.sc_num},
            xhrFields:{
              withCredentials:true
            },
            crossDomain:true,
            success:function(){
              console.log('success');
            },
            error:function(){
              // console.log("");
            }
          })
        },
        sty(item){
          if(typeof item.checked == 'undefined'){
            this.$set(item,'checked',true)
          }
          else{
            item.checked = !item.checked;
          }
          this.sum();
        },
        de(item,index){
          this.list.splice(index,1);
          this.sum();
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/shopCartController/deleteOneBook.action',
            data:{b_id:item.b_id},
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true
            },
            crossDomain:true,
            success:function(){
              console.log('success!');
            },
            error:function(){
              console.log("出事了")
            }
          })
        },
        all(){
         this.flag = !this.flag;
          this.list.forEach(son => {
            if(typeof son.checked == 'undefined'){
              this.$set(son,'checked',true)
            }
            son.checked = this.flag;
            this.sum();
          })
        },
        sum(){
            this.a = 0;
            this.list.forEach(next => {
            if(next.checked ==true){
              this.a += parseInt(next.b_price)*parseInt(next.sc_num)
            }
          })
        },
        sy(){
          const that = this;
          $.ajax({
            url:' http://h5h5h5.free.idcfengye.com/shopCartController/showShopCart.action',
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true
            },
            crossDomain:true,
            success:function(hotdog){
              console.log(hotdog);
              that.list = JSON.parse(JSON.stringify(hotdog))
            },
            error:function(){
              console.log("出事了")
            }
          })
        },
        calculate(){
          let name='';
          let zhi='';
          let total='';
          var that = this;
          this.list.forEach( item=>{
            if(item.checked){
              name+=item.b_id+',';
              // zhi+=item.sc_num+','
            }
          });
          total= name;
          console.log(total);
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/confirmOrder/addOrder.action',
            data: {books:total},
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true
            },
            crossDomain:true,
            success:function(fox){
              console.log(fox);
              that.list = JSON.parse(JSON.stringify(fox))
            },
            error:function(){
              console.log("出事了")
            }
          })
        },
        wang(){
          let name='';
          let zhi='';
          let total='';
          this.list.forEach( item=>{
            if(item.checked){
              // arr.push('b_id:'+ item.b_id+','+'sc_num:'+item.sc_num);
              name+=item.b_id+',';
              // zhi+=item.sc_num+','
            }
          });
          total=name;
          console.log(total);
          $.ajax({
            url:'http://h5h5h5.free.idcfengye.com/alipay/alipayController.action',
            data: {total:total},
            type:'post',
            dataType:'json',
            xhrFields:{
              withCredentials:true
            },
            crossDomain:true,
            success:function(fox){
              console.log(fox);
              that.list = JSON.parse(JSON.stringify(fox))
            },
            error:function(){
              console.log("出事了")
            }
          })
        }
        }
      }
</script>

<style scoped>
  @font-face {
    font-family: 'iconfont';  /* project id 766364 */
    src: url('//at.alicdn.com/t/font_766364_fhq4k0hh7s.eot');
    src: url('//at.alicdn.com/t/font_766364_fhq4k0hh7s.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_766364_fhq4k0hh7s.woff') format('woff'),
    url('//at.alicdn.com/t/font_766364_fhq4k0hh7s.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_766364_fhq4k0hh7s.svg#iconfont') format('svg');
  }
  li{
    width: 100%;
    height: 2.7rem;
    padding-left: 0.45rem;
    display: flex;
    border-bottom: 0.02rem solid #979797;
    font-size: 0.25rem;
    position: relative;
  }
  .v-enter,.v-leave-to{
    opacity: 0;
    transform: translateY(100px);
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.6s ease;
  }
  .v-move{
    transition: all 0.6s ease;
  }
  .v-leave-active{
    position: absolute;
  }
  .btn{
    height: 2.7rem;
    width: 10%;
    padding-top: 1.1rem;
  }
  .btn span{
    display: inline-block;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    text-align: center;
    border: 1px solid green;
  }
  .checked{
    background: url("../../assets/img/btn.png") no-repeat;
    background-size: 100%;
  }
  .poto{
    padding-top: 0.4rem;
    width: 30%;
    height: 2.7rem;
  }
  .poto img{
    width: 2.0rem;
    height: 2.0rem;
  }
  .dir{
    width: 40%;
    height: 2.7rem;
    padding-top: 0.4rem;
  }
  .dir p{
    line-height: 0.6rem;
    margin-bottom: 0.35rem;
    white-space: nowrap;
    width: 3rem;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .del{
    width:20%;
    height: 2.7rem;
    padding-left: 0.4rem;
    padding-top: 2rem;
  }
  .del span{
    font-size: 0.4rem;
    color: #009a61;
    font-family: iconfont;
    cursor: pointer;
  }
  .dian{
    position: absolute;
    top: 1.3rem;
    left: 4.2rem;
  }
  .dian a{
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border: 1px solid #009a61;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.3rem;
    color: #009a61;
  }
  .dian input{
    display: inline-block;
    width: 1rem;
    height: 0.4rem;
    text-align: center;
    border: 1px solid #009a61;
  }
  .pay{
    padding-left: 0.4rem;
    padding-top: 0.5rem;
    width: 100%;
    height: 1.3rem;
    margin-bottom: 2rem;
    font-size:0.4rem;
    color: #009a61;
    position: fixed;
    bottom: -1.1rem;
    border-bottom:0.05rem solid #ebebeb;
  }
  .btn1{
    display: inline-block;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    text-align: center;
    border: 1px solid green;
  }
  .pay p span:nth-child(2){
    color: #009a61;
  }
  .pay p span:nth-child(3){
    margin-left: 0.7rem;
    color: #009a61;
  }
  .end{
    width: 3rem;
    height: 1.3rem;
    background-color:#009a61;
    color: white;
    text-align: center;
    line-height: 1.3rem;
    position: absolute;
    right: 0rem;
    top: 0rem;
    cursor: pointer;
  }

</style>
