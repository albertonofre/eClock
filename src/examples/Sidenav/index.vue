<template>
  <div
  
    v-show="this.$store.state.layout === 'default'"
    class="min-height-300 position-absolute w-100"
    :class="`${this.$store.state.darkMode ? 'bg-transparent' : 'bg-success'}`"
  />
  <aside
    style="border: 2px solid #2dce89;"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="`${
      this.$store.state.isRTL
        ? 'me-3 rotate-caret fixed-end'
        : 'fixed-start ms-3'
    } 
    ${
      this.$store.state.layout === 'landing'
        ? 'bg-transparent shadow-none'
        : ' '
    } ${this.$store.state.sidebarType}`"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <router-link class="m-0 navbar-brand text-center" to="/">
       
        <span style="font-size: 20px;" class="ms-2 font-weight-bold ">Alberto OG</span>
      </router-link>
    </div>
    <hr style="height: 3px; background-color: black ;"  class="mx-5 mt-n2 " />
    <sidenav-list :cardBg="custom_class" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-ct-dark.png";
import logoWhite from "@/assets/img/logo-ct.png";

export default {
  name: "index",
  components: {
    SidenavList
  },
  data() {
    return {
      logo,
      logoWhite
    };
  },
  props: ["custom_class", "layout"]
};
</script>
