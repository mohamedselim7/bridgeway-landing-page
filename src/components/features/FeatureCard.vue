<script setup>
import FeatureIcon from './FeatureIcon.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, required: true },
  isDark: { type: Boolean, default: false },
})
</script>

<template>
  <article
    class="flex h-full flex-col justify-between gap-6 rounded-[32px] border-2 p-6 lg:min-h-[403px] lg:rounded-[40px] lg:p-[38px]"
    :class="isDark ? 'border-brand-plum bg-brand-plum text-white' : 'border-card-line bg-white text-brand-plum'"
  >
    <span
      class="block size-16 rounded-3xl lg:size-[72px]"
      :class="isDark ? 'bg-brand-lime text-brand-plum' : 'bg-brand-plum text-brand-lime'"
    >
      <FeatureIcon :name="icon" />
    </span>

    <div>
      <h3 class="text-lg leading-tight font-semibold tracking-[-0.01em] lg:text-[23px]">{{ title }}</h3>
      <p class="mt-3 text-[15px] leading-normal opacity-80 lg:mt-[18px] lg:text-[19px] lg:leading-[1.55]">
        {{ description }}
      </p>
    </div>
  </article>
</template>
