import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    user: {}
  },

  mutations: {
    getUsersMutation(state, payload){
      state.users = payload;
    },

    getUserMutation(state, payload){
      state.user = payload;
    }
  },

  actions: {
    async getUsersAction({commit}){
      const info = await fetch('http://localhost:3000/users');
      let users = await info.json();
      commit('getUsersMutation', users);
    },

    async getUserAction({commit}, id){
      const info = await fetch(`http://localhost:3000/users/${id}`);
      let user = await info.json();
      commit('getUserMutation', user);
    },

    async deleteUserAction({commit},id){
      const info = await fetch(`http://localhost:3000/users/${id}`,{
        method: 'DELETE'
      })
    }
  },

  modules: {
  }
})
