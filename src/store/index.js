import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//使用vuex插件
Vue.use(Vuex)
const actions = {
    async cc(context) {
        let res = await productList();
        context.commit('aa',res.data),
        console.log(res.data);
    },
}
const mutations = {
    dmg(state,value){
     state.data = value
    },
    info(state,value){
        state.info = value;
    },
    aa(state,value){
        state.img = value
    }
     
}
const state = {
    data: [],
    info: [],
    img: []
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