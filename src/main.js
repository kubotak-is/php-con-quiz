import Vue from "vue";
import App from "@/App.vue";
import { router } from "@/router";
import { store } from "@/store/index";
import "@/registerServiceWorker";

Vue.config.productionTip = false;

/** scss */
import "@/scss/common.scss";

store.dispatch("user/initialize");

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
