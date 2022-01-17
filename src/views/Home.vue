<template>
  <div class="home">
    <div class="search-bg"> 
      <input class="search-bar" type="text" placeholder="Search for photos">
    </div>
    <div class="card-list">
      <card v-for="image in images" :key="image.url" :image="image.url" :author="image.author" :location="image.location"></card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"

export default {
  name: 'Home',
  components: {
    'card': Card
  },
  computed: {
    images(){
      return this.$store.getters.images
    }
  },
  data(){
    return {
      // images: [
      //   {
      //     url:"https://images.unsplash.com/photo-1642365569712-ace9b9704128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      //     author: "Fredrick Apata",
      //     location: "Lagos Nigeria"
      //   },
      //   {
      //     url:"https://images.unsplash.com/photo-1642265365901-3aa869337f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      //     author: "Rachel Goodymoore",
      //     location: "Pretoria South Africa"
      //   },
      //   {
      //     url:"https://images.unsplash.com/photo-1642375112614-33d361858a58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      //     author: "Ogbonda Rhoda",
      //     location: "London United Kingdom"
      //   },
      // ]

    }
  },
  mounted() {
    this.$store.dispatch("fetchImages")
  }
}
</script>

<style scoped lang="scss">
  .search-bg {
    background-color: #dde2e9;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
  }
  .search-bar {
    padding: 1.2rem;
    width: 80%;
    border: none;
    border-radius: 0.3rem;

  }
   .card-list {
    display: flex;
    margin-top: -2rem;
    justify-content: center;
  }
</style>
