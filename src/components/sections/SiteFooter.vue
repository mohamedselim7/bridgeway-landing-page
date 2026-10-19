<script setup>
import BrandLogo from '../common/BrandLogo.vue'
import SocialLink from '../common/SocialLink.vue'
import { footerGreenPath, footerMauvePath } from '../../data/artwork.js'

const socials = [
  { label: 'LinkedIn', icon: 'linkedin' },
  { label: 'Facebook', icon: 'facebook' },
  { label: 'Instagram', icon: 'instagram' },
]

// Order from 07-footer-desktop.svg; phones show only the first three, as in 08-footer-mobile.svg.
const shapes = ['green', 'mauve', 'lime', 'mauve', 'lime', 'green']
</script>

<template>
  <footer class="mx-auto max-w-[1440px] overflow-hidden px-5 pt-[35px] lg:px-20 lg:pt-[83px]">
    <div class="flex flex-col gap-[27px] lg:flex-row lg:items-start lg:justify-between">
      <div>
        <BrandLogo tone="ink" class="w-[115px] lg:w-[154px]" />
        <p class="mt-3 text-[15px] text-black/60 lg:mt-5 lg:text-[26px]">Everything payments, on one bridge</p>
      </div>

      <ul class="ml-1 flex gap-[25px] lg:mt-[3px] lg:ml-0 lg:gap-[43px]">
        <li v-for="social in socials" :key="social.icon">
          <SocialLink :label="social.label" :icon="social.icon" />
        </li>
      </ul>
    </div>

    <!-- Shapes are drawn 250px tall and cropped by the wrapper, matching the frame's bottom edge. -->
    <div class="mt-[126px] grid grid-cols-3 gap-[12.5px] px-[19px] sm:grid-cols-6 sm:px-0 lg:mt-[302px] lg:gap-[25px]" aria-hidden="true">
      <div
        v-for="(shape, index) in shapes"
        :key="index"
        class="aspect-[193/126] overflow-hidden lg:aspect-[193/154]"
        :class="index > 2 && 'hidden sm:block'"
      >
        <svg class="block w-full" viewBox="0 0 193 250">
          <path v-if="shape === 'green'" :d="footerGreenPath" transform="translate(-79 -475)" class="fill-brand-green" />
          <path v-else-if="shape === 'mauve'" :d="footerMauvePath" transform="translate(-297 -475)" class="fill-brand-mauve" />
          <rect v-else width="193" height="250" rx="96.5" class="fill-brand-lime" />
        </svg>
      </div>
    </div>
  </footer>
</template>
