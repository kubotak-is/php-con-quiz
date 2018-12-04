import { firebaseApp } from "@/libs/firebase";

const MUTATIONS = {
  SET_USER: "SET_USER"
};

export default {
  namespaced: true,
  state: () => ({
    user: {}
  }),
  getters: {
    user: state => {
      return state.user;
    },
    isLogin: state => {
      return state.user !== {};
    }
  },
  mutations: {
    [MUTATIONS.SET_USER](state, payload) {
      state.user = payload.user;
    }
  },
  actions: {
    initialize({ commit }) {
      firebaseApp
        .auth()
        .signInAnonymously()
        .catch(err => {
          alert(err.message);
        });
      firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
          commit(MUTATIONS.SET_USER, { user });
        }
      });
    }
  }
};
