export default {
  increment(state: any) {
    state.count++;
  },
  setResources(state: any, data: any) {
    state.resources = data;
  },
  setResource(state: any, data: any) {
    state.resource = data;
  },
  setLoading(state: any, loading: boolean) {
    state.loading = loading;
  },
};
