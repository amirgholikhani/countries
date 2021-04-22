<template>
  <div class="about">
    <div class="w-full md:w-11/12 mb-6 text-left mx-6 md:mx-20">
      <router-link
        class="mx-2 border border-gray-400 rounded p-2 text-sm mb-2 inline-block"
        to="/"
      >
        <font-awesome-icon icon="arrow-left" />
        <span class="px-3">Back</span>
      </router-link>
    </div>
    <div v-show="loading">
      <font-awesome-icon icon="spinner" spin />
    </div>
    <div
      v-if="resource"
      class="flex flex-wrap justify-center items-center mx-auto w-full md:w-11/12"
    >
      <div class="w-full md:w-6/12 lg:w-5/12 px-4">
        <div class="shadow-lg">
          <img
            class="w-full object-cover"
            :src="resource.flag"
            :alt="resource.name"
          />
        </div>
      </div>
      <div class="w-full md:w-6/12 lg:w-7/12 px-8 py-6">
        <h1 class="text-black font-bold text-2xl px-3 text-left mb-8">
          {{ resource.name }}
        </h1>
        <div class="flex flex-wrap justify-center text-black">
          <div class="w-full sm:w-1/2 md:w-full lg:w-1/2 px-3 text-left text-md mb-6">
            <div class="mb-2">
              <span class="font-bold">Native Name: </span>
              <span>{{ resource.nativeName }}</span>
            </div>
            <div class="mb-2">
              <span class="font-bold">Population: </span>
              <span>{{
                resource.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}</span>
            </div>
            <div class="mb-2">
              <span class="font-bold">Region: </span>
              <span>{{ resource.region }}</span>
            </div>
            <div class="mb-2">
              <span class="font-bold">Sub Region: </span>
              <span>{{ resource.subregion }}</span>
            </div>
            <div class="mb-2">
              <span class="font-bold">Capital: </span>
              <span>{{ resource.capital }}</span>
            </div>
          </div>
          <div class="w-full sm:w-1/2 md:w-full lg:w-1/2 px-3 text-left">
            <div class="mb-2">
              <span class="font-bold">Top Level Domain: </span>
              <span>{{ resource.topLevelDomain.join(",") }}</span>
            </div>
            <div class="mb-2">
              <span class="font-bold">Currencies: </span>
              <span>{{
                resource.currencies.map((currency) => currency.name).join(",")
              }}</span>
            </div>
            <div class="mb-2">
              <span class="font-bold">Languages: </span>
              <span>{{
                resource.languages.map((language) => language.name).join(",")
              }}</span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span>Border Countries</span>
          <div>
            <router-link
              class="mx-2 border border-gray-400 rounded p-2 text-sm mb-2 inline-block"
              v-for="(border, index) in resource.borders"
              v-bind:key="index"
              :to="{ path: `/detail/${border}` }"
            >
              {{ getCountryName(border) }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["resource", "resources", "loading"]),
  },
  watch: {
    "$route.params.name": function (id) {
      let type = "name";
      const value = this.$route.params.name;
      if (value.length === 3 && value === value.toUpperCase()) {
        type = "code";
      }
      this.$store.dispatch("getResource", { type, value });
    },
  },
  mounted: function () {
    let type = "name";
    const value = this.$route.params.name;
    if (value.length === 3 && value === value.toUpperCase()) {
      type = "code";
    }
    this.$store.dispatch("getResource", { type, value });
    this.$store.dispatch("getResources");
  },
})
export default class Detail extends Vue {
  private resource: unknown = this.$store.state.resource;
  private resources: any = this.$store.state.resources;
  private loading: number = this.$store.state.loading;

  public getCountryName(code: string): string {
    return this.resources.filter(
      (resourceObj: any) => resourceObj.alpha3Code === code
    )[0]?.name;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
