import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import { vMaska } from 'maska'
import router from '@/router'
import helper from '@/helper'
import { installStores } from '@/stores'

const pinia = createPinia()
const app = createApp(App)

helper(app)

app.use(pinia)
installStores()

app.use(router).mount('#app')

app.directive('maska', vMaska)
