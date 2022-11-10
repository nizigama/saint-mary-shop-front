<template>
  <div class="px-6" :key="componentKey">
    <div style="float: right">
      <router-link v-if="!isAuthenticated()" :to="{ name: 'Register' }" class="button">Register</router-link>
      &nbsp;
      <router-link v-if="!isAuthenticated()" :to="{ name: 'Login' }" class="button">Login</router-link>
      &nbsp;
      <button v-if="isAuthenticated()" @click.prevent="logout" class="button">Logout</button>
      &nbsp;
      <router-link v-if="isAuthenticated()" :to="{ name: 'Cart' }" class="button">Cart</router-link>
    </div>
    <br />
    <h2 class="label">🎁 Products</h2>
    <div id="products" class="columns p-4">

      <Product v-for="(px, k) in products" :details="px" :key="k" />
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Product from "../../components/catalog/Product.vue"
import { authCheck } from '../../mixins/authentication'
import { axiosErrorHandlingMixin } from '../../mixins/axiosErrorHandling'
export default {
  components: {
    Product
  },
  mixins: [authCheck, axiosErrorHandlingMixin],
  data() {
    return {
      componentKey: 0,
      products: []
    }
  },
  methods: {
    async fetchProducts(){
      try {
        const response = await axios.get("/catalog/list")

        this.products = response.data
      } catch (error) {
        this.products = []
        this.handleAxiosNetworkError(error)
      }
    },
    logout() {
      localStorage.removeItem("auth_token");
      this.componentKey++
    }
  },
  mounted(){
    this.fetchProducts()
  }
}
</script>

<style scoped>

</style>
