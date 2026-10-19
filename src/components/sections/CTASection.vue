<script setup>
import BaseButton from '../common/BaseButton.vue'
import paymentTerminal from '../../assets/images/payment-terminal.jpg'
import { ctaBlobPath } from '../../data/artwork.js'
</script>

<template>
  <!-- Desktop follows the 1440×874 frame; positions in cqw keep photo, blob and card overlapping as drawn. -->
  <section id="contact" aria-labelledby="cta-heading" class="@container mx-auto max-w-[1440px]">
    <div class="flex flex-col gap-6 px-5 pt-8 pb-8 lg:relative lg:block lg:aspect-[1440/874] lg:p-0">
      <svg
        class="hidden lg:absolute lg:top-[7.08cqw] lg:left-[52.99cqw] lg:block lg:w-[41.74cqw]"
        viewBox="763 102 601 535"
        aria-hidden="true"
      >
        <path :d="ctaBlobPath" class="fill-brand-lime" />
      </svg>

      <img
        :src="paymentTerminal"
        alt="A pharmacist in a white coat holding a card terminal while a customer inserts a card"
        width="2048"
        height="1366"
        loading="lazy"
        class="order-2 aspect-[353/220] w-full sm:aspect-[16/9] rounded-3xl object-cover lg:absolute lg:top-[8.33cqw] lg:left-[5.56cqw] lg:aspect-[648/450] lg:w-[45cqw] lg:rounded-[2.08cqw]"
      />

      <div
        class="order-1 rounded-[32px] bg-brand-plum px-8 pt-8 pb-8 lg:absolute lg:top-[30.42cqw] lg:left-[34.17cqw] lg:min-h-[21.94cqw] lg:w-[41.67cqw] lg:rounded-[2.78cqw] lg:px-[2.78cqw] lg:pt-[2.6cqw] lg:pb-[2.78cqw]"
      >
        <h2
          id="cta-heading"
          class="text-[32px] leading-[1.05] font-bold tracking-[-0.02em] text-brand-lime lg:text-[max(26px,2.64cqw)] lg:leading-[1.066]"
        >
          <span class="lg:text-white">Ready to cross over to</span>
          <span class="block">better payments?</span>
        </h2>
        <p class="mt-4 text-base leading-[1.5] text-white/80 lg:mt-[1.1cqw] lg:max-w-[24.5cqw] lg:text-[max(15px,1.32cqw)] lg:leading-[1.6]">
          Get set up in minutes. No hidden fees, no long contracts.
        </p>
        <!-- No signup destination exists yet, so this keeps the button look without acting as a link. -->
        <BaseButton tall class="mt-6 lg:mt-[1.94cqw]">Get Started</BaseButton>
      </div>
    </div>
  </section>
</template>
