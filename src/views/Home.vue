<template>
  <div class="home">
    <button class="bg-green-400 p-4" v-on:click="increment">onClick</button>
    <span class="text-red-400 m-5">{{ count }}</span>
    <p v-show="loading">Loading ...</p>
    <div class="flex flex-wrap items-center justify-center">
      <div
        v-for="(resource, index) in resources"
        class="w-12/12 md:w-3/12 p-5"
        v-bind:key="index"
      >
        <HelloWorld :resource="resource" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
  computed: {
    ...mapGetters(["count", "resources", "loading"]),
  },
  mounted() {
    this.$store.dispatch("getResources");
  },
})
export default class Home extends Vue {
  private count: number = this.$store.state.count;
  private resources: number = this.$store.state.resources;
  private loading: number = this.$store.state.loading;
  increment(): unknown {
    return this.$store.dispatch("increment");
  }
}
</script>
