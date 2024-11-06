<template>
  <splide
    :options="{
      rewind: true,
      perPage: 2,
      breakpoints: {
        640: {
          perPage: 1,
          destroy: true,
        },
      },
      pagination: false,
      arrows: true,
      autoplay: true,
      gap: 20,
      perMove: 1,
      classes: {
        arrows: 'arrows',
      },
    }"
  >
    <splide-slide v-for="(review, i) in reviews" :key="i">
      <VCard
        color="primary"
        elevation="0"
        class="d-flex justify-center align-center h-100 pa-md-14 pa-0 mb-3"
      >
        <VCardText class="text-md-start text-center">
          <div class="w-100 text-md-end text-center mb-8">
            <v-avatar color="light" size="large" variant="tonal" class="mb-3">
              <span>{{ review.user }}</span>
            </v-avatar>
          </div>
          <div class="body-text-2" style="opacity: 0.7">
            {{ review.description }}
          </div>
          <div class="mt-4" style="opacity: 0.7">
            Rating: {{ review.rating }}/5
          </div>
        </VCardText>
      </VCard>
    </splide-slide>
  </splide>
</template>

<script setup lang="ts">
import api from "@/stores/api";
import { onMounted, ref, computed } from "vue";

const reviews = ref([]);

const getReviews = async () => {
  try {
    const response = await api.get("/api/reviews");
    const data = response.data;
    reviews.value = data.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
  }
};

// const groupedReviews = computed(() => {
//   const pairs = [];
//   for (let i = 0; i < reviews.value.length; i += 3) {
//     pairs.push(reviews.value.slice(i, i + 3));
//   }
//   return pairs;
// });

onMounted(() => {
  getReviews();
});
</script>
