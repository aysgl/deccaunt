<script setup lang="ts">
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
</script>

<template>
  <VContainer fluid class="position-relative">
    <VContainer
      class="bg-black rounded-lg position-absolute bottom-0 right-0 left-0"
      max-width="788"
    >
      <VSlideGroup
        show-arrows
        :prev-icon="IconArrowLeft"
        :next-icon="IconArrowRight"
      >
        <VSlideGroupItem v-for="n in 20" :key="n">
          <VCard flat class="px-9 py-4 ma-1 d-grid" color="white">
            Logo {{ n }}
          </VCard>
        </VSlideGroupItem>
      </VSlideGroup>
    </VContainer>
  </VContainer>
</template>
