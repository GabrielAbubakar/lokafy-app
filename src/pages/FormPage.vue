<template>
  <div>
    <Navigation />

    <div class="review-container">
      <h1>Reviewssss</h1>

      <div class="card-container">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

      <div class="button-container">
        <input aria-label="button" type="button" value="More Reviews" />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/NavBar.vue";
import ReviewCard from "../components/ReviewCard.vue";

export default {
  name: "Reviews",
  components: {
    Navigation,
    ReviewCard,
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
  margin-bottom: 2rem;
  text-align: center;
}

.card-container {
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.button-container {
  display: flex;
  justify-content: center;
}

input[type="button"] {
  cursor: pointer;
  text-align: center;
  padding: 0.7rem 1.4rem;
  background-color: #0aa6bf;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
}

input[type="button"]:hover {
  text-decoration: underline;
}
</style>