import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import com from './mixin/com'

Vue.config.productionTip = false;
Vue.mixin(com);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
