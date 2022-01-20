<template>
  <div>
    <skeleton-loader :isloading="isloading"></skeleton-loader>
    <div v-show="!isloading" @click="openModal" class="card">
      <img @load="onloaded" class="card-img" :src="image.low" alt="thumbnail" />
      <div class="card-overlay">
        <div class="card-footer">
          <p class="card-title">{{ author }}</p>
          <p class="card-subtitle">{{ location }}</p>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal">
      <div class="modal-wrapper">
        <div @click="closeModal" class="close">
          <i class="ri-close-line"></i>
        </div>
        <div class="modal-content">
          <img class="modal-img" :src="image.high" alt="picture" />
        </div>
        <div class="modal-footer">
          <p class="modal-title">{{ author }}</p>
          <p class="modal-subtitle">{{ location }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "../components/SkeletonLoader.vue";

export default {
  name: "Card",
  props: ["image", "location", "author"],

  data() {
    return {
      isloading: true,
      showModal: false,
    };
  },
  components: {
    "skeleton-loader": SkeletonLoader,
  },
  methods: {
    onloaded() {
      this.isloading = false;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped lang="scss">

.card {
  border-radius: 0.6rem;
  overflow: hidden;
  position: relative;
}

.card-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1));
  width: 100%;
  height: 100%;
  display: flex;
}

.card-title {
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.card-subtitle {
  font-weight: 300;
  font-size: 0.75rem;
  margin-top: 0;
}

.card-footer {
  margin-top: auto;
  color: white;
  padding: 0.625rem;
  padding-left: 1.5rem
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: auto;
  background-color: #7d7e81cb;
}

.modal-wrapper {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  background-repeat: no-repeat;
}

.modal-title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0;
}

.modal-subtitle {
  font-weight: 300;
  font-size: 0.875rem;
  margin-top: 0;
}

.close {
  color: rgb(190, 188, 188);
  font-size: 1.75rem;
  margin-left: auto;
  cursor: pointer;
}
</style>
