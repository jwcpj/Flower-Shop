import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//使用vuex插件
Vue.use(Vuex)
const actions = {}
const mutations = {
    dmg(state,value){
     state.data = value
    },
    info(state,value){
        state.info = value;
    }
}
const state = {
    data: [],
    info: []
}

//对外暴露Store实例
export default new Vuex.Store({
        actions,
        mutations,
        state,
    plugins: [
        createPersistedState()
    ]
})