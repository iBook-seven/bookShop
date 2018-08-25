import Vue from 'vue'
import Router from 'vue-router'
import App from "../App"
import {Header} from 'mint-ui'
import '../../static/css/mui.css'
Vue.component(Header.name,Header)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/App',
      component: App
    },

  ]
})
