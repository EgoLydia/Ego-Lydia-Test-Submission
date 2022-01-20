<template>
  <div>
    <div v-if="isloading" class="image-loader">
      <div class="author-loader"></div>
      <div class="location-loader"></div>
    </div>
    <div v-show="!isloading" @click="openModal" class="card">
      <img @load="onloaded" class="card-img" :src="image" alt="" />
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
          <img class="modal-img" :src="image" alt="" />
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
export default {
  name: "Card",
  props: {
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "Not Available",
    },
  },
  data() {
    return {
      isloading: true,
      showModal: false,
    };
  },
  components: {},
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
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
}
.card-title {
  font-weight: 600;
}
.card-subtitle {
  font-weight: 100;
  font-size: 0.875rem;
}
.card-footer {
  margin-top: auto;
  color: white;
  padding: 0.625rem;
}
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
}
.author-loader {
  background-color: #e6e6e6;
  width: 50%;
  padding: 0.4rem;
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

.modal-content {
  background-color: #fefefe;
  // padding: 20px;
  border: 1px solid #888;
  margin-right: 4rem;
  border-radius: 0.625rem;
  // height: 100%;
}
.modal-wrapper {
  width: 80%;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
}
.modal-img {
  background-size: contain;
  width: 100%;
  max-height: 100%;
  margin-bottom: 0;
}
.modal-footer {
  background-color: white;
  padding-left: 2rem;
  margin-right: 4rem;
  border-style: none;
}
.modal-title {
  font-weight: 600;
}
.modal-subtitle {
  font-weight: 100;
  font-size: 0.875rem;
}
.close {
  color: #aaa;
  font-size: 1.75rem;
  margin-left: auto;
}
.close:hover,
.close:focus {
  cursor: pointer;
}
</style>
