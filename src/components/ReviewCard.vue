<template>
  <div class="review-card">
    <div class="review-img-container">
      <img
        src="https://lokafy.s3.amazonaws.com/citypicture/None_victor-garcia-1093050-unsplash_citypicture.jpg.1200x1600_q85_box-3%2C0%2C4045%2C3032_crop-scale_detail_upscale.jpg"
        alt="city-img"
      />
    </div>

    <div class="review-box">
      <p class="review-text">
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni autem
        voluptates minus praesentium cupiditate! Neque voluptatum ut vel
        repellat optio!"
      </p>
      <a href="">+ Read More</a>

      <h2>Matt</h2>
      <p>Tour of Unknown</p>
    </div>
  </div>
</template>



<script>
export default {
  name: "ReviewCard",
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
