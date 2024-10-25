<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import CustomerReview from "@/components/CustomerReview.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <VContainer>
    <SectionTitle class="mb-6" :title="t('about.title')" position="center" />
    <p class="text-h4 font-weight-light text-center mb-16">
      {{ t("about.description") }}
    </p>
    <VRow>
      <VCol cols="6">
        <VCard color="primary" flat class="rounded-lg">
          <VImg
            class="align-end h-100"
            gradient="to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"
            src="https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg"
          >
            <VCardTitle class="text-h3 font-weight-bold">
              {{ t("about.our_mission") }}
            </VCardTitle>
            <VCardText>
              {{ t("about.our_mission_desc") }}
            </VCardText>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="6">
        <VCard color="primary" flat class="rounded-lg">
          <VImg
            class="align-end h-100"
            gradient="to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <VCardTitle class="text-h3 font-weight-bold">
              {{ t("about.our_vision") }}
            </VCardTitle>
            <VCardText>
              {{ t("about.our_vision_desc") }}
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
      <VCol cols="2" v-for="item in 18" :key="item">
        <VCard color="light" flat class="pa-10 rounded-lg">
          <div class="text-center">
            Logo
            <p>{{ item }}</p>
          </div>
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
