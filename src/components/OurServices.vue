<template>
  <VContainer class="pb-16">
    <VRow class="d-flex align-center">
      <VCol cols="8" class="mx-auto mb-6">
        <SectionTitle
          :title="t('services.title')"
          position="center"
          class="mb-4"
        />
        <p class="text-h4 font-weight-light text-center">
          {{ t("services.description") }}
        </p>
      </VCol>
      <VCol cols="12">
        <VRow>
          <VCol cols="12" md="6" lg="3" v-for="s in services" :key="s.title">
            <VCard color="primary" height="100%" class="rounded-lg text-center">
              <VImg
                :src="s.image"
                class="align-center h-100"
                gradient="to top, rgba(var(--v-theme-primary), .8), rgba(0, 0, 0, .6)"
                cover
              >
                <VCardTitle line="2" class="font-weight-bold">
                  {{ s.title }}
                </VCardTitle>
                <VCardText>
                  {{ s.description.slice(0, 100) }}...
                  <div class="d-flex flex-wrap justify-center ga-2 mt-4">
                    <VChip size="small" v-for="t in s.tags" :key="t">
                      {{ t }}
                    </VChip>
                  </div>
                </VCardText>
              </VImg>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const services = computed(() => [
  {
    title: t("services.services_1"),
    description: t("services.services_1_desc"),
    tags: [
      t("tags.landing_page"),
      t("tags.blog"),
      t("tags.ecommerce"),
      t("tags.business"),
    ],
    image:
      "https://images.pexels.com/photos/4981807/pexels-photo-4981807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: t("services.services_2"),
    description: t("services.services_2_desc"),
    tags: [t("tags.erp"), t("tags.hrm"), t("tags.pos")],
    image:
      "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: t("services.services_3"),
    description: t("services.services_3_desc"),
    tags: [
      t("tags.landing_page"),
      t("tags.blog"),
      t("tags.ecommerce"),
      t("tags.business"),
    ],
    image:
      "https://images.pexels.com/photos/5717781/pexels-photo-5717781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: t("services.services_4"),
    description: t("services.services_4_desc"),
    tags: [
      t("tags.landing_page"),
      t("tags.erp"),
      t("tags.ecommerce"),
      t("tags.business"),
    ],
    image:
      "https://images.pexels.com/photos/5467594/pexels-photo-5467594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]);
</script>
