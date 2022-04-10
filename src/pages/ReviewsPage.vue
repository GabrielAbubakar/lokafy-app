<template>
  <div>
    <Navigation />

    <div class="review-container">
      <h1>Reviews</h1>

      <div class="card-container">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

      <div class="button-container">
        <input
          aria-label="button"
          type="button"
          class="more-button"
          value="More Reviews"
        />

        <router-link to="/formpage" class="review-button"
          >Write a Review</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/NavBar.vue";
import ReviewCard from "../components/ReviewCard.vue";

export default {
  name: "Review",
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
  gap: 2rem;
}

.more-button {
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

.review-button {
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  padding: 0.7rem 1.4rem;
  background-color: #555;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  font-size: 1rem;
}

.more-button:hover {
  text-decoration: underline;
}

.review-button:hover {
  text-decoration: underline;
}

@media (max-width: 1000px) {
  .card-container {
    max-width: 800px;
  }
}

@media (max-width: 800px) {
  .card-container {
    max-width: 600px;
    padding-inline: 1rem;
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .card-container {
    grid-template-columns: 1fr;
  }
}
</style>