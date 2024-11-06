<script setup lang="ts">
import SectionTitle from "./common/SectionTitle.vue";
import { computed, onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";
import api from "@/stores/api";

const { t } = useI18n();

const advanteges = ref([]);
const splideOptions = computed(() => ({
  rewind: true,
  perPage: 4,
  gap: "1.5rem",
  breakpoints: {
    992: {
      perPage: 3,
    },
    640: {
      perPage: 2,
    },
    430: {
      perPage: 1,
      destroy: true,
    },
  },
  pagination: false,
  arrows: advanteges.value.length > 4,
  autoplay: true,
  perMove: 1,
  classes: {
    arrows: "arrows",
  },
}));

const fetchAdvantages = async () => {
  try {
    const response = await api.get("/api/advantages");
    const data = response.data;
    advanteges.value = data.advantages;
  } catch (error) {
    console.error("Error fetching advanteges:", error);
  }
};

onMounted(() => {
  fetchAdvantages();
});
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle
      :title="t('home.advantages.title')"
      position="center"
      class="mb-8"
    />
    <splide :options="splideOptions">
      <splide-slide v-for="a in advanteges" :key="a.id">
        <VCard color="light" class="h-100 rounded-lg pa-md-4 pa-0 mb-3" flat>
          <VCardText class="text-center">
            <div class="d-flex justify-center mb-md-4 mb-1">
              <span v-html="a.icon" class="tabler"></span>
            </div>
            <h3>{{ a.title }}</h3>
            <p>{{ a.description }}</p>
          </VCardText>
        </VCard>
      </splide-slide>
    </splide>
  </VContainer>
</template>

<style lang="scss">
.tabler {
  svg {
    width: 100%;
    height: 60px;
    color: rgb(var(--v-theme-primary));
  }
  @media screen and (max-width: 600px) {
    svg {
      width: 100%;
      height: 40px;
    }
  }
}
</style>
