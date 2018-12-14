import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/question/:id",
      name: "question",
      component: () => import("@/views/Question.vue")
    },
    {
      path: "/result",
      name: "result",
      component: () => import("@/views/Result.vue")
    }
  ]
});
