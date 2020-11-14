/*
 * @Author: your name
 * @Date: 2020-11-13 13:40:27
 * @LastEditTime: 2020-11-14 11:05:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/view/Home"
import List from "@/view/List"
import Detail from "@/view/Detail"
import Layout from "@/Layout"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },{
      path:'/home',
      component:Home
    },
    {
      path:'/layout',
      component:Layout,
      redirect:'/layout/list',
      children:[{
        path:'/layout/list',
        name:'List',
        component:List
      },{
        path:'/layout/detail/:id',
        name:'Detail',
        component:Detail
      }]
    }
  ]
})
