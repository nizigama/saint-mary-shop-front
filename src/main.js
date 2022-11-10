import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import swal from "sweetalert2";

import './assets/main.css'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';

const toast = swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 8000,
});

window.axios = axios;
window.swal = swal;
window.toast = toast;

const app = createApp(App)

app.use(router)

app.mount('#app')
