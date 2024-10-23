<template>
  <v-carousel
    class="rounded-lg"
    height="300"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    hide-delimiters
    :prev-icon="IconArrowLeft"
    :next-icon="IconArrowRight"
  >
    <v-carousel-item v-for="(review, i) in reviews" :key="i">
      <v-sheet height="100%" color="primary">
        <div class="d-flex fill-height justify-center align-center flex-column">
          <v-avatar color="light" size="large" variant="tonal" class="mb-3">
            <span>{{ review.name.slice(0, 1) }}</span>
          </v-avatar>
          <div class="text-h4 mb-4">{{ review.name }}</div>
          <div class="text-h3">{{ review.comment }}</div>
          <div class="mt-4">Rating: {{ review.rating }}/5</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import { ref } from "vue";

const reviews = ref([
  {
    name: "John Doe",
    comment: "I was really satisfied with the service, everything was great!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    comment: "Good value for money, met my expectations.",
    rating: 4,
  },
  {
    name: "Sarah Johnson",
    comment: "I faced some issues, but customer service resolved them.",
    rating: 3,
  },
  {
    name: "Michael Brown",
    comment: "Excellent quality service, highly recommend it.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    comment: "There was a slight delay, but overall I'm happy.",
    rating: 4,
  },
]);
</script>
