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
  background-color: #e6e6e6;
  width: 30%;
  padding: 0.4rem;
  margin-top: 0.4rem;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: skeleton-animation;
  animation-timing-function: linear;
}

.author-loader {
  background-color: #e6e6e6;
  width: 50%;
  padding: 0.4rem;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: skeleton-animation;
  animation-timing-function: linear;
}

@keyframes skeleton-animation {
  0% {
    background-position: -33.4286rem 0;
  }
  100% {
    background-position: 33.4286rem 0;
  }
}
</style>
