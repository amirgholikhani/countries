<template>
  <div id="app" class="bg-white dark:bg-gray-900">
    <div
      id="nav"
      class="flex justify-between px-6 py-5 mb-6 w-full items-center shadow-lg"
    >
      <h1 class="text-2xl font-bold dark:text-white">Where in the World ?</h1>
      <button
        @click="toggleMode"
        class="border border-gray-400 p-2 mx-2 dark:text-white"
      >
        <font-awesome-icon :icon="theme === 'dark' ? 'sun' : 'moon'" />
        <span class="dark:text-white">
          {{ theme === "dark" ? "light" : "dark" }} Mode
        </span>
      </button>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters({ theme: "getTheme" }),
  },
  watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
  beforeMount() {
    this.$store.dispatch("initTheme");
  },
})
export default class App extends Vue {
  toggleMode(): void {
    this.$store.dispatch("toggleTheme");
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
