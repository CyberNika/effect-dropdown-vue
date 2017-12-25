<template>
  <li
    v-if="index !== null"
    :style="itemStyle"
    @click="handleClick"
    :class="classname"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script>
  import { transform } from '../utils'

  const BASE = {
    zIndex: 1500,
    offset: 3,
    itemHeight: 60,
  }

  export default {
    name: 'EffectDropdownItem',

    inject: ['$$root'],

    props: {
      label: String,
      disabled: Boolean,
    },

    data () {
      return {
        index: null,
        hover: false,
      }
    },
    computed: {
      active () {
        return this.$$root.active
      },
      classname () {
        return {
          'effect-dropdown-item': true,
          [`effect-dropdown-item--${this.$$root.effect}`]: true,
          'effect-dropdown-item--active': this.active,
        }
      },

      transform () {
        const { effect } = this.$$root
        const scale = 1 - (this.index / 100)

        const commonOptions = {
          default: { scale3d: [scale, scale, 1] },
          active: { scale3d: [1, 1, 1] },
        }
        const optionsMap = {
          simple: { ...commonOptions },
          randomAngle: {
            default: {
              ...commonOptions.default,
              rotate: 0,
            },
            active: {
              ...commonOptions.active,
              rotate: `${(Math.random() * 10 - 5).toFixed(2)}deg`,
            },
          },
          camber: {
            default: {
              ...commonOptions.default,
              rotate: 0,
            },
            active: {
              ...commonOptions.active,
              rotate: `${this.index * 5}deg`,
            },
          },
        }

        const defaultTransform = transform(optionsMap[effect].default)

        const activeTransfrom = transform(optionsMap[effect].active)

        return this.active ? activeTransfrom : defaultTransform
      },

      itemStyle () {
        const { effect, items } = this.$$root
        const top = this.active ?
          `${(this.index + 1) * (BASE.itemHeight + this.$$root.gutter)}px` :
          `${BASE.offset * this.index}px`

        const commonStyle = {
          top,
          color: this.hover ? '#fff': null,
          backgroundColor: this.hover ? this.$$root.activeColor: null,
          transform: this.transform,
          zIndex: BASE.zIndex - (this.index + 1),
        }

        const styleMap = {
          simple: {},
          randomAngle: {
            left: this.active ? `${Math.floor(Math.random() * 10 - 5)}px` : 0,
            'transition-delay': this.active ?
              `${(items.length - this.index - 1) * 100}ms` :
              `${this.index * 100}ms`
          },
          camber: {
            top: this.active ?
              `${(BASE.itemHeight + this.$$root.gutter)}px` :
              commonStyle.top,
            'transition-delay': this.active ?
              `${(items.length - this.index - 1) * 50}ms` :
              `${this.index * 50}ms`,
          },
        }

        return {
          ...commonStyle,
          ...styleMap[effect],
        }
      },
    },

    created () {
      this.$$root.addItem(this, (index) => {
        this.index = index
      })
    },

    methods: {
      handleMouseenter (event) {
        if (this.disabled) return
        if (!this.active) return

        this.hover = true

        this.$emit('mouseenter', this, event)
      },
      handleMouseleave (event) {
        if (this.disabled) return

        this.hover = false

        this.$emit('mouseleave', this, event)
      },

      handleClick (event) {
        if (this.disabled) return

        this.$emit('click', this, event)

        this.autoHide && this.$$root.hide()
      },
    },
  }
</script>
