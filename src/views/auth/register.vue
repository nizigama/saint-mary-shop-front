<template>
    <div class="container">
        <h2 class="label">🔑 Registration</h2>
        <form id="user">
            <div class="field">
                <div class="control">
                    <input class="input" v-model="names" type="text" placeholder="Names">
                </div>
            </div>
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

            <div class="field">
                <div class="control">
                    <input class="input" v-model="password_confirmation" type="password"
                        placeholder="Password confirmation">
                </div>
            </div>

            <br>

            <button @click.prevent="register" class="button is-black" :disabled="registering">
                {{ registering ? 'Processing ...' : 'Register' }}
            </button>
            &nbsp;
            <router-link :to="{ name: 'Login' }" class="button">Login</router-link>
        </form>
    </div>
</template>

<script>
import { axiosErrorHandlingMixin } from '../../mixins/axiosErrorHandling'
import { authCheck } from '../../mixins/authentication'
export default {
    data() {
        return {
            names: null,
            email: null,
            password: null,
            password_confirmation: null,
            registering: false,
        }
    },
    mixins: [axiosErrorHandlingMixin, authCheck],
    methods: {
        async register() {
            this.registering = true
            try {
                const response = await axios.post("/auth/register", {
                    names: this.names,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                this.registering = false

                this.saveAuthToken(response.data.token)

                toast.fire("Info", "Registration successful", "success");

                this.$router.push({ name: 'home' })
            } catch (error) {
                this.registering = false
                this.handleAxiosNetworkError(error)
            }
        }
    },
    beforeRouteEnter(to, from, next) {
        const token = localStorage.getItem("auth_token")

        if (token !== null) {
            next(vm => vm.$router.push({ name: 'Home' }))
            return
        }
        next()
    },
    mounted() {
    }
}
</script>

<style>

</style>