import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex插件
Vue.use(Vuex)
//引入小仓库
import login from './login'
import regist from './regist'

//对外暴露Store实例
export default new Vuex.Store({
    modules: {
        login,
        regist
    }
})