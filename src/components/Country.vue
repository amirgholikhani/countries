<template>
  <div class="rounded shadow-lg overflow-hidden">
    <router-link :to="{ path: `/detail/${resource.name}` }">
      <div>
        <img class="w-full" :src="resource.flag" :alt="resource.name" />
      </div>
      <div class="bg-white dark:bg-gray-800 p-5 text-left">
        <h1 class="text-black dark:text-white font-bold mb-4">{{ resource.name }}</h1>
        <ul>
          <li class="mb-1 text-black dark:text-white text-sm">
            <span class="font-bold">Population: </span
            >{{
              resource.population
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }}
          </li>
          <li class="mb-1 text-black dark:text-white text-sm">
            <span class="font-bold">Region: </span>{{ resource.region }}
          </li>
          <li class="mb-1 text-black dark:text-white text-sm">
            <span class="font-bold">Capital: </span>{{ resource.capital }}
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Country extends Vue {
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
