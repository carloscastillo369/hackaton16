import { createStore } from 'vuex'
import router from './../router';

export default createStore({
  state: {
    users: [],
    user: {}
  },
  mutations: {
    getUsersMutation(state, payload) {
      state.users = payload;
    },

    deleteUserMutation(state, payload) {
      state.users = state.users.filter(user => user.id !== payload);
    },

    getUserMutation(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    getUsersAction({commit}) {
      fetch('http://localhost:3000/users', {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          console.log(data)
          commit('getUsersMutation', data);
      })
    },

    createUserAction({commit}, user) {
      fetch('http://localhost:3000/users', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
          .then(res => {
            router.push('/users');
          })
    },
    deleteUserAction({commit}, id) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE'
      })
        .then(res => {
          commit('deleteUserMutation', id);
      })
    },
    getUserAction({commit}, id) {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'GET'
      })
        .then(res => {
          return res.json();
      })
        .then(data => {
          console.log(data)
          commit('getUserMutation', data);
      })
    },

    updateUserAction({commit}, user) {
      
      fetch(`http://localhost:3000/users/${user.id}`, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(res => {
          router.push('/users');
        })
    }
  },
  modules: {
  }
})