import { createApp } from 'vue'
import App from './App.vue'
import { vMaska } from 'maska'
import router from './router'
import helper from './helper'

const app = createApp(App)

helper(app)

app.use(router).mount('#app')

app.directive('maska', vMaska)