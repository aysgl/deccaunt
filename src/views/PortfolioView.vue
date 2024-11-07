<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import SectionTitle from "@/components/common/SectionTitle.vue";
import { useI18n } from "vue-i18n";
import api from "@/stores/api";

const tab = ref(null);

const portfolios = ref([]);
const leading = ref<{ title: string; description: string }>({
  title: "",
  description: "",
});
const tags = ref([]);

// Fetch data functions
const fetchPortfolios = async () => {
  try {
    const response = await api.get("/api/portfolios");
    portfolios.value = response.data.portfolios;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
  }
};

const fetchLeading = async () => {
  try {
    const response = await api.get("/api/portfolios/leading");
    leading.value = response.data.leading;
  } catch (error) {
    console.error("Error fetching leading:", error);
  }
};

const fetchTags = async () => {
  try {
    const response = await api.get("/api/portfolios/tags");
    tags.value = response.data.tags;
  } catch (error) {
    console.error("Error fetching tags:", error);
  }
};

onMounted(() => {
  fetchPortfolios();
  fetchLeading();
  fetchTags();
});

// Computed property to group portfolios by group name
const groupedPortfolios = computed(() => {
  const grouped = portfolios.value.reduce((acc, portfolio) => {
    const group = portfolio.group;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(portfolio);
    return acc;
  }, {});
  return grouped;
});

watch(groupedPortfolios, (newGroups) => {
  if (!tab.value && Object.keys(newGroups).length > 0) {
    tab.value = Object.keys(newGroups)[0]; // Set to the first group name
  }
});
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle :title="leading?.title" class="mb-6" position="center" />
    <p class="text-h4 font-weight-light text-center mb-6">
      {{ leading?.description }}
    </p>
    <VTabs v-model="tab" align-tabs="center">
      <VTab
        v-for="(items, groupName) in groupedPortfolios"
        :key="groupName"
        :value="groupName"
      >
        {{ groupName }}
      </VTab>
    </VTabs>
    <VTabsWindow v-model="tab" class="mt-4">
      <VTabsWindowItem
        v-for="(items, groupName) in groupedPortfolios"
        :key="groupName"
        :value="groupName"
      >
        <VRow flat bg-color="light">
          <VCol v-for="p in items" :key="p.id" cols="12" md="6" lg="3">
            <VCard flat color="light" class="rounded-lg">
              <VResponsive :aspect-ratio="4 / 3">
                <VImg
                  cover
                  class="h-100 w-100"
                  :src="`http://127.0.0.1:8080/uploads/${p.files[0].fileName}`"
                />
              </VResponsive>
              <VCardTitle class="pb-2">{{ p.name }}</VCardTitle>
              <VCardText>
                <div class="d-flex flex-wrap gap-1">
                  <VChip
                    v-for="tag in p.tags"
                    :key="tag"
                    class="mb-1"
                    size="small"
                    color="primary"
                    :text="tag"
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
