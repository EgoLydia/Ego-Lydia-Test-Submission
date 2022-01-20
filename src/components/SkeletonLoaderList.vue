<template>
  <div class="loader-list">
    <skeleton-loader class="loader loader-1"></skeleton-loader>
    <skeleton-loader class="loader loader-2"></skeleton-loader>
    <skeleton-loader class="loader loader-3"></skeleton-loader>
    <skeleton-loader class="loader loader-4"></skeleton-loader>
    <skeleton-loader class="loader loader-5"></skeleton-loader>
    <skeleton-loader class="loader loader-5"></skeleton-loader>
  </div>
</template>

<script>
import SkeletonLoader from "./SkeletonLoader.vue";

export default {
  name: "SkeletonLoaderList",
  data() {
    return {
    };
  },
  components: {
    "skeleton-loader": SkeletonLoader,
  },
};
</script>

<style scoped lang="scss">
.loader {
  margin-bottom: 2rem;
  vertical-align: top;
  display: inline-flex;
  width: var(--full-height);
}

.loader-1{
  height: 350px;
}

.loader-5{
  height: 400px;
}
</style>
