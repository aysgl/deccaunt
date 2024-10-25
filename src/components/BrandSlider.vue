<template>
  <VContainer fluid class="position-relative mb-16" style="width: 90%">
    <VContainer
      class="bg-black rounded-lg position-absolute bottom-0 right-0 left-0 pa-1"
      max-width="788"
    >
      <client-only>
        <splide
          :options="{
            rewind: true,
            perPage: 4,
            breakpoints: {
              640: {
                perPage: 2,
              },
            },
            pagination: false,
            arrows: true,
            autoplay: true,
            perMove: 1,
            classes: {
              arrows: 'arrows',
            },
          }"
          class="px-md-16"
        >
          <splide-slide v-for="(logo, index) in logos" :key="index">
            <VCard flat class="px-9 py-4 ma-1" color="white">
              {{ logo }}
            </VCard>
          </splide-slide>
        </splide>
      </client-only>
    </VContainer>
  </VContainer>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const logos = Array.from({ length: 20 }, (_, i) => `Logo ${i + 1}`);
</script>

<style scoped lang="scss">
.arrows {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  z-index: 100;
  top: 32px;
  .splide__arrow {
    background: none !important;
    svg {
      fill: white;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
