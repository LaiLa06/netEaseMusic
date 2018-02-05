/**
*主要入口文件，引入其他四个js
*/
/* eslint-disable */
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
//引入actions、mutations、getters
import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"

// 定义状态state
const state = {

}

// 设置暴露接口
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})


/*
 * 完整的vuex动作是
 * components(组件)中methods里面一个方法dispatch（调用）Actions，
 * Actions然后commit对应的Mutations
 * Mutations操作State中的状态数据，状态一改变，组件中重新渲染
*/
