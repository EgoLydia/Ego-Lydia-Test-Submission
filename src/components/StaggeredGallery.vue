<template>
      <div class="card-list">
        <card
          class="card-item"
          v-for="image in images"
          :key="image.url"
          :image="image.url"
          :author="image.author"
          :location="image.location"
        ></card>
      </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "StaggeredGallery",
  props: ['images'],
  components: {
    'card': Card,
  },
};
</script>

<style scoped lang="scss">

.card-list {
  column-gap: 3rem;
  column-fill: initial;
  column-count: 3;
}

.card-item {
  margin-bottom: 2rem;
  vertical-align: top;
}
</style>
