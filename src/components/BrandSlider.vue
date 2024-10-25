<template>
  <VContainer fluid class="position-relative mb-16">
    <VContainer
      class="bg-black rounded-lg position-absolute bottom-0 right-0 left-0"
      max-width="788"
    >
      <div class="d-flex align-center">
        <VSlideGroup
          ref="slideGroupRef"
          show-arrows
          :prev-icon="IconArrowLeft"
          :next-icon="IconArrowRight"
        >
          <VSlideGroupItem v-for="(logo, index) in logos" :key="index">
            <Transition name="slide-fade">
              <VCard flat class="px-9 py-4 ma-1" color="white">
                {{ logo }}
              </VCard>
            </Transition>
          </VSlideGroupItem>
        </VSlideGroup>
      </div>
    </VContainer>
  </VContainer>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";

const logos = Array.from({ length: 20 }, (_, i) => `Logo ${i + 1}`);
</script>
