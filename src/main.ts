import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                refetchOnReconnect: 'always'
            }
        }
    }
})
app.use(ToastPlugin)
app.use(router)
app.mount('#app')
