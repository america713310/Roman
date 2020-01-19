import Vue from 'vue'
import App from './App.vue'
import Roman from './components/roman'

Vue.component('roman', Roman)

new Vue({
  el: '#app',
  render: h => h(App)
})
