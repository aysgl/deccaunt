<script setup lang="ts">
import { onMounted, ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconPlus, IconArrowUpRight } from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";
import api from "@/stores/api";

const { t } = useI18n();
const portfolios = ref();
const leading = ref<{ title: string; description: string }>({
  title: "",
  description: "",
});

const fetchPortfolios = async () => {
  try {
    const response = await api.get("/api/portfolio");
    const data = response.data;
    portfolios.value = data.portfolios;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
  }
};
const fetchLeading = async () => {
  try {
    const response = await api.get("/api/portfolio/leading");
    const data = response.data;
    leading.value = data.leading;
  } catch (error) {
    console.error("Error fetching portfolios:", error);
  }
};

onMounted(() => {
  fetchPortfolios();
  fetchLeading();
});
</script>

<template>
  <VContainer>
    <SectionTitle :title="leading?.title" position="center" class="mb-6" />
    <VRow>
      <VCol
        cols="6"
        md="6"
        lg="3"
        v-for="w in portfolios?.slice(0, 7)"
        :key="w.title"
      >
        <VCard class="rounded-lg">
          <VImg :src="w.image" />
          <VCardTitle class="pb-2">{{ w.name }}</VCardTitle>
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
          to="/portfolio"
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
