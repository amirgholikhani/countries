import axios from "axios";

export default {
  increment({ commit }: any) {
    commit("increment");
  },
  getResources({ commit }: any) {
    commit("setLoading", true);
    return axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;region;flag;population;alpha3Code"
      )
      .then((response: any) => {
        commit("setResources", response.data);
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
  getResource({ commit }: any, payload: any) {
    const { type, value } = payload;
    let url = `https://restcountries.eu/rest/v2/name/${value}`;
    if (type === "code") {
      url = `https://restcountries.eu/rest/v2/alpha/${value}`;
    }
    commit("setLoading", true);
    return axios
      .get(url)
      .then((response: any) => {
        commit("setResource", type === "code" ? response.data : response.data[0]);
      })
      .finally(() => {
        commit("setLoading", false);
      });
  },
};
