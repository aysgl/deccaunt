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
const leading = ref<{ title: string; description: string }>({
  title: "",
  description: "",
});

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
