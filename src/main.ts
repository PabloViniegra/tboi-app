import { createApp } from 'vue'
import router from './router/index'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                refetchOnReconnect: 'always',
                refetchOnWindowFocus: 'always',
                retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
                staleTime: 1000 * 60 * 5,
            }
        }
    }
})
app.use(ToastPlugin)
app.use(router)
app.use(createPinia())
app.mount('#app')
