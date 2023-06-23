import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SanitizeHtmlDirective from '@/directives/SanitizeHtml'

const app = createApp(App)

app.use(router)
app.directive('sanitize-html', SanitizeHtmlDirective)

app.mount('#app')
