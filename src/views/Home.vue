<template>
  <div class="home">
    <top-bar>
      <div class="search-wrapper">
        <div class="search-bar-wrapper">
          <input
            @keyup.enter="onEnter"
            v-model="searchString"
            class="search-bar"
            type="text"
            placeholder="Search for photos"
          />
          <div class="search-icon">
            <i class="ri-search-line"></i>
          </div>
        </div>
      </div>
    </top-bar>
    <div class="container">
      <staggered-gallery :images="images"></staggered-gallery>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import StaggeredGallery from "../components/StaggeredGallery.vue"

export default {
  name: "Home",
  components: {
    "top-bar": TopBar,
    "staggered-gallery": StaggeredGallery,
  },
  computed: {
    images() {
      return this.$store.getters.images;
    },
  },
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    onEnter() {
      this.$router.push(`/search?query=${this.searchString}`);
    },
  },
  mounted() {
    this.$store.dispatch("fetchImages");
  },
};
</script>

<style scoped lang="scss">
.search-bar {
  padding: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  padding-left: 4rem;
  box-shadow: 0 4px 8px 0 #d3d7dd, 0 6px 20px 0 #d3d7dd;
  width: 100%;
}

.search-bar::placeholder {
  color: #616f86;
  font-weight: 500;
}

.search-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.search-icon {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  height: 100%;
  align-items: center;
  padding-left: 2rem;
  color: #a4acb9;
}

.search-bar-wrapper {
  display: flex;
  width: 80%;
  position: relative;
}
</style>
