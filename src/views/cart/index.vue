<template>
    <div id="cart" class="container">
        <div style="float: right">
            <router-link :to="{ name: 'Home' }" class="button">Catalog</router-link>
        </div>
        <h2 class="label">🛒 Cart <span class="tag is-black is-circle">{{ items.length }}</span></h2>

        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Qt.</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, k) in items">
                    <td>
                        <button :disabled="deletingItemID === item.cartItemID" @click.prevent="removeFromCart(item.cartItemID)" class="button is-small"
                            title="Remove">🗑️</button>
                    </td>
                    <td>{{ item.productName }}</td>
                    <td>x {{ item.quantity }}</td>
                    <td>€{{ item.amount.toLocaleString() }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <b>€{{ totalCart.toLocaleString() }}</b>
                    </td>
                </tr>
            </tbody>
        </table>

        <div title="Show this if logged in">Hey 👋</div>
        <button @click.prevent="checkout" class="button is-black">Checkout</button>
        <div>and never pay!</div>
    </div>
</template>

<script>

import { axiosErrorHandlingMixin } from '../../mixins/axiosErrorHandling'
import { authCheck } from '../../mixins/authentication'

export default {
    data() {
        return {
            items: [],
            deletingItemID: null
        }
    },
    computed: {
        totalCart() {
            return this.items.reduce((total, current) => {
                return total + parseFloat(current.amount)
            }, 0)
        }
    },
    mixins: [authCheck, axiosErrorHandlingMixin],
    methods: {
        async fetchCartItems() {
            try {
                const response = await axios.get("/cart", {
                    headers: {
                        'Authorization': `Bearer ${this.getToken()}`
                    }
                })

                this.items = response.data
            } catch (error) {
                this.items = []
                this.handleAxiosNetworkError(error)
            }
        },
        async removeFromCart(itemID) {
            const result = await swal.fire({
                title: 'Remove item from cart?',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes',
            })

            if (!result.value) {
                return
            }

            this.deletingItemID = itemID

            try {
                await axios.delete("/cart/" + itemID, {
                    headers: {
                        'Authorization': `Bearer ${this.getToken()}`
                    }
                })

                toast.fire("Info", "Successfully removed from cart", "success");
                const index = this.items.findIndex(v => v.cartItemID == itemID)

                this.items.splice(index, 1)

            } catch (error) {
                this.handleAxiosNetworkError(error)
            }
            this.deletingItemID = null
        },

        checkout() {
            toast.fire("Info", "Successfully checked out😜", "success");
        }
    },
    mounted() {
        this.fetchCartItems()
    }
}
</script>

<style>

</style>