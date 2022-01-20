<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media only screen and (max-width: 933px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }
}

@media only screen and (min-width: 933px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }
}

@media only screen and (min-width: 1288px) {
  .container {
    padding-left: 14rem;
    padding-right: 14rem;
    margin-top: -2.5rem;
  }
}
</style>
