<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import {
  IconArrowLeft,
  IconArrowRight,
  IconMinus,
  IconPlus,
} from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";
import api from "@/stores/api";

const { t } = useI18n();
const tab = ref(null);

// const questions = computed(() => [
//   {
//     id: 1,
//     name: t("home.faq.faq_1"),
//     questions: [
//       {
//         question: t("home.faq.question_1"),
//         answer: t("home.faq.answer_1"),
//       },
//       {
//         question: t("home.faq.question_2"),
//         answer: t("home.faq.answer_2"),
//       },
//       {
//         question: t("home.faq.question_3"),
//         answer: t("home.faq.answer_3"),
//       },
//       {
//         question: t("home.faq.question_4"),
//         answer: t("home.faq.answer_4"),
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: t("home.faq.faq_2"),
//     questions: [
//       {
//         question: t("home.faq.question_1"),
//         answer: t("home.faq.answer_1"),
//       },
//       {
//         question: t("home.faq.question_2"),
//         answer: t("home.faq.answer_2"),
//       },
//       {
//         question: t("home.faq.question_3"),
//         answer: t("home.faq.answer_3"),
//       },
//       {
//         question: t("home.faq.question_4"),
//         answer: t("home.faq.answer_4"),
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: t("home.faq.faq_3"),
//     questions: [
//       {
//         question: t("home.faq.question_1"),
//         answer: t("home.faq.answer_1"),
//       },
//       {
//         question: t("home.faq.question_2"),
//         answer: t("home.faq.answer_2"),
//       },
//       {
//         question: t("home.faq.question_3"),
//         answer: t("home.faq.answer_3"),
//       },
//       {
//         question: t("home.faq.question_4"),
//         answer: t("home.faq.answer_4"),
//       },
//     ],
//   },
// ]);

const questions = ref();

const fetchQuestions = async () => {
  try {
    const response = await api.get("/api/faqs");
    const data = response.data;
    questions.value = data;
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

onMounted(() => {
  fetchQuestions();
});

watch(questions, (newQuestions) => {
  if (newQuestions.length > 0) {
    tab.value = newQuestions[0].id;
  }
});
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle :title="t('home.faq.title')" position="center" class="mb-6" />

    <VTabs
      v-model="tab"
      color="primary"
      align-tabs="center"
      :next-icon="IconArrowRight"
      :prev-icon="IconArrowLeft"
      show-arrows
    >
      <VTab
        v-for="category in questions"
        :key="category.id"
        :value="category.id"
      >
        {{ category.category }}
      </VTab>
    </VTabs>

    <VTabsWindow v-model="tab" class="mt-4">
      <VTabsWindowItem
        v-for="category in questions"
        :key="category.id"
        :value="category.id"
      >
        <VExpansionPanels flat bg-color="light">
          <VExpansionPanel
            v-for="item in category.items"
            :key="item.id"
            class="my-1"
            :expand-icon="IconPlus"
            :collapse-icon="IconMinus"
          >
            <template v-slot:title>
              <strong class="my-2">{{ item.question }}</strong>
            </template>
            <VExpansionPanelText>
              {{ item.answer }}
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VTabsWindowItem>
    </VTabsWindow>
  </VContainer>
</template>
