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
import {mapActions, mapGetters} from "vuex";
export default {
  name: "Products",
  computed: mapGetters(['products']),
  components: {Product},
  methods: mapActions(['getProducts']),
  created() {
    this.getProducts();
  }
}
</script>

<style scoped>

</style>