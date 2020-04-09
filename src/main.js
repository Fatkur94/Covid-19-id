import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import 'bulma/css/bulma.min.css'

fontawesome.library.add(solid)

window.axios = axios;
new Vue({
  el: '#app',
  render: h => h(App)
})
