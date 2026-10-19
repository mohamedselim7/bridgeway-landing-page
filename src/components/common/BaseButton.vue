<script setup>
import { computed } from 'vue'
import { buttonArrowPath } from '../../data/artwork.js'

const props = defineProps({
  // Without a destination the button keeps its look but gets no link, hover or click affordance.
  href: { type: String, default: '' },
  // The mobile CTA button is 48px tall in Figma; the header one is 44px.
  tall: { type: Boolean, default: false },
})

const isLink = computed(() => Boolean(props.href))
</script>

<template>
  <component
    :is="isLink ? 'a' : 'span'"
    :href="isLink ? href : undefined"
    class="group inline-flex shrink-0 items-center gap-4 bg-brand-lime pl-[17px] pr-6 text-base font-semibold whitespace-nowrap text-ink lg:h-14 lg:rounded-3xl lg:pl-[29px] lg:pr-[30px] lg:text-xl"
    :class="[
      tall ? 'h-12 rounded-3xl' : 'h-11 rounded-[22px]',
      isLink && 'transition-shadow duration-200 hover:shadow-lg hover:shadow-black/20 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-brand-lime',
    ]"
  >
    <slot />
    <svg
      class="size-4"
      :class="isLink && 'transition-transform duration-200 group-hover:translate-x-1'"
      viewBox="1274 48 16 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path :d="buttonArrowPath" />
    </svg>
  </component>
</template>
