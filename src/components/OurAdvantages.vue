<script setup lang="ts">
import {
  IconPhone,
  IconMapDollar,
  IconSettings,
  IconShieldHalfFilled,
} from "@tabler/icons-vue";
import SectionTitle from "./common/SectionTitle.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const advanteges = ref([
  {
    title: t("home.advantages.advantage_1"),
    description: t("home.advantages.advantage_1_desc"),
    icons: IconPhone,
  },
  {
    title: t("home.advantages.advantage_2"),
    description: t("home.advantages.advantage_2_desc"),
    icons: IconMapDollar,
  },
  {
    title: t("home.advantages.advantage_3"),
    description: t("home.advantages.advantage_3_desc"),
    icons: IconShieldHalfFilled,
  },
  {
    title: t("home.advantages.advantage_4"),
    description: t("home.advantages.advantage_4_desc"),
    icons: IconSettings,
  },
]);
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle
      :title="t('home.advantages.title')"
      position="center"
      class="mb-8"
    />
    <VRow>
      <VCol cols="12" md="6" lg="3" v-for="a in advanteges" :key="a.title">
        <VCard color="light" class="h-100 rounded-lg pa-6" flat>
          <VCardText class="text-center">
            <div class="d-flex justify-center mb-4">
              <component
                :is="a.icons"
                color="rgb(var(--v-theme-primary))"
                :size="60"
              />
            </div>
            <h3>{{ a.title }}</h3>
            <p>{{ a.description }}</p>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
