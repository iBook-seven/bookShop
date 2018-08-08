import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home'
import sort from '@/sort'
import setting from '@/setting'
import person from '@/person'
import NewsPage from '@/components/home/NewsPage'
import SuperKillPage from '@/components/home/SuperKillPage'
//个人中心
import Address from '@/components/home/Address'
import EditAddress from '@/components/home/EditAddress'
import AddAddress from '@/components/home/AddAddress'
import img from '@/components/person/img'
import mail from '@/components/person/mail'
import sex from '@/components/person/sex'
import sign from '@/components/person/sign'
import tel from '@/components/person/tel'
import judges from '@/components/person/a-judge'
import apply from '@/components/person/apply'
import collect from '@/components/person/collect'
import judge from '@/components/person/judge'
import ssh from '@/components/person/ssh'
import birthday from '@/components/person/birthday'
import finish from '@/components/person/finish'
import order from '@/order'
import history from '@/components/person/history'
//分类
import bang from '@/components/classify/bang'
import catalog from '@/components/classify/catalog'
//购物车
import goods from '@/goods'
import pay from '@/components/shopCart/pay'
import cart from '@/components/shopCart/cart'
//登录注册
import Login from '@/components/loginandregister/Login.vue'
import Note from '@/components/loginandregister/Note.vue'
import NoteGet from '@/components/loginandregister/NoteGet.vue'
import ForgitPwd from '@/components/loginandregister/ForgitPwd.vue'
import FNoteGet from '@/components/loginandregister/FNoteGet.vue'
import SetNew from '@/components/loginandregister/SetNew.vue'
import Register from '@/components/loginandregister/Register.vue'
import RNoteGet from '@/components/loginandregister/RNoteGet.vue'
import RSetNew from '@/components/loginandregister/RSetNew.vue'
//详情页
import ProductDetails from '@/ProductDetails'
import Public from '@/components/loginandregister/Public.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/sort',
      component: sort
    },
    {
      path: '/person',
      component: person
    },
    {
      path: '/NewsPage',
      component: NewsPage
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/SuperKillPage',
      component: SuperKillPage
    },
    {
      path: '/Address',
      component: Address
    },
    {
      path: '/EditAddress',
      component: EditAddress
    },
    {
      path: '/AddAddress',
      component: AddAddress
    },
    {
      path: '/img',
      component: img
    },
    {
      path: '/mail',
      component: mail
    },{
      path: '/apply',
      component: apply
    },
    {
      path: '/judges',
      component: judges
    },
    {
      path: '/sex',
      component: sex
    },
    {
      path: '/judge',
      component: judge
    },
    {
      path: '/sign',
      component: sign
    },
    {
      path: '/ssh',
      component: ssh
    },
    {
      path: '/tel',
      component: tel
    },
    {
      path: '/collect',
      component: collect
    },
    {
      path: '/birthday',
      component: birthday
    },
    {
      path: '/finish',
      component: finish
    },
    {
      path: '/order',
      component: order
    },
    {
      path: '/history',
      component: history
    },
    {
      path: '/bang',
      component: bang
    },
    {
      path: '/catalog',
      component: catalog
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/pay',
      component: pay
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/ProductDetails',
      component: ProductDetails
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Note',
      component: Note
    },
    {
      path: '/NoteGet',
      component: NoteGet
    },
    {
      path: '/ForgitPwd',
      component: ForgitPwd
    },
    {
      path: '/FNoteGet',
      component: FNoteGet
    },
    {
      path: '/SetNew',
      component: SetNew
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/RNoteGet',
      component: RNoteGet
    },
    {
      path: '/RSetNew',
      component: RSetNew
    },
    {
      path: '/Public',
      component: Public
    }
  ]
})
