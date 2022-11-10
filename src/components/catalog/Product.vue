<template>
    <div class="product is-one-quarter">
        <figure>
            <img width="150" :src="details.imageLink">
        </figure>

        <div><b>{{ details.name }}</b></div>
        <div class="info">
            <span class="tag is-black">€{{ details.price }}</span>
            &nbsp;
            <span class="tag is-black">&infin; Left</span>
        </div>
        <button type="submit" class="button">Add to cart</button>
    </div>
</template>

<script>
export default {
    props: {
        details: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>