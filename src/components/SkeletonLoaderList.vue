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
@media only screen and (max-width: 933px) {
  .loader-list {
    column-gap: 5rem;
    column-fill: initial;
    column-count: 1;
    padding-left: 2rem;
    padding-right: 5rem;
  }
}

@media only screen and (min-width: 933px) {
  .loader-list {
    column-gap: 5rem;
    column-fill: initial;
    column-count: 3;
    padding-left: 2rem;
    padding-right: 5rem;
  }
}

.loader {
  margin-bottom: 2rem;
  vertical-align: top;
  display: inline-flex;
  width: 100%;
}

.loader-1{
  height: 350px;
}

.loader-5{
  height: 400px;
}
</style>
