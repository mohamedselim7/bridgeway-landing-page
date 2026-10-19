<script setup>
import BrandLogo from '../common/BrandLogo.vue'
import BaseButton from '../common/BaseButton.vue'
import waterTexture from '../../assets/images/water-texture.jpg'
import {
  heroLimePath,
  heroPlumPath,
  bridgePath,
  bridgeImageTransform,
  mobileTileImageTransform,
  heroArrowPath,
} from '../../data/artwork.js'

const navLinks = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Contact Us', href: '#contact' },
]
</script>

<template>
  <!-- Desktop is a 1440×810 artboard: positions use cqw so text stays locked to the vector shapes. -->
  <header class="@container mx-auto max-w-[1440px]">
    <div class="relative rounded-b-[40px] bg-brand-plum px-5 pt-5 pb-8 lg:aspect-[1440/810] lg:rounded-none lg:bg-transparent lg:p-0">
      <svg class="absolute inset-0 hidden size-full lg:block" viewBox="0 0 1440 810" aria-hidden="true">
        <defs>
          <pattern id="bw-bridge-texture" patternContentUnits="objectBoundingBox" width="1" height="1">
            <image :href="waterTexture" width="3210" height="2140" preserveAspectRatio="none" :transform="bridgeImageTransform" />
          </pattern>
        </defs>
        <path :d="heroLimePath" class="fill-brand-lime" />
        <path :d="heroPlumPath" class="fill-brand-plum" />
        <path :d="bridgePath" fill="url(#bw-bridge-texture)" />
        <path :d="bridgePath" class="fill-brand-blue" fill-opacity="0.2" />
      </svg>

      <nav
        class="relative flex flex-wrap items-center lg:absolute lg:inset-x-0 lg:top-[1.944cqw] lg:h-[3.889cqw] lg:flex-nowrap lg:pr-[8.33cqw] lg:pl-[8.47cqw]"
        aria-label="Main"
      >
        <a href="#" class="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime">
          <BrandLogo class="w-[115px] lg:w-[10.69cqw]" />
        </a>
        <ul class="order-3 mt-4 flex w-full gap-[27px] text-base text-white lg:order-none lg:mt-0 lg:ml-[5.49cqw] lg:w-auto lg:gap-[5.7cqw] lg:text-[max(15px,1.389cqw)]">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="rounded transition-colors duration-200 hover:text-brand-lime focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <BaseButton href="#contact" class="ml-auto">Get Started</BaseButton>
      </nav>

      <!-- One h1 at every size; on desktop the second line sits on the lime panel. -->
      <h1
        class="relative mt-[17px] text-[36px] leading-none font-bold tracking-[-0.02em] text-brand-lime lg:absolute lg:inset-x-0 lg:top-[34.76cqw] lg:mt-0 lg:grid lg:grid-cols-[42.01cqw_1fr] lg:text-[4.8cqw] lg:tracking-[-0.03em] lg:whitespace-nowrap"
      >
        <span class="block lg:text-right">Your way to</span>
        <span class="block lg:pl-[4.31cqw] lg:text-brand-plum">better payments</span>
      </h1>

      <p
        class="relative mt-[18px] text-lg leading-normal text-white/80 lg:absolute lg:top-[41.15cqw] lg:left-[46.11cqw] lg:mt-0 lg:max-w-[27cqw] lg:text-[1.944cqw] lg:leading-[1.45] lg:text-black/80"
      >
        Accept, send, and reconcile payments in one place.
      </p>

      <div class="mt-[50px] flex items-end gap-4 lg:contents">
        <!-- Mobile tile reuses the Figma pattern transform, which rotates the photo 90°. -->
        <svg class="w-[220px] min-w-0 lg:hidden" viewBox="20 315 220 220" aria-hidden="true">
          <defs>
            <pattern id="bw-tile-texture" patternContentUnits="objectBoundingBox" width="1" height="1">
              <image :href="waterTexture" width="3210" height="2140" preserveAspectRatio="none" :transform="mobileTileImageTransform" />
            </pattern>
          </defs>
          <rect x="20" y="315" width="220" height="220" rx="32" fill="url(#bw-tile-texture)" />
          <rect x="20" y="315" width="220" height="220" rx="32" class="fill-brand-blue" fill-opacity="0.2" />
        </svg>

        <a
          href="#benefits"
          aria-label="See the benefits"
          class="group inline-flex size-24 items-center justify-center rounded-full bg-brand-plum text-brand-lime focus-visible:outline-2 focus-visible:outline-brand-lime lg:absolute lg:top-[41.74cqw] lg:left-[82.22cqw] lg:size-[11.11cqw] lg:rounded-[4.17cqw]"
        >
          <svg
            class="size-[27px] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 lg:size-[2.5cqw]"
            viewBox="1246 663 36 36"
            fill="currentColor"
            aria-hidden="true"
          >
            <path :d="heroArrowPath" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
