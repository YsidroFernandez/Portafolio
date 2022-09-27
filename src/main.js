import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'

//translate
import VueI18n from 'vue-i18n'
import en from '../lang/en.json'
import es from '../lang/es.json'


var VueCookie = require('vue-cookie');

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)
Vue.use(VueI18n)


Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

const i18n = new VueI18n({
  locale : VueCookie.get("lang") || 'en',
  fallbackLocale: 'en',
  messages : {
      en: en,
      es: es
  }
});

new Vue({
  created () {
    AOS.init()
  },
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')

// Hot updates
if (module.hot) {
  console.log('Hotreload');
  // module.hot.accept(['./en', './ja'], function () {
  //   i18n.setLocaleMessage('en', require('./en').default)
  //   i18n.setLocaleMessage('ja', require('./ja').default)
  //   // Or the following hot updates via $i18n property
  //   // app.$i18n.setLocaleMessage('en', require('./en').default)
  //   // app.$i18n.setLocaleMessage('ja', require('./ja').default)
  // })
}
