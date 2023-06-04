import './assets/main.css'
import "./assets/scss/global.scss";
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CanvasJSChart from '@canvasjs/vue-charts';



import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(CanvasJSChart); // install the CanvasJS Vuejs Chart Plugin
app.use(createPinia())
app.use(router)

app.mount('#app')


 
 