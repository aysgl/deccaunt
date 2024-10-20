<template>
  <VContainer ref="carouselContainer">
    <VFlex>
      <VCarousel
        hide-delimiters
        cycle
        :prev-icon="IconArrowLeft"
        :next-icon="IconArrowRight"
        height="140px"
        show-arrows="hover"
        class="d-flex justify-center"
      >
        <VCarouselItem
          v-for="(group, index) in groupedItems"
          :key="index"
          class="my-2"
        >
          <VLayout row>
            <VFlex v-for="item in group" :key="item">
              <VCard color="light" flat class="pa-8 ma-2 rounded-lg">
                <div class="text-center">
                  <div>
                    Logo
                    <p>{{ item }}</p>
                  </div>
                </div>
              </VCard>
            </VFlex>
          </VLayout>
        </VCarouselItem>
      </VCarousel>
    </VFlex>
  </VContainer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import { useDisplay } from "vuetify";

const totalItems = 20;
const carouselItems = ref(
  Array.from({ length: totalItems }, (_, index) => index + 1),
);

const { width } = useDisplay();

const groupedItems = computed(() => {
  const groups = [];
  const itemsPerSlide = getCols();
  for (let i = 0; i < carouselItems.value.length; i += itemsPerSlide) {
    groups.push(carouselItems.value.slice(i, i + itemsPerSlide));
  }
  return groups;
});

const getCols = () => {
  if (width.value >= 1280) {
    return 10;
  } else if (width.value >= 960) {
    return 7;
  } else if (width.value >= 600) {
    return 5;
  } else if (width.value >= 300) {
    return 3;
  } else {
    return 1;
  }
};
</script>
