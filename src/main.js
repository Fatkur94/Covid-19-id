import Vue from 'vue'
import App from './App.vue'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import 'bulma/css/bulma.min.css'

fontawesome.library.add(solid)

new Vue({
  el: '#app',
  render: h => h(App)
})
