<template>
  <Navigation />
  <div class="formpage-container">
    <h2>Write Up a review</h2>

    <form action="">
      <div class="input-group">
        <label for="name">Name</label>
        <input
          placeholder="Your Name"
          v-model="name"
          aria-label="name"
          type="text"
          id="name"
          required
        />
      </div>
      <div class="input-group">
        <label for="country">Country of Visit</label>
        <input
          placeholder="Where did you spend your time"
          v-model="country"
          aria-label="country"
          type="text"
          id="country"
          required
        />
      </div>
      <div class="input-group">
        <label for="image">Image URL(Optional)</label>
        <input
          v-model="image"
          aria-label="image"
          type="text"
          id="image"
          placeholder="Include an Image url with your review"
        />
      </div>
      <div class="input-group">
        <label for="review">Review</label>
        <textarea
          v-model="review"
          id="review"
          cols="30"
          rows="10"
          placeholder="Express in your words how you felt about your tour"
        ></textarea>
      </div>

      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import Navigation from "../components/NavBar.vue";

export default {
  name: "FormPage",
  components: {
    Navigation,
  },
  data() {
    return {
      name: "",
      country: "",
      review: "",
      url: "",
    };
  },
};
</script>

<style scoped>
.formpage-container {
  max-width: 1140px;
  margin: 0 auto;
}

h2 {
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-family: "League Spartan", sans-serif;
  font-weight: 700;
  font-size: 2rem;
}

.input-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 1.2rem;
}

input,
textarea {
  font-family: "Nunito Sans", Avenir, Helvetica, Arial, sans-serif;
  width: 60%;
  border: 0;
  outline: 0;
  background-color: #dfdddd;
  font-size: 1.1rem;
  padding: 0.5rem 0.7rem;
}

button {
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
}

@media (max-width: 700px) {
  .formpage-container {
    padding-inline: 1rem;
  }

  textarea,
  input {
    width: 100%;
  }
}
</style>