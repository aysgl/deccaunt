<script setup lang="ts">
import {
  IconPhone,
  IconMapDollar,
  IconSettings,
  IconShieldHalfFilled,
} from "@tabler/icons-vue";
import SectionTitle from "./common/SectionTitle.vue";
import { ref } from "vue";

const advanteges = ref([
  {
    title: "Honest communication",
    description:
      "Our platform ensures that our messages are honest and transparent.",
    icons: IconPhone,
  },
  {
    title: "Transparent prices",
    description:
      "Our platform ensures that our messages are honest and transparent.",
    icons: IconMapDollar,
  },
  {
    title: "Guaranteed delivery time",
    description:
      "Our platform ensures that our messages are honest and transparent.",
    icons: IconShieldHalfFilled,
  },
  {
    title: "Professional experience",
    description:
      "Our platform ensures that our messages are honest and transparent.",
    icons: IconSettings,
  },
]);
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle title="Our Advantages" class="mb-8" />
    <VRow>
      <VCol cols="12" md="3" v-for="a in advanteges" :key="a.title">
        <VCard color="light" class="h-100 rounded-lg" flat>
          <VCardText>
            <div class="d-flex justify-end mb-4">
              <component
                :is="a.icons"
                color="rgb(var(--v-theme-primary))"
                :size="60"
              />
            </div>
            <h3>{{ a.title }}</h3>
            <p>{{ a.description }}</p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
