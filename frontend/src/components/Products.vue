<template>
  <div class="row gx-5">
   <Product
       v-for="product in products"
       :key="product.id"
       :product="product"
   />
  </div>
</template>

<script>
import Product from "./Product";
export default {
  name: "Products",
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  components: {Product},
  created() {
    this.$store.dispatch('getProducts');
  }
}
</script>

<style scoped>

</style>