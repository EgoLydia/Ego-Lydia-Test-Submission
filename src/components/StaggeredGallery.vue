<template>
  <div class="card-list">
    <card
      class="card-item"
      v-for="(image, index) in images"
      :key="index"
      :image="image.urls"
      :author="image.author"
      :location="image.location"
    ></card>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "StaggeredGallery",
  props: ["images"],
  components: {
    card: Card,
  },
};
</script>

<style scoped lang="scss">
.card-item {
  margin-bottom: 2rem;
  vertical-align: top;
}
</style>
