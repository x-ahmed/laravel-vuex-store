<template>
  <div class="row mt-5 d-flex align-items-center" v-if="product">
    <div class="col-4">
      <img
          class="w-100"
          :src="product.image"
          :alt="product.title"
      />
    </div>
    <div class="col-8">
      <div class="m-auto d-flex align-items-center justify-content-between">
        <h2>{{ product.title }}</h2>
        <h3>$ {{ product.price }}</h3>
      </div>
      <div class="input-group mb-3">
      <input
          type="number"
          class="form-control"
          placeholder="Product's count"
          v-model.number="count"
          aria-label="Product's count"
          min="1"
          aria-describedby="button-addon2"
      />
      <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon2"
          @click.stop="addProductToCard({product,quantity: count,})"
      >
        Add to cart
      </button>
    </div>
      <p class="mt-3">
        {{product.description}}
      </p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Product",
  props: {
    id: {
      required: true,
    },
  },
  data(){
    return {
      count: 1,
    }
  },
  methods: mapActions({
    addProductToCard : 'cartModule/addProductToCard',
    getProduct : 'productModule/getProduct'
  }),
  computed: mapGetters('productModule', ['product']),
  mounted() {
    this.getProduct(this.id)
  }
}
</script>

<style scoped>

</style>