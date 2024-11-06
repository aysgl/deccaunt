<template>
  <VContainer class="pb-16">
    <VRow class="d-flex align-center">
      <VCol cols="12" md="8" class="mx-auto mb-6">
        <SectionTitle :title="leading?.title" position="center" class="mb-4" />
        {{}}
        <p class="text-h4 font-weight-light text-center">
          {{ leading?.description }}
        </p>
      </VCol>
      <VCol cols="12">
        <div v-for="s in services" :key="s.title">
          <VRow class="mb-4">
            <VCol cols="12" md="4">
              <VCard
                color="primary"
                height="100%"
                class="rounded-lg text-center"
              >
                <VImg
                  :src="s.image"
                  class="align-center h-100"
                  gradient="to top, rgba(var(--v-theme-primary), .8), rgba(0, 0, 0, .6)"
                  cover
                >
                  <h2 class="font-weight-bold text-h2">
                    {{ s.name }}
                  </h2>
                  <VCardText>
                    <div class="d-flex flex-wrap justify-center ga-2 mt-4">
                      <VChip size="small" v-for="t in s.tags" :key="t">
                        {{ t }}
                      </VChip>
                    </div>
                  </VCardText>
                </VImg>
              </VCard>
            </VCol>
            <VCol cols="12" md="8">
              <VCard height="100%" color="white" class="rounded-lg">
                <VCardText>
                  {{ s.description }}
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import api from "@/stores/api";
import { onMounted, ref } from "vue";

const services = ref("");
const leading = ref("");
// const services = computed(() => [
//   {
//     title: t("services.services_1"),
//     description: t("services.services_1_desc"),
//     tags: [
//       t("tags.landing_page"),
//       t("tags.blog"),
//       t("tags.ecommerce"),
//       t("tags.business"),
//     ],
//     image:
//       "https://images.pexels.com/photos/4981807/pexels-photo-4981807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     title: t("services.services_2"),
//     description: t("services.services_2_desc"),
//     tags: [t("tags.erp"), t("tags.hrm"), t("tags.pos")],
//     image:
//       "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     title: t("services.services_3"),
//     description: t("services.services_3_desc"),
//     tags: [
//       t("tags.landing_page"),
//       t("tags.blog"),
//       t("tags.ecommerce"),
//       t("tags.business"),
//     ],
//     image:
//       "https://images.pexels.com/photos/5717781/pexels-photo-5717781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
//   {
//     title: t("services.services_4"),
//     description: t("services.services_4_desc"),
//     tags: [
//       t("tags.landing_page"),
//       t("tags.erp"),
//       t("tags.ecommerce"),
//       t("tags.business"),
//     ],
//     image:
//       "https://images.pexels.com/photos/5467594/pexels-photo-5467594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   },
// ]);

const fetchServices = async () => {
  try {
    const response = await api.get("/api/services");
    const data = response.data;
    services.value = data.services;
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

const fetchLeading = async () => {
  try {
    const response = await api.get("/api/services/leading");
    const data = response.data;
    leading.value = data.leading;
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

onMounted(async () => {
  await fetchServices();
  await fetchLeading();
});
</script>
