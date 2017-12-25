<template>
  <div :class="dropdownCls">
    <span :class="labelCls" :style="labelStyle" @click="toggle">
      {{ label }}
    </span>

    <ul class="effect-dropdown__content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  const TYPE_LIST = ['drawer', 'fence']
  const EFFECT_LIST = ['simple', 'randomAngle', 'camber']

  export default {
    name: 'EffectDropdown',

    provide () {
      return {
        $$root: this,
      }
    },

    props: {
      type: {
        default: 'drawer',
        validator (value) {
          return typeof value === 'string' && TYPE_LIST.indexOf(value) > -1
        },
      },
      effect: {
        default: 'simple',
        validator (value) {
          return !value || (typeof value === 'string' && EFFECT_LIST.indexOf(value) > -1)
        },
      },
      label: String,
      gutter: {
        type: Number,
        default: 5,
      },
      activeColor: {
        type: String,
        default: '#fc756f',
      },
      raiseLabel: Boolean,
    },

    data () {
      return {
        items: [],
        active: false,
      }
    },
    computed: {
      dropdownCls () {
        return {
          'effect-dropdown': true,
          'effect-dropdown--active': this.active,
        }
      },
      labelStyle () {
        return {
          color: this.active ? this.activeColor : null,
        }
      },
      labelCls () {
        return {
          'effect-dropdown__label': true,
          'effect-dropdown__label--raise': this.raiseLabel,
        }
      },
    },

    methods: {
      addItem (vm, cb) {
        this.items.push(vm)

        cb && cb(this.items.length - 1)
      },
      toggle () {
        this.active = !this.active
      },

      hide () {
        this.toggle()
      },
    },
  }
</script>
