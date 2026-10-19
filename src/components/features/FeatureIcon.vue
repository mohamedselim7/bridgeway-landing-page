<script setup>
import { featureIcons } from '../../data/artwork.js'

defineProps({
  name: { type: String, required: true },
})
</script>

<template>
  <!-- The viewBox is the whole Figma tile, so the glyph keeps its original size and offset. -->
  <svg class="size-full" :viewBox="featureIcons[name].viewBox" fill="currentColor" aria-hidden="true">
    <path :d="featureIcons[name].d" />
  </svg>
</template>
