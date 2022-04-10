<template>
  <div>
    <Navigation />

    <div class="review-container">
      <h1>Reviews</h1>

      <div class="card-container">
        <ReviewCard
          v-bind:key="reviews[item].name"
          v-for="item in count"
          :name="reviews[item].name"
          :city="reviews[item].city"
          :review="reviews[item].review"
          :img="reviews[item].imgSrc"
        />
        <!-- <ReviewCard />
        <ReviewCard />
        <ReviewCard /> -->
      </div>

      <p v-if="count + 2 >= reviews.length" class="review-check">
        No more Reviews
      </p>

      <div class="button-container">
        <input
          v-if="count + 2 < reviews.length"
          aria-label="button"
          type="button"
          class="more-button"
          value="More Reviews"
          v-on:click="incrementCount"
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

  data() {
    return {
      count: 4,
      reviews: [
        {
          name: "Stefan",
          city: "Helsinki",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/citypicture/44_helsinki-3778356_citypicture.jpg.1200x1600_q85_box-467%2C0%2C3096%2C1966_crop-scale_detail_upscale.jpg",
          review:
            "Die Führung war sehr gut. Es wurde auf meine Wünsche eingegangen. Ich kann absolut nicht klagen. Gerne wieder. ",
        },
        {
          name: "Lea",
          city: "Venice",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/citypicture/38_citypicture.jpg.1200x1600_q85_box-301%2C0%2C5028%2C3545_crop-scale_detail_upscale.jpg",
          review: "Très bonne expérience, à faire pour une première à Venise.",
        },
        {
          name: "Richard",
          city: "Vienna",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/userreview/938/bff121c8ca6f462b9606a7997d030bff_userpicturebff121c8ca6f462b9606a7997d030bff.1200x1600_q85_box-0%2C0%2C3264%2C2448_crop-scale_detail_upscale.jpg",
          review:
            "Wonderful. Our guide, Frediano, was a marvellous introduction to Vienna. In two hours we covered a wide range of buildings, churches and even patisseries. Would heartily recommend him.",
        },
        {
          name: "Michel",
          city: "Copenhagen",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/userreview/724/f79081813b494f68961642f6d5cc1de5_userpicturef79081813b494f68961642f6d5cc1de5.1200x1600_q85_box-0%2C0%2C4160%2C3120_crop-scale_detail_upscale.jpg",
          review:
            "sympa simple chalheureux très intéressant Personne charmente remplissant parfaitement son rôle Dear Dalit It was a pleasure to share this moment with you in Copenhagen this morning. Thank you for the quality of your presentation. Have a nice Weekend. Michel",
        },
        {
          name: "Matt",
          city: "Groningen",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/citypicture/None_victor-garcia-1093050-unsplash_citypicture.jpg.1200x1600_q85_box-3%2C0%2C4045%2C3032_crop-scale_detail_upscale.jpg",
          review:
            "Cycling through Groningen with Alexander was perfect. Our guide, Alexander, did an incredible job. He knew the city inside and out and happily honored our request to see neighborhoods instead of tourist spots. This was Alexanders first tour but he seemed like a well seasoned pro. He was gracious, polite, open to requests, and extremely easy going.",
        },
        {
          name: "Stefan",
          city: "Helsinki",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/citypicture/44_helsinki-3778356_citypicture.jpg.1200x1600_q85_box-467%2C0%2C3096%2C1966_crop-scale_detail_upscale.jpg",
          review:
            "Die Führung war sehr gut. Es wurde auf meine Wünsche eingegangen. Ich kann absolut nicht klagen. Gerne wieder. ",
        },
        {
          name: "Lea",
          city: "Venice",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/citypicture/38_citypicture.jpg.1200x1600_q85_box-301%2C0%2C5028%2C3545_crop-scale_detail_upscale.jpg",
          review: "Très bonne expérience, à faire pour une première à Venise.",
        },
        {
          name: "Richard",
          city: "Vienna",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/userreview/938/bff121c8ca6f462b9606a7997d030bff_userpicturebff121c8ca6f462b9606a7997d030bff.1200x1600_q85_box-0%2C0%2C3264%2C2448_crop-scale_detail_upscale.jpg",
          review:
            "Wonderful. Our guide, Frediano, was a marvellous introduction to Vienna. In two hours we covered a wide range of buildings, churches and even patisseries. Would heartily recommend him.",
        },
        {
          name: "Michel",
          city: "Copenhagen",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/userreview/724/f79081813b494f68961642f6d5cc1de5_userpicturef79081813b494f68961642f6d5cc1de5.1200x1600_q85_box-0%2C0%2C4160%2C3120_crop-scale_detail_upscale.jpg",
          review:
            "sympa simple chalheureux très intéressant Personne charmente remplissant parfaitement son rôle Dear Dalit It was a pleasure to share this moment with you in Copenhagen this morning. Thank you for the quality of your presentation. Have a nice Weekend. Michel",
        },
        {
          name: "Matt",
          city: "Groningen",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/citypicture/None_victor-garcia-1093050-unsplash_citypicture.jpg.1200x1600_q85_box-3%2C0%2C4045%2C3032_crop-scale_detail_upscale.jpg",
          review:
            "Cycling through Groningen with Alexander was perfect. Our guide, Alexander, did an incredible job. He knew the city inside and out and happily honored our request to see neighborhoods instead of tourist spots. This was Alexanders first tour but he seemed like a well seasoned pro. He was gracious, polite, open to requests, and extremely easy going.",
        },
        {
          name: "Richard",
          city: "Vienna",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/userreview/938/bff121c8ca6f462b9606a7997d030bff_userpicturebff121c8ca6f462b9606a7997d030bff.1200x1600_q85_box-0%2C0%2C3264%2C2448_crop-scale_detail_upscale.jpg",
          review:
            "Wonderful. Our guide, Frediano, was a marvellous introduction to Vienna. In two hours we covered a wide range of buildings, churches and even patisseries. Would heartily recommend him.",
        },
        {
          name: "Michel",
          city: "Copenhagen",
          imgSrc:
            "https://lokafy.s3.amazonaws.com/userreview/724/f79081813b494f68961642f6d5cc1de5_userpicturef79081813b494f68961642f6d5cc1de5.1200x1600_q85_box-0%2C0%2C4160%2C3120_crop-scale_detail_upscale.jpg",
          review:
            "sympa simple chalheureux très intéressant Personne charmente remplissant parfaitement son rôle Dear Dalit It was a pleasure to share this moment with you in Copenhagen this morning. Thank you for the quality of your presentation. Have a nice Weekend. Michel",
        },
      ],
    };
  },

  methods: {
    incrementCount() {
      this.count = this.count + 2;
      return this.count;
    },
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

.review-check {
  display: flex;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 1rem;
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