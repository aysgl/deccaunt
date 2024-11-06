<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import CustomerReview from "@/components/CustomerReview.vue";
import api from "@/stores/api";
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const references = ref([]);
const about = ref();

const fetchReferences = async () => {
  try {
    const response = await api.get("/api/references");
    const data = response.data;
    references.value = data.references;
  } catch (error) {
    console.error("Error fetching references:", error);
  }
};

const fetchAbout = async () => {
  try {
    const response = await api.get("/api/about");
    const data = response.data;
    about.value = data.about;
  } catch (error) {
    console.error("Error fetching about:", error);
  }
};

onMounted(async () => {
  await fetchAbout();
  fetchReferences();
});
</script>

<template>
  <VContainer v-if="about">
    <SectionTitle class="mb-6" :title="about[0]?.title" position="center" />
    <p class="text-h4 font-weight-light text-center mb-16">
      {{ about[0]?.description }}
    </p>
    <VRow>
      <VCol cols="12" md="6">
        <VCard
          color="primary"
          flat
          class="rounded-lg text-md-start text-center"
        >
          <VImg
            cover
            class="align-end h-100"
            gradient="to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"
            src="https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg"
          >
            <VCardTitle class="text-h3 font-weight-bold">
              {{ t("about.our_mission") }}
            </VCardTitle>
            <VCardText>
              {{ about[0]?.mission }}
            </VCardText>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="12" md="6">
        <VCard
          color="primary"
          flat
          class="rounded-lg text-md-start text-center"
        >
          <VImg
            cover
            class="align-end h-100"
            gradient="to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <VCardTitle class="text-h3 font-weight-bold">
              {{ t("about.our_vision") }}
            </VCardTitle>
            <VCardText>
              {{ about[0]?.vision }}
            </VCardText>
          </VImg>
        </VCard>
      </VCol>
    </VRow>
    <SectionTitle
      class="mb-6 mt-16"
      :title="t('about.references')"
      position="center"
    />
    <VRow>
      <VCol cols="6" md="2" v-for="item in references" :key="item">
        <VCard color="light" flat class="rounded-lg">
          <VImg
            cover
            height="90"
            :src="`http://127.0.0.1:8080/uploads/${item.fileName}`"
          />
        </VCard>
      </VCol>
    </VRow>
    <SectionTitle
      class="mb-6 mt-16"
      :title="t('about.reviews')"
      position="center"
    />
    <CustomerReview />
  </VContainer>
</template>
