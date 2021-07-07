<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-3 mb-2">
  <div class="container">
    <a class="navbar-brand" href="#">Vuex Store</a>
    <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll d-flex align-items-center"
          style="--bs-scroll-height: 100px;"
      >
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item dropdown">
          <a
              class="nav-link dropdown-toggle position-relative"
              href="#"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
          >
              Cart
              <span class="position-absolute top-0 start-200 translate-middle badge rounded-pill bg-info">
                {{ cartCount }}
              </span>
          </a>
          <Dropdown />
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import Dropdown from './Dropdown'

export default {
  name: "Header",
  components: {
    Dropdown,
  },
  computed: {
    cartCount() {
      return this.$store.getters.cart.length
    }
  }
}
</script>

<style scoped>

</style>