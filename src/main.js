import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'

import './assets/main.css'

axios.defaults.baseURL = import.meta.env.APP_API_URL

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Accept'] = 'application/json';

const app = createApp(App)

app.use(router)

app.mount('#app')
