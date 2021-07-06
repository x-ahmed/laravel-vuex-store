<template>
  <div class="row mt-5 d-flex align-items-center">
    <div class="col-4">
      <img
          src="https://via.placeholder.com/300"
          alt=""
      />
    </div>
    <div class="col-8">
      <div class="m-auto d-flex align-items-center justify-content-between">
        <h2>Product title</h2>
        <h3>$ price</h3>
      </div>
      <div class="input-group mb-3">
      <input
          type="number"
          class="form-control"
          placeholder="Product's count"
          aria-label="Product's count"
          min="1"
          aria-describedby="button-addon2"
      />
      <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon2"
      >
        Add to cart
      </button>
    </div>
      <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae dolores doloribus ea eligendi error expedita fuga impedit magni molestias numquam placeat porro provident quidem, soluta suscipit vel velit veritatis.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      required: true,
    },
  },
}
</script>

<style scoped>

</style>