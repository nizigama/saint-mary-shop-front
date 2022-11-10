<template>
    <div id="cart" class="container">
        <h2 class="label">🛒 Cart <span class="tag is-black is-circle">3</span></h2>

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
                <tr>
                    <td>
                        <button class="button is-small" title="Remove">🗑️</button>
                    </td>
                    <td>Product I</td>
                    <td>x 2</td>
                    <td>€8.40</td>
                </tr>

                <tr>
                    <td>
                        <button class="button is-small" title="Remo`ve">🗑️</button>
                    </td>
                    <td>Product II</td>
                    <td>x 1</td>
                    <td>€9.60</td>
                </tr>

                <tr>
                    <td></td>
                    <td>Tax</td>
                    <td>19%</td>
                    <td>€3.42</td>
                </tr>

                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <b>€21.42</b>
                    </td>
                </tr>
            </tbody>
        </table>

        <div title="Show this if logged in">Hey {{ email }} 👋</div>
        <button class="button is-black">Checkout</button>
        <div>and never pay!</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            email: "user@email.com"
        }
    }
}
</script>

<style>

</style>