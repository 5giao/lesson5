/*
 * @Author: your name
 * @Date: 2020-11-13 13:40:27
 * @LastEditTime: 2020-11-13 20:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui';
import store from "@/store"
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
