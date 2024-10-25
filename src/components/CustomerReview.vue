<template>
  <v-carousel
    class="rounded-lg"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    hide-delimiters
    :prev-icon="IconArrowLeft"
    :next-icon="IconArrowRight"
  >
    <v-carousel-item v-for="(review, i) in reviews" :key="i">
      <v-sheet height="100%" color="primary" class="pa-10">
        <div class="d-flex fill-height justify-center align-center flex-column">
          <v-avatar color="light" size="large" variant="tonal" class="mb-3">
            <span>{{ review.name.slice(0, 1) }}</span>
          </v-avatar>
          <div class="text-h4 mb-4">{{ review.name }}</div>
          <div class="text-h5 text-center" style="max-width: 600px">
            {{ review.comment }}
          </div>
          <div class="mt-4">Rating: {{ review.rating }}/5</div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const reviews = ref([
  {
    name: t("about.review_1"),
    comment: t("about.review_1_desc"),
    rating: 5,
  },
  {
    name: t("about.review_2"),
    comment: t("about.review_2_desc"),
    rating: 4,
  },
  {
    name: t("about.review_3"),
    comment: t("about.review_3_desc"),
    rating: 3,
  },
]);
</script>
