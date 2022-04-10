<template>
  <nav>
    <h1>Lokafy</h1>

    <ul>
      <li class="tours">Book a Tour</li>
      <li>Pricing</li>
      <li class="reviews">Reviews</li>
      <li>FAQS</li>
      <li>About</li>
      <li>Sign up</li>
      <li>Log in</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
h1 {
  color: #0aa6bf;
}

nav {
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
}

nav ul {
  display: flex;
  gap: 2rem;
  align-items: center;
}

nav li {
  list-style: none;
  text-transform: uppercase;
  font-weight: 300;
  cursor: pointer;
}

.tours {
  text-transform: capitalize;
  background-color: #ed327d;
  padding: 0.5rem 1rem;
  color: #f7f7f7;
  border-radius: 5px;
  font-size: 0.9rem;
}

.reviews {
  border-bottom: 1px solid black;
}

nav li:hover {
  border-bottom: 1px solid black;
}

@media (max-width: 800px) {
  nav ul {
    display: none;
  }
}
</style>