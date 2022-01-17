<template>
    <div class="card">
        <img class="card-img" :src="image" alt="">
        <div class="card-overlay">
            <div class="card-footer">
            <p class="card-title">{{author}}</p> 
            <p class="card-subtitle">{{location}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    image: {
    type: String,
    required: true
    },
    author: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: 'Not Available'
    }
  },
  components: {
  }
}
</script>

<style scoped lang="scss">
  .card {
    border-radius: 0.6rem;
    overflow: hidden;
    position: relative;
    
  }
  .card-img{
    width: 300px;
    height: 500px;
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
  .card-subtitle{
    font-weight: 100;
    font-size: 0.875rem;
  }
  .card-footer {
    margin-top: auto;
    color: white;
    padding: 0.625rem;
  }
  
 
</style>
