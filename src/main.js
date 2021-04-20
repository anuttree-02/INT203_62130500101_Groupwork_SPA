import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import TheManu from './components/TheManu.vue'
import './assets/tailwind.css'
// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.component('the-manu',TheManu)
app.use(router).mount('#app')