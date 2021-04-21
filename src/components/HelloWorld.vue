<template>
  <div class="rounded shadow-md overflow-hidden">
    <div>
      <img class="w-full h-64" :src="resource.flag" :alt="resource.name" />
    </div>
    <div class="bg-white p-5 text-left">
      <h1 class="text-xl font-bold mb-4">{{ resource.name }}</h1>
      <ul>
        <li class="mb-1"><span class="font-bold">Population: </span>{{ resource.population }}</li>
        <li class="mb-1"><span class="font-bold">Region: </span>{{ resource.region }}</li>
        <li class="mb-1"><span class="font-bold">Capital: </span>{{ resource.capital }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private resource: {
    flag: string;
    name: string;
    population: string;
    region: string;
    capital: string;
  } = { flag: "", name: "", population: "", region: "", capital: "" };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
