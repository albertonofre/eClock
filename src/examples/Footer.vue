<template>
  <footer class=" footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-end">
        <div class=" mb-4 col-lg-4 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="this.$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, echo por
            <i class="fa fa-heart"></i>
            <a
              href="https://www.creative-tim.com"
              class="font-weight-bold"
              target="_blank"
              > Alberto </a
            >
            Onofre Garduño.
          </div>
        </div>
       
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
};
</script>
