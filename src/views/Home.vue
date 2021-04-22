<template>
  <div class="home bg-white dark:bg-gray-900">
    <div v-show="loading">
      <font-awesome-icon icon="spinner" spin />
    </div>
    <div class="w-10/12 mx-auto flex flex-wrap justify-center">
      <div
        v-for="(resource, index) in resources"
        class="w-full md:w-1/2 lg:w-4/12 xl:w-3/12 px-6 mb-5"
        v-bind:key="index"
      >
        <Country :resource="resource" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import Country from "@/components/Country.vue";

@Component({
  components: {
    Country,
  },
  computed: {
    ...mapGetters(["resources", "loading"]),
  },
  mounted() {
    this.$store.dispatch("getResources");
  },
})
export default class Home extends Vue {
  private count: number = this.$store.state.count;
  private resources: number = this.$store.state.resources;
  private loading: number = this.$store.state.loading;
}
</script>
