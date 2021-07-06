<template>
  <div>
    <h2>Product Page</h2>
    <p>{{$route.params.id}}</p>
    <p>{{id}}</p>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>