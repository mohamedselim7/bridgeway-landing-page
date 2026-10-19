<script setup>
import { partners } from '../../data/partners.js'
</script>

<template>
  <section aria-label="Trusted by" class="mx-auto max-w-[1440px] pt-12 pb-4 lg:px-20 lg:py-8">
    <div class="relative overflow-hidden">
      <!-- Mobile starts with a cropped logo on the left; desktop centres the over-wide row like the frame. -->
      <ul class="-ml-[30px] flex w-max gap-[24.7px] lg:relative lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:gap-9 xl:gap-[49.5px]">
        <li v-for="partner in partners" :key="partner.name" :class="[partner.mobileOrder, 'lg:order-none']">
          <img
            :src="partner.src"
            :alt="partner.name"
            :width="partner.width"
            height="80"
            class="h-10 w-auto lg:h-14 xl:h-20"
          />
        </li>
      </ul>
      <!-- White fades copied from the frame: left only on mobile, both edges on desktop. -->
      <span class="pointer-events-none absolute inset-y-0 left-0 w-[82px] bg-linear-to-r from-white to-transparent lg:w-20" aria-hidden="true" />
      <span class="pointer-events-none absolute inset-y-0 right-0 hidden w-20 bg-linear-to-l from-white to-transparent lg:block" aria-hidden="true" />
    </div>
  </section>
</template>
