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
  const EFFECT_LIST = ['simple', 'random', 'camber', 'stagger', 'fence']

  export default {
    name: 'EffectDropdown',

    provide () {
      return {
        $$root: this,
      }
    },

    props: {
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
      autoHide: {
        type: Boolean,
        default: true,
      },
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

    watch: {
      active (value) {
        if (this.autoHide) {
          if (value) {
            document.body.addEventListener('click', this.handleBodyClick)
          } else {
            document.body.removeEventListener('click', this.handleBodyClick)
          }
        }
      },
    },
    destroyed () {
      if (this.autoHide) {
        document.body.removeEventListener('click', this.handleBodyClick)
      }
    },

    methods: {
      addItem (vm, cb) {
        this.items.push(vm)

        cb && cb(this.items.length - 1)
      },
      toggle () {
        this.active = !this.active
      },

      handleBodyClick (event) {
        const notOutside = this.$el.contains(event.target)

        if (!notOutside) {
          this.active = false
        }
      },

      hide () {
        this.toggle()
      },
    },
  }
</script>
