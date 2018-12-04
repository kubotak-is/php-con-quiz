import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "@/store/modules/user";
import answers from "@/store/modules/answers";

export const store = new Vuex.Store({
  modules: {
    user,
    answers
  }
});
