<script setup>
import { computed } from 'vue'
import logoWhite from '../../assets/brand/logo-white.svg'
import logoColor from '../../assets/brand/logo-color.svg'
import logoInk from '../../assets/brand/logo-ink.svg'

const props = defineProps({
  // white: dark hero · ink: footer (#222 in the frame) · color: two-tone brand-board version.
  tone: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'ink', 'color'].includes(value),
  },
})

const sources = {
  white: { src: logoWhite, width: 154, height: 32 },
  ink: { src: logoInk, width: 154, height: 32 },
  color: { src: logoColor, width: 338, height: 73 },
}

const logo = computed(() => sources[props.tone])
</script>

<template>
  <img :src="logo.src" :width="logo.width" :height="logo.height" alt="Bridgeway" class="block h-auto" />
</template>
