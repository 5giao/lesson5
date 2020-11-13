/*
 * @Author: your name
 * @Date: 2020-11-13 13:40:27
 * @LastEditTime: 2020-11-13 20:08:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/view/Home"
import List from "@/view/List"
import Detail from "@/view/Detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      component:Home
    },{
      path:'/list',
      component:List
    },{
      path:'/detail/:id',
      component:Detail
    }
  ]
})
