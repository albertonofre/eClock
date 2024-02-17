<template>
  <div
    v-show="this.$store.state.layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <sidenav
   
  />
  <main
    class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
  >
   
  
    <router-view />
    <app-footer v-show="this.$store.state.showFooter" />
   
  </main>
</template>
<script>
import Sidenav from "./examples/Sidenav";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  components: {
    Sidenav,
 
    AppFooter
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"])
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute
      };
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  }
};
</script>
