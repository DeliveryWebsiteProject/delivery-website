import { createApp } from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';

createApp(App).use(router).use(Vuetify).mount('#app');
