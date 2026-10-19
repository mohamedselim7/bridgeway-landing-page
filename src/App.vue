<script setup>
import HeroSection from './components/sections/HeroSection.vue'
import PartnersStrip from './components/sections/PartnersStrip.vue'
import FeaturesSection from './components/sections/FeaturesSection.vue'
import CTASection from './components/sections/CTASection.vue'
import SiteFooter from './components/sections/SiteFooter.vue'
</script>

<template>
  <div class="overflow-x-clip">
    <HeroSection />
    <main>
      <PartnersStrip />
      <FeaturesSection />
      <CTASection />
    </main>
    <SiteFooter />
  </div>
</template>
