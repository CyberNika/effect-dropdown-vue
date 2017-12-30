import Vue from 'vue'
import App from './App.vue'

import EffectDropdown from '../src'
import '../src/styles/index.styl'

// import EffectDropdown from 'effect-dropdown-vue'
// import 'effect-dropdown-vue/dist/index.css'

Vue.use(EffectDropdown)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
})
