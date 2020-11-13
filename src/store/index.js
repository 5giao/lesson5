/*
 * @Author: your name
 * @Date: 2020-11-13 20:30:16
 * @LastEditTime: 2020-11-13 21:03:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \登录\app\src\store\index.js
 */
import Vue from 'vue'
import Vuex from "vuex"
Vue.use(Vuex)

const state = {
    vuexList: []
}

const getters = {

}

const mutations = {
    CHANGE_LIST(state, data) {
        state.vuexList = data
    }
}

const actions = {
    change_list(content, data) {
        content.commit("CHANGE_LIST", data)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store
module.exports