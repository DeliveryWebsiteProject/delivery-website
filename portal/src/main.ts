import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { vMaska } from 'maska'
import router from './router'
import helper from './helper'

const pinia = createPinia()
const app = createApp(App)

helper(app)

app.use(router).use(pinia).mount('#app')

app.directive('maska', vMaska)