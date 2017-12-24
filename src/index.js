import EffectDropdown from './components/EffectDropdown.vue'
import EffectDropdownItem from './components/EffectDropdownItem.vue'

// export { EffectDropdown }

export default {
  install (Vue) {
    Vue.component(EffectDropdown.name, EffectDropdown)
    Vue.component(EffectDropdownItem.name, EffectDropdownItem)
  },
}
