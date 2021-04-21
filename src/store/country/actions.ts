import axios from "axios";

export default {
  increment({ commit }: any) {
    commit("increment");
  },
  getResources({ commit }: any) {
    commit("setLoading", true);
    return axios.get('https://restcountries.eu/rest/v2/all').then((response: any) => {
      commit("setResources", response.data);
    }).finally(() => {
      commit("setLoading", false);
    });
  }
};
