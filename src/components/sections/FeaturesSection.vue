<script setup>
import FeatureCard from '../features/FeatureCard.vue'
import { features } from '../../data/features.js'
</script>

<template>
  <section id="benefits" aria-labelledby="features-heading" class="mx-auto max-w-[1440px] px-5 pt-7 pb-8 lg:px-20 lg:pt-[120px] lg:pb-[66px]">
    <div class="grid gap-4 lg:grid-cols-[1fr_42.9%] lg:gap-10">
      <h2 id="features-heading" class="text-[40px] leading-[0.95] font-bold tracking-[-0.035em] lg:text-[54px] lg:leading-[1.04] xl:text-[68px]">
        Everything payments,<br /> on one bridge
      </h2>
      <p class="text-base leading-[1.625] text-black/80 lg:text-xl lg:leading-[1.6] xl:text-[26px]">
        One platform connects you to customers, banks, and your own books, so money moves without the friction.
      </p>
    </div>

    <!-- Two columns on tablet keeps cards readable before the three-column desktop grid. -->
    <ul class="mt-[30px] grid gap-4 sm:grid-cols-2 lg:mt-[74px] lg:grid-cols-3 lg:gap-[25px]">
      <li v-for="feature in features" :key="feature.title">
        <FeatureCard v-bind="feature" />
      </li>
    </ul>
  </section>
</template>
