<script setup lang="ts">
import { ref } from "vue";
import { IconMinus, IconPlus } from "@tabler/icons-vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import { useI18n } from "vue-i18n";

const tab = ref(null);
const { t } = useI18n();
const projects = ref([
  {
    id: 1,
    name: t("portfolio.all"),
    works: [
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
    ],
  },
  {
    id: 2,
    name: t("portfolio.finished"),
    works: [
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
    ],
  },
  {
    id: 3,
    name: t("portfolio.continue"),
    works: [
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
    ],
  },
]);
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle
      :title="t('portfolio.title')"
      class="mb-6"
      position="center"
    />

    <VTabs v-model="tab" align-tabs="center">
      <VTab :value="t.id" v-for="t in projects" :key="t.id">
        {{ t.name }}
      </VTab>
    </VTabs>

    <VTabsWindow v-model="tab" class="mt-4">
      <VTabsWindowItem v-for="q in projects" :key="q.id" :value="q.id">
        <VRow flat bg-color="light">
          <VCol cols="12" md="6" lg="3" v-for="w in q.works" :key="w.title">
            <VCard flat color="light" class="rounded-lg">
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
        </VRow>
      </VTabsWindowItem>
    </VTabsWindow>
  </VContainer>
</template>
