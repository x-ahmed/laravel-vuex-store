<template>
  <ul
       v-show="cartCount"
      class="dropdown-menu"
      aria-labelledby="navbarScrollingDropdown"
      @click.stop
  >
    <li
        v-for="{product, quantity} in cart"
        :key="product.id"
    >
      <div class="dropdown-item">
        <div class="d-flex justify-content-evenly align-items-baseline">
          <div class="me-4">{{product.title}}</div>
          <div>
            <span class="border-0 badge rounded-pill bg-warning text-black-50">{{ quantity }}</span>
            <span class="border-0 badge rounded-pill bg-success mx-1">$ {{parseInt(product.price)}}</span>
            <button
                class="border-0 badge rounded-pill bg-danger"
                @click.stop="removeFromCart(product)"
            >X</button>
          </div>
        </div>
      </div>
      <hr class="dropdown-divider">
    </li>
    <li>
      <div class="dropdown-item">
        <div class="d-flex justify-content-between align-items-baseline">
          <div>Total</div>
          <span class="border-0 badge bg-primary w-50">$ {{ total }}</span>
        </div>
      </div>
      <div class="d-grid gap-2 mx-2 my-1">
        <button
            class="btn btn-danger btn-sm"
            type="button"
            @click.stop="clearCart"
        >
          Clear Cart
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "Dropdown",
  computed: mapGetters('cartModule', {
    cart: 'cart',
    cartCount: 'cartCount',
    total: 'totalPrice',
  }),
  methods: mapActions('cartModule', ['removeFromCart', 'clearCart', 'getCart']),
  mounted() {
    this.getCart();
  }
}
</script>

<style scoped>

</style>