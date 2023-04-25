// login的小仓库
//state:存储数据
const state = {
    //state: 根据接口返回值初始化
    user: [],
    loggedIn: false,
    // console.log(user);
};

//action: 书写自己的业务逻辑，也可以处理异步
const actions = {
    checkUserIsAuthenticated() {
        const user = JSON.parse(localStorage.getItem('user'))
        return user !== null && user !== undefined
    }
    // async user({ commit }) {
    //     let result = await loginUser(username, password)
    //     if (result.code == 1000) {
    //         commit('CATEGORYLIST', result.data)
    //     }
    // }
};
//mutations: 修改数据
const mutations = {
    login(state, user) {
        state.user = user
        state.loggedIn = true
    },
    logout(state) {
        state.user = null
        state.loggedIn = false
    }
};
//getters：简化仓库数据，让组件或去仓库的数据更方便
const getters = {
    isLoggedIn: state => state.loggedIn,
};
export default {
    state,
    actions,
    mutations,
    getters,
    // checkUserIsAuthenticated
}