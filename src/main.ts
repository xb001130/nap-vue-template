import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import './styles/main.css'
import i18n from './plugins/i18n'

createApp(App).use(i18n).mount('#app')
