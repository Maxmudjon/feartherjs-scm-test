import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./vuex/store";

Vue.use(Vuex);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
