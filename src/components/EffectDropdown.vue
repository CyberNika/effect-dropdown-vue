<template>
  <div class="effect-dropdown">
    <span class="effect-dropdown__label">
      {{ label }}
    </span>

    <ul class="effect-dropdown__content">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  const TYPE_LIST = ['drawer', 'fence']
  const EFFECT_LIST = ['randomAngle', 'arc']

  export default {
    name: 'EffectDropdown',

    props: {
      type: {
        default: 'drawer',
        validator (value) {
          return typeof value === 'string' && TYPE_LIST.indexOf(value) > -1
        },
      },
      EFFECT_LIST: {
        default: null,
        validator (value) {
          return !value || (typeof value === 'string' && TYPE_LIST.indexOf(value) > -1)
        },
      },
      label: String,
      gutter: {
        type: [Number, String],
        default: 5,
      },
      activeColor: {
        type: String,
        default: '#fc756f',
      },
      raiseLabel: Boolean,
    },
  }
</script>
