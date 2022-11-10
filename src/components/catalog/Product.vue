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
        <button @click.prevent="addToCart" class="button">Add to cart</button>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: Object,
            required: true
        },
        authenticated: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        addToCart(){
            if(!this.authenticated){
                toast.fire("Warning", "You need to create an account first", "warning");
            }
            // axios
        }
    }
}
</script>

<style>

</style>