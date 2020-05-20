<template>
  <div>
    <BackNavbar></BackNavbar>
    <div class="row">
      <BackSidebar></BackSidebar>
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import BackNavbar from '@/components/BackNavbar.vue';
import BackSidebar from '@/components/BackSidebar.vue';

export default {
  components: {
    BackNavbar,
    BackSidebar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body {
  font-size: 0.875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Content
 */

[role='main'] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role='main'] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}
</style>
