import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 存储状态
  state: {
    count: 0
  },
  // 计算方法
  mutations: {
    add(state, num) {
      state.count += num;
    }
  },
  //计算属性
  getters: {

  },
  //异步请求
  actions: {
    // 提交的是mutations，而不是直接修改状态
    // 异步请求

    // 请求数据  修改list -> 调用mutations

  },
  modules: {
  }
})
