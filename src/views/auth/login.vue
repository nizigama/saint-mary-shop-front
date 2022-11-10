<template>
    <div class="container">
        <h2 class="label">🔑 Login</h2>
        <form id="user">
            <div class="field">
                <div class="control">
                    <input class="input" v-model="email" type="email" placeholder="Email">
                </div>
            </div>

            <div class="field">
                <div class="control">
                    <input class="input" v-model="password" type="password" placeholder="Password">
                </div>
            </div>


            <button @click.prevent="login" class="button is-black" :disabled="signingIn">
                {{ signingIn ? 'Processing ...' : 'Login' }}
            </button>
            &nbsp;
            <router-link :to="{ name: 'Register' }" class="button">Register</router-link>
        </form>
    </div>
</template>

<script>
import { axiosErrorHandlingMixin } from '../../mixins/axiosErrorHandling'
import { authCheck } from '../../mixins/authentication'
export default {
    data() {
        return {
            email: null,
            password: null,
            signingIn: false,
        }
    },
    methods: {
        async login() {
            this.signingIn = true
            try {
                const response = await axios.post("/auth/login", {
                    email: this.email,
                    password: this.password,
                })
                this.signingIn = false

                this.saveAuthToken(response.data.token)

                toast.fire("Info", "Login successful", "success");

                this.$router.push({ name: 'Home' })
            } catch (error) {
                this.signingIn = false
                this.handleAxiosNetworkError(error)
            }
        }
    },
    mixins: [axiosErrorHandlingMixin, authCheck],
}
</script>

<style>

</style>