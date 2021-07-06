<template>
  <ul
      class="dropdown-menu"
      aria-labelledby="navbarScrollingDropdown"
      @click.stop
  >
    <li>
      <div class="dropdown-item">
        <div class="d-flex justify-content-evenly align-items-baseline">
          <div class="me-4">lorem lipsum test</div>
          <div>
            <span class="border-0 badge rounded-pill bg-warning text-black-50">5</span>
            <span class="border-0 badge rounded-pill bg-success mx-1">$ 5</span>
            <button class="border-0 badge rounded-pill bg-danger">X</button>
          </div>
        </div>
      </div>
    </li>
    <li><hr class="dropdown-divider"></li>
    <li>
      <div class="dropdown-item">
        <div class="d-flex justify-content-between align-items-baseline">
          <div>Total</div>
          <span class="border-0 badge bg-primary w-25">$ 500</span>
        </div>
      </div>
      <div class="d-grid gap-2 mx-2 my-1">
        <button
            class="btn btn-danger btn-sm"
            type="button"
        >
          Clear Cart
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Dropdown",
}
</script>

<style scoped>

</style>