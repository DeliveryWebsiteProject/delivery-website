import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
  faUsers
} from '@fortawesome/free-solid-svg-icons'

Vue.use(Vuetify)

/* add icons to the library */
library.add(faChevronRight, faChevronLeft, faUsers)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#1c1c1c'
      }
    }
  }
}

const vuetify: Vuetify = new Vuetify(opts)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
