<template>
  <div class="search-result">
    <top-bar> 
        <p class="title" v-if="isBusy">Searching for<span class="query"> "{{query}}"</span></p>
        <p class="title" v-else>Search Results for <span class="query"> "{{query}}"</span></p>
    </top-bar>
    <div class="container">
      <staggered-gallery :images="images"></staggered-gallery>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import base from "../mixins/base"
import TopBar from "../components/TopBar.vue"
import StaggeredGallery from "../components/StaggeredGallery.vue"

export default Vue.extend({
    name: 'SearchResult',
    props: {
        query: {
            type: String,
            required: true
        }
    },
    mixins: [base],
  components: {
    'top-bar': TopBar,
    'staggered-gallery': StaggeredGallery
  },
  computed: {
    
  },
  data(){
    return {
        images: []

    }
  },
  methods: {
      searchPhotos(){
        this.beginLoading(`Searching for`)
        this.resetError()
        this.$store.dispatch("searchImages", this.query)
        .then((data) => {
            this.images = data
            console.log(data)
        }).catch((error) =>{
            this.setError(error)
        }).finally(() => {
            this.finishLoading()
        })
      }
  },
  mounted() {
        this.searchPhotos()  
    }
})
</script>

<style scoped lang="scss">
  
  .title{
      font-weight: 600;
      font-size: 2.5rem;
      color: #3d485a;
      margin-left: 12rem;
  }
 .query{
    font-weight: 300;
    color: #737985;
  }

</style>
