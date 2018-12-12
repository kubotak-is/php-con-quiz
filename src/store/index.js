import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import user from "@/store/modules/user";
import answers from "@/store/modules/answers";

export const store = new Vuex.Store({
  modules: {
    user,
    answers
  },
  plugins: [createPersistedState({ key: "laravel-quiz" })]
});
