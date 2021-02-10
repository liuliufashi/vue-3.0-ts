import { createStore } from 'vuex'

export default createStore({
  state: {
    data:1
  },
  mutations: {
    che(state){
      console.log(state,"触发了")
      state.data=state.data+=1;
    }
  },
  actions: {
  },
  modules: {
    A:{
      state:{
        data:"握手modules"
      }
    }
  }
})
