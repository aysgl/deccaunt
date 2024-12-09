<template>
  <VContainer class="pb-16">
    <VRow class="d-flex align-center">
      <VCol cols="12" md="8" class="mx-auto mb-6">
        <SectionTitle :title="leading.title" position="center" class="mb-4" />
        <p class="text-h4 font-weight-light text-center mb-6">
          {{ leading.description }}
        </p>
        <div class="text-center">
          <VBtn to="/portfolio" variant="tonal" color="primary">
            {{ t("portfolio.all_view") }}
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <splide
      :options="{
        rewind: true,
        perPage: 4,
        breakpoints: {
          992: {
            perPage: 3,
          },
          640: {
            perPage: 2,
            destroy: true,
          },
        },
        pagination: false,
        arrows: showArrows,
        autoplay: true,
        gap: 20,
        perMove: 1,
        classes: {
          arrows: 'arrows',
        },
      }"
    >
      <splide-slide v-for="s in services" :key="s.title">
        <VCard
          color="primary"
          elevation="0"
          height="100%"
          class="rounded-lg text-center mb-md-0 mb-3"
          to="/services"
        >
          <VResponsive :aspect-ratio="aspectRatio">
            <VImg
              :src="`http://127.0.0.1:8080/uploads/${s.files[0].fileName}`"
              class="align-center h-100"
              gradient="to top, rgba(var(--v-theme-primary), .8), rgba(0, 0, 0, .6)"
              cover
            >
              <VCardTitle line="2" class="font-weight-bold">
                {{ s.name }}
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
          </VResponsive>
        </VCard>
      </splide-slide>
    </splide>
  </VContainer>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { useI18n } from "vue-i18n";
import api from "@/stores/api";

const { t } = useI18n();
const services = ref();
const leading = ref<{ title: string; description: string }>({
  title: "",
  description: "",
});
const showArrows = computed(() => services.value?.length > 4);

const aspectRatio = ref(3 / 4);

const updateAspectRatio = () => {
  aspectRatio.value = window.innerWidth <= 640 ? 4 / 3 : 3 / 4;
};

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

onMounted(() => {
  fetchServices();
  fetchLeading();
  updateAspectRatio();
  window.addEventListener("resize", updateAspectRatio);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateAspectRatio);
});
</script>
