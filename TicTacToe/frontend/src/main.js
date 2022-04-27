import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(router).use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBiijb2x0ggIR5EXs6lnxaHhYy4wcGgiqM',
    },
}).mount('#app')

//"AIzaSyBiijb2x0ggIR5EXs6lnxaHhYy4wcGgiqM"
