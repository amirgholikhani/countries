export default {
  increment(state: any) {
    state.count++;
  },
  setResources(state: any, data: any) {
    state.resources = data;
  },
  setLoading(state: any, loading: boolean) {
    state.loading = loading;
  },
};
