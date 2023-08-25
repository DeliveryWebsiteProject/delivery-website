import Vue from 'vue'
import App from './App.vue'
import router from './router'
import helper from './helper'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faInstagram,
  faWhatsapp,
  faTiktok,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
  faChevronRight,
  faChevronLeft,
  faUsers,
  faCartShopping,
  faCircleUser
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(
  faChevronRight,
  faChevronLeft,
  faUsers,
  faCartShopping,
  faCircleUser,
  faInstagram,
  faWhatsapp,
  faTiktok,
  faFacebook,
  faTwitter
)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

helper( Vue )

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
