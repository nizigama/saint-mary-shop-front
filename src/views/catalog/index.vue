<script>
import Product from "../../components/catalog/Product.vue"
export default {
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          name: "Product 1",
          imageLink: "https://via.placeholder.com/150",
          price: 500
        },
        {
          name: "Product 2",
          imageLink: "https://via.placeholder.com/150",
          price: 820
        },
        {
          name: "Product 2",
          imageLink: "https://via.placeholder.com/150",
          price: 820
        },
        {
          name: "Product 2",
          imageLink: "https://via.placeholder.com/150",
          price: 820
        },
      ]
    }
  }
}
</script>

<template>
  <div>
    <h2 class="label ml-6">🎁 Products</h2>
    <div id="products" class="columns p-4">

      <Product v-for="(px, k) in products" :details="px" :key="k" />
    </div>
  </div>
</template>

<style scoped>

</style>
