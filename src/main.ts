import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight, faCloud, faCompactDisc, faGaugeHigh, faHardDrive } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css'


library.add(faArrowRight)
library.add(faGaugeHigh)
library.add(faCloud)
library.add(faHardDrive)
library.add(faCompactDisc)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
