const MUTATIONS = {
  SET_ANSER: "SET_ANSER"
};

export default {
  namespaced: true,
  state: () => ({
    answers: {}
  }),
  getters: {
    answers: state => {
      return state.answers;
    }
  },
  mutations: {
    [MUTATIONS.SET_ANSER](state, payload) {
      state.answers[payload.id] = payload.key;
    }
  },
  actions: {
    add({ commit }, { id, key }) {
      commit(MUTATIONS.SET_ANSER, { id, key });
      return Promise.resolve(true);
    }
  }
};
