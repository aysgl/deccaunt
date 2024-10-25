<script setup lang="ts">
import { computed, ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconMinus, IconPlus } from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const tab = ref(null);

const questions = computed(() => [
  {
    id: 1,
    name: t("home.faq.faq_1"),
    questions: [
      {
        question: t("home.faq.question_1"),
        answer: t("home.faq.answer_1"),
      },
      {
        question: t("home.faq.question_2"),
        answer: t("home.faq.answer_2"),
      },
      {
        question: t("home.faq.question_3"),
        answer: t("home.faq.answer_3"),
      },
      {
        question: t("home.faq.question_4"),
        answer: t("home.faq.answer_4"),
      },
    ],
  },
  {
    id: 2,
    name: t("home.faq.faq_2"),
    questions: [
      {
        question: t("home.faq.question_1"),
        answer: t("home.faq.answer_1"),
      },
      {
        question: t("home.faq.question_2"),
        answer: t("home.faq.answer_2"),
      },
      {
        question: t("home.faq.question_3"),
        answer: t("home.faq.answer_3"),
      },
      {
        question: t("home.faq.question_4"),
        answer: t("home.faq.answer_4"),
      },
    ],
  },
  {
    id: 3,
    name: t("home.faq.faq_3"),
    questions: [
      {
        question: t("home.faq.question_1"),
        answer: t("home.faq.answer_1"),
      },
      {
        question: t("home.faq.question_2"),
        answer: t("home.faq.answer_2"),
      },
      {
        question: t("home.faq.question_3"),
        answer: t("home.faq.answer_3"),
      },
      {
        question: t("home.faq.question_4"),
        answer: t("home.faq.answer_4"),
      },
    ],
  },
]);
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle :title="t('home.faq.title')" position="center" class="mb-6" />

    <VTabs v-model="tab" align-tabs="center">
      <VTab :value="t.id" v-for="t in questions" :key="t.id">
        {{ t.name }}
      </VTab>
    </VTabs>

    <VTabsWindow v-model="tab" class="mt-4">
      <VTabsWindowItem v-for="q in questions" :key="q.id" :value="q.id">
        <VExpansionPanels flat bg-color="light">
          <VExpansionPanel
            :text="item.answer"
            v-for="item in q.questions"
            :key="item.question"
            class="my-1"
            :expand-icon="IconPlus"
            :collapse-icon="IconMinus"
          >
            <template v-slot:title>
              <strong class="my-2">{{ item.question }}</strong>
            </template>
          </VExpansionPanel>
        </VExpansionPanels>
      </VTabsWindowItem>
    </VTabsWindow>
  </VContainer>
</template>
