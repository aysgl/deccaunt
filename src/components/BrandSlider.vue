<template>
  <VContainer fluid class="position-relative mb-16" style="width: 90%">
    <VContainer
      class="bg-black rounded-lg position-absolute bottom-0 right-0 left-0 pa-1"
      max-width="788"
    >
      <splide
        :options="{
          rewind: true,
          perPage: 4,
          breakpoints: {
            640: {
              perPage: 2,
            },
          },
          pagination: false,
          arrows: true,
          autoplay: true,
          perMove: 1,
          classes: {
            arrows: 'arrows',
          },
        }"
        class="px-md-16"
      >
        <splide-slide v-for="(logo, index) in references" :key="index">
          <VCard flat class="ma-1" color="white">
            <VImg
              height="60px"
              cover
              :src="`http://127.0.0.1:8080/uploads/${logo.fileName}`"
            />
          </VCard>
        </splide-slide>
      </splide>
    </VContainer>
  </VContainer>
</template>

<script setup lang="ts">
import api from "@/stores/api";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { onMounted, ref } from "vue";

const references = ref([]);

const fetchReferences = async () => {
  try {
    const response = await api.get("/api/references");
    const data = response.data;
    references.value = data.references;
  } catch (error) {
    console.error("Error fetching references:", error);
  }
};

onMounted(() => {
  fetchReferences();
});
</script>

<style scoped lang="scss">
.arrows {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  z-index: 100;
  top: 32px;
  .splide__arrow {
    background: none !important;
    svg {
      fill: white;
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
