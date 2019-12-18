import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
//初始化的原始值
const state={
  count:1,
  msh:'money'
}
//初始化数据需要在计算一下，类似于computed
const getters={
  count(state){
    return state.count
  },
  msh(state){
    return state.msh
  }
}
//内部事件需要额外提添加一下，控制state
const mutations={
  myleo(state){
    state.count++;
  },
  myning(state){
    if(state.count>1){
      state.count--;
    }
  },
  page(state){
    sessionStorage.setItem('key',state.msh)
  }
}
//正式click事件管理
const actions={
    add({commit}){
      commit('myleo')
    },
    reduce({commit}){
      commit('myning')
    },
    ths({commit}){
      commit('page')
    }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})




