import Vuex from "vuex";
import Vue from "vue";
import state from '@/store/country/state';
import mutations from "@/store/country/mutations";
import actions from "@/store/country/actions";
import getters from "@/store/country/getters";

Vue.use(Vuex);

export default {
    state,
    getters,
    mutations,
    actions,
};