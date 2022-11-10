<template>
  <div class="px-6">
    <div style="float: right">
      <button type="submit" class="button is-black">Register</button>
      &nbsp;
      <button type="submit" class="button">Login</button>
      &nbsp;
      <button type="submit" class="button">Logout</button>
    </div>
    <br/>
    <h2 class="label">🎁 Products</h2>
    <div id="products" class="columns p-4">

      <Product v-for="(px, k) in products" :details="px" :key="k" />
    </div>
  </div>
</template>

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

<style scoped>

</style>
