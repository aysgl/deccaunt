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
    <SectionTitle title="Our Latest Work" class="mb-6" />
    <VRow>
      <VCol cols="6" md="6" lg="3" v-for="w in works" :key="w.title">
        <h3 class="text-h4">{{ w.title }}</h3>
        <VImg class="rounded-lg my-2" :src="w.image" />
        <div class="d-flex flex-wrap ga-1">
          <VChip
            v-for="t in w.tags"
            :key="t"
            class="mb-1"
            size="small"
            color=""
            :text="t"
          />
        </div>
      </VCol>
      <VCol cols="6" lg="3" md="6">
        <h3 class="text-h4 text-white">.</h3>
        <VResponsive :aspect-ratio="6 / 4" class="my-2">
          <VBtn
            size="lg"
            variant="tonal"
            color="primary"
            class="w-100 h-100 rounded-lg"
          >
            <component :is="IconArrowUpRight" size="30" /> More Work
          </VBtn>
        </VResponsive>
      </VCol>
    </VRow>
  </VContainer>
</template>
