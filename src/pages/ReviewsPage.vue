<template>
  <div>
    <Navigation />
    <h1>Reviews</h1>
  </div>
</template>

<script>
import Navigation from "../components/NavBar.vue";

export default {
  name: "Reviews",
  components: {
    Navigation,
  },
};
</script>

<style scoped>
h1 {
  color: #555555;
  margin-top: 4rem;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
}
</style>