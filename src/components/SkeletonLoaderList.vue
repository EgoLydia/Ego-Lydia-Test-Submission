<template>
  <div class="loader-list">
    <skeleton-loader
      class="loader"
      v-for="currentCount in count"
      :key="currentCount"
    ></skeleton-loader>
  </div>
</template>

<script>
import SkeletonLoader from "./SkeletonLoader.vue";

export default {
  name: "SkeletonLoaderList",
  data() {
    return {
      count: 5,
    };
  },
  components: {
    "skeleton-loader": SkeletonLoader,
  },
};
</script>

<style scoped lang="scss">

.loader-list {
  column-gap: 3rem;
  column-fill: initial;
  column-count: 3;
}

.loader {
  margin-bottom: 2rem;
  vertical-align: top;
  width: 100%;
  height: 300px;
}
</style>
