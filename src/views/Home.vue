<template>
  <div class="home">
    <button v-on:click="increment">onClick</button>
    <span>{{ count }}</span>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
    ...mapGetters(["count"]),
  },
})
export default class Home extends Vue {
  private count: number = this.$store.state.count;
  increment(): unknown {
    return this.$store.dispatch("increment");
  }
}
</script>
