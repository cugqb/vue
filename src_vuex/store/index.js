//该文件用于创建Vuex中最核心的store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
import count from './count'
import person from './person'
//应用Vuex插件
Vue.use(Vuex)
//准备actions 用于响应组件中的动作


// const actions = {
//     //当此处无业务逻辑时,可以直接绕过actions ,
//     //在组件处commit to mutations,但是函数名应该与mutations中的函数名保持大写一致

// }
//准备mutations 用于操作数据(state)
// const mutations = {
//     JIA(state,value){
//         state.sum += value
//     },
//     JIAN(state,value){
//         state.sum -= value
//     },
//     ODDJIA(state,value){
//         state.sum += value
//     },
//     WAITJIA(state,value){
//         state.sum += value
//     },
//     ADDOBJ(state,obj){
//         state.personList.unshift(obj)
//     }

// }
//准备state 用于存储数据
// const state = {
//     sum: 0,
//     student: '邱斌',
//     age: 23,
//     personList: [{ id: '001', name: 'qiubin' }]

// }
//准备getters 用于将state中的数据进行加工
// const getters = {
//     bigSum(state) {
//         return state.sum * 10
//     }
// }
//创建store,导出store
export default new Vuex.Store({
    modules:{
        countAbout:count,
        personAbout:person
    }
})

