<template>
  <Reviews />
</template>

<script>
import Reviews from "./pages/ReviewsPage.vue";

export default {
  name: "App",
  components: {
    Reviews,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  padding-bottom: 7rem;
}
</style>
