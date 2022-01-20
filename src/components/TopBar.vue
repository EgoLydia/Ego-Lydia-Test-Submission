<template>
  <div>
    <div class="top-bar-bg"> 
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  components: {
  },
  data(){
    return {
    }
  },
  methods: {
    
  },
}
</script>

<style scoped lang="scss">
  .top-bar-bg {
    background-color: #dde2e9;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  

</style>
