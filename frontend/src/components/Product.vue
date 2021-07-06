<template>
  <div class="col-3 mt-3">
    <div class="card h-100" style="width: 18rem;">
      <img
          src="https://via.placeholder.com/100"
          class="card-img-top"
          alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          <a href="#">Product title</a>
          <strong class="float-end">$ 35</strong>
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">Add to card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
}
</script>

<style scoped>

</style>