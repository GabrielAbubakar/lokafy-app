<template>
  <div class="review-card">
    <div class="review-img-container">
      <img v-bind:src="img" alt="city-img" />
    </div>

    <div class="review-box">
      <p class="review-text">"{{ review }}"</p>
      <a href="">+ Read More</a>

      <h2>{{ name }}</h2>
      <p>Tour of {{ city }}</p>
    </div>
  </div>
</template>



<script>
export default {
  name: "ReviewCard",
  props: ["name", "city", "review", "img"],
};
</script>



<style scoped>
.review-card {
  margin-bottom: 1rem;
}

.review-img-container {
  /* height: 40%;
  overflow: hidden; */
  height: 17rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.review-box {
  padding: 1rem 2rem 2rem 2rem;
  background-color: rgb(247, 247, 247);
}

.review-text {
  font-size: 1.375em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-box a {
  text-align: right;
  display: block;
  margin-bottom: 3rem;
  text-decoration: none;
  font-size: 1.125rem;
  color: #555;
}

.review-box h2 {
  color: rgb(10, 166, 191);
  font-size: 1.5rem;
}
</style>
