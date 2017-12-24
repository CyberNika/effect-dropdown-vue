<template>
  <li
    v-if="index !== null"
    :style="itemStyle"
    @click="handleClick"
    class="effect-dropdown-item"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave">
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script>
  import { transform } from '../utils'

  const base = {
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

      transform () {
        const scale = 1 - (this.index / 100)

        const defaultTransform = transform({
          scale3d: [scale, scale, 1],
        })

        const activeTransfrom = transform({
          scale3d: [1, 1, 1],
        })

        return this.active ? activeTransfrom : defaultTransform
      },

      itemStyle () {
        const top = this.active ?
          `${this.index * (base.itemHeight + this.$$root.gutter)}px` :
          `${base.offset * this.index}px`

        return {
          top,
          color: this.hover ? '#fff': null,
          backgroundColor: this.hover ? this.$$root.activeColor: null,
          transform: this.transform,
          zIndex: base.zIndex - (this.index + 1),
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
