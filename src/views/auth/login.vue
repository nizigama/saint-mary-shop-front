<template>
    <div class="container">
        <h2 class="label">🔑 Login</h2>
        <form id="user">
            <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Email">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input class="input" type="password" placeholder="Password">
                </div>
            </div>

            <label class="checkbox">
                <input type="checkbox"> Remember me for 2 weeks on this device
            </label>
            <br><br>

            <button type="submit" class="button is-black">Login</button>
            &nbsp;
            <button type="submit" class="button">Register</button>
        </form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>