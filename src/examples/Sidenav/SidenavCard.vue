<template>
  <div
    class="card card-plain shadow-none"
    id="sidenavCard"
  >
    <div class="p-3 card-body text-center w-100 pt-0">
      <img
        class="w-50 mx-auto"
        src="@/assets/img/illustrations/icon-documentation.svg"
        alt="sidebar_illustration"
      />
    
      <h6  class="mb-0 text-dark up">Necesitas Ayuda ?</h6>
    
    </div>
 
    <a
      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
      target="_blank"
      
      class="mb-3  btn btn-dark btn-sm w-100"
      >Contactanos</a
    >
  
  </div>
</template>
<script>
import img from "../../assets/img/illustrations/icon-documentation.svg";

export default {
  name: "sidenav-card",
  props: ["textPrimary", "textSecondary", "iconClass"],
  data() {
    return {
      img
    };
  }
};
</script>
