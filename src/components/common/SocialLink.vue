<script setup>
import { socialIcons } from '../../data/artwork.js'

defineProps({
  // Official profile URLs are pending; without one the icon is shown but not linked.
  href: { type: String, default: '' },
  label: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>

<template>
  <component
    :is="href ? 'a' : 'span'"
    :href="href || undefined"
    :role="href ? undefined : 'img'"
    :aria-label="label"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer' : undefined"
    class="inline-flex size-[38px] lg:size-[52px]"
    :class="href && 'rounded-lg transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue'"
  >
    <svg class="size-full" :viewBox="socialIcons[icon].viewBox" :fill="socialIcons[icon].fill" aria-hidden="true">
      <path v-for="path in socialIcons[icon].paths" :key="path" :d="path" />
    </svg>
  </component>
</template>
