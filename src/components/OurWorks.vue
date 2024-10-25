<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconPlus, IconArrowUpRight } from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const works = ref([
  {
    title: "Phoenix Polymer",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.ecommerce")],
  },
  {
    title: "Shamkir Agro Logistics",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.corporate"), t("tags.business")],
  },
  {
    title: "Reginal Group",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.corporate")],
  },
  {
    title: "SamWood",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.corporate"), t("tags.business")],
  },
  {
    title: "Victory",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.ecommerce")],
  },
  {
    title: "iRobot",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.ecommerce")],
  },
  {
    title: "Social Partner",
    description: "E-commerce website built with Phoenix Polymer framework",
    image: "https://placehold.co/600x400/012ead/e1e6f5",
    tags: [t("tags.corporate")],
  },
]);
</script>

<template>
  <VContainer>
    <SectionTitle
      :title="t('home.our_latest_work')"
      position="center"
      class="mb-6"
    />
    <VRow>
      <VCol cols="12" md="6" lg="3" v-for="w in works" :key="w.title">
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
      <VCol cols="12" lg="3" md="6">
        <VBtn
          size="lg"
          variant="tonal"
          color="primary"
          class="w-100 h-100 rounded-lg py-10"
          elevation="20"
        >
          <component :is="IconArrowUpRight" size="30" />
          {{ t("home.more_work") }}
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>
