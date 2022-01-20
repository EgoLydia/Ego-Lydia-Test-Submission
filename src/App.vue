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

@media only screen and (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: -2.5rem;
  }

  .card-list {
    column-gap: 3rem;
    column-fill: initial;
    column-count: 1;
  }

  .loader-list {
    column-gap: 5rem;
    column-fill: initial;
    column-count: 1;
    padding-left: 2rem;
    padding-right: 5rem;
  }

  .modal-content {
    background-color: black;
    max-height: 75%;
    overflow: hidden;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  .modal-footer {
    background-color: white;
    padding: 2rem;
    padding-top: 0;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }
}

@media (min-width: 640px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }

  .card-list {
    column-gap: 3rem;
    column-fill: initial;
    column-count: 1;
  }

  .modal-content {
    background-color: black;
    max-height: 75%;
    overflow: hidden;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  .modal-footer {
    background-color: white;
    padding: 2rem;
    padding-top: 0;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }

  .card-list {
    column-gap: 3rem;
    column-fill: initial;
    column-count: 3;
  }

  .loader-list {
    column-gap: 5rem;
    column-fill: initial;
    column-count: 3;
    padding-left: 2rem;
    padding-right: 5rem;
  }

  .modal-content {
    background-color: black;
    margin-right: 4rem;
    margin-left: 4rem;
    max-height: 75%;
    overflow: hidden;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  .modal-footer {
    background-color: white;
    padding: 2rem;
    padding-top: 0;
    margin-right: 4rem;
    margin-left: 4rem;
    border-bottom-left-radius: 0.625rem;
    border-bottom-right-radius: 0.625rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 14rem;
    padding-right: 14rem;
    margin-top: -2.5rem;
  }
}
</style>
