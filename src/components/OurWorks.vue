<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconPlus, IconArrowUpRight } from "@tabler/icons-vue";

const works = ref([
  {
    title: "Phoenix Polymer",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["Ecommerce"],
  },
  {
    title: "Shamkir Agro Logistics",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["Corporate", "Business"],
  },
  {
    title: "Reginal Group",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["Corporate"],
  },
  {
    title: "SamWood",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["Corporate", "Business"],
  },
  {
    title: "Victory",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["E-commerce"],
  },
  {
    title: "iRobot",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["E-commerce"],
  },
  {
    title: "Social Partner",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: ["Corporate"],
  },
]);
</script>

<template>
  <VContainer>
    <SectionTitle title="Our Latest Work" position="center" class="mb-6" />
    <VRow>
      <VCol cols="6" md="6" lg="3" v-for="w in works" :key="w.title">
        <VCard class="rounded-lg">
          <VImg :src="w.image" />
          <VCardTitle class="pb-2">{{ w.title }}</VCardTitle>
          <VCardText>
            <div class="d-flex flex-wrap ga-1">
              <VChip
                v-for="t in w.tags"
                :key="t"
                class="mb-1"
                size="small"
                color="primary"
                :text="t"
              />
            </div>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="6" lg="3" md="6">
        <VBtn
          size="lg"
          variant="tonal"
          color="primary"
          class="w-100 h-100 rounded-lg"
          elevation="20"
        >
          <component :is="IconArrowUpRight" size="30" /> More Work
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>
