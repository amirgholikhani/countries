import Vue from "vue";
import Vuex from "vuex";
import countries from "@/store/country";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { countries },
});
