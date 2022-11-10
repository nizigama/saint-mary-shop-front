<template>
    <div class="product is-one-quarter">
        <figure>
            <img width="150" :src="details.imageUrl">
        </figure>

        <div><b>{{ details.name }}</b></div>
        <div class="info">
            <span class="tag is-black">€{{ details.amount }}</span>
            &nbsp;
            <span class="tag is-black">SKU: {{ details.sku }}</span>
        </div>
        <div class="columns mt-1" style="margin-bottom: 0px!important">
            <div class="is-two-fifth column" style="padding-bottom: 5px">
                <input type="number" class="w-10 input is-small is-primary" v-model="quantity" />
            </div>
        </div>
        <div class="columns" style="margin-bottom: 0px!important">
            <div class="is-two-fifth column" style="padding-bottom: 5px">
                <button :disabled="addingToCart" @click.prevent="addToCart" class="button">
                    {{ addingToCart ? 'Processing ...' : 'Add to cart' }}
                </button>
            </div>
        </div>


    </div>
</template>

<script>
import { authCheck } from '../../mixins/authentication'
import { axiosErrorHandlingMixin } from '../../mixins/axiosErrorHandling'
export default {
    props: {
        details: {
            type: Object,
            required: true
        }
    },
    mixins: [authCheck, axiosErrorHandlingMixin],
    data() {
        return {
            addingToCart: false,
            quantity: 0
        }
    },
    methods: {
        async addToCart() {
            if (!this.isAuthenticated()) {
                toast.fire("Warning", "You need to create an account first", "warning");
                return
            }

            this.addingToCart = true
            try {
                await axios.post("/cart", {
                    productID: this.details.id,
                    quantity: this.quantity,
                }, {
                    headers: {
                        'Authorization': `Bearer ${this.getToken()}`
                    }
                })
                this.addingToCart = false

                toast.fire("Info", "Successfully added to cart", "success");

                const result = await swal.fire({
                    title: 'Go to cart?',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes',
                })

                if (result.value) {
                    this.$router.push({ name: 'Cart' })
                }

            } catch (error) {
                this.addingToCart = false
                this.handleAxiosNetworkError(error)
            }
        }
    }
}
</script>

<style>

</style>