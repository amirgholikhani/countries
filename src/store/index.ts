import Vue from "vue";
import Vuex from "vuex";
import countries from "@/store/country";
import theme from "@/store/theme";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { countries, theme },
});
