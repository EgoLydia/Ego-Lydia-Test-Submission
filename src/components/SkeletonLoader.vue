<template>
  <div v-if="isloading" class="image-loader">
    <div class="author-loader"></div>
    <div class="location-loader"></div>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: {
    isloading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.image-loader {
  background-color: #f5f5f5;
  border-radius: 0.6rem;
  display: flex;
  flex-flow: column;
  height: 500px;
  width: 300px;
  justify-content: flex-end;
  padding: 1rem;
}

.location-loader {
  width: 30%;
  padding: 0.4rem;
  margin-top: 0.4rem;
  animation: skeleton-animation 1s linear infinite alternate;
}

.author-loader {
  width: 50%;
  padding: 0.4rem;
  animation: skeleton-animation 1s linear infinite alternate;
}

@keyframes skeleton-animation {
  0% {
    background-color: #e6e6e6;
  }
  100% {
    background-color: #d6d5d5;
  }
}
</style>
