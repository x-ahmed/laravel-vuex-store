<template>
  <div class="col-3 mt-3">
    <div class="card h-100">
      <img
          :src="product.image"
          class="card-img-top"
          :alt="product.title"
      />
      <div class="card-body">
        <h5 class="card-title">
          <router-link
              :to="{name: 'product', params: {id: product.id}}"
          >
            {{ product.title }}
          </router-link>
          <strong class="float-end">$ {{ product.price }}</strong>
        </h5>
        <p class="card-text">
          {{product.description}}
        </p>
        <div class="d-grid gap-2">
          <button
              class="btn btn-primary"
              type="button"
          >Add to card</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ['product'],
}
</script>

<style scoped>

</style>