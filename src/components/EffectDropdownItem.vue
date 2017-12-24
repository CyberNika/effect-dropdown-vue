<template>
  <li class="effect-dropdown-item">
    <slot>
      {{ label }}
    </slot>
  </li>
</template>

<script>
  export default {
    name: 'EffectDropdownItem',

    props: {
      label: String,
    },
  }
</script>
