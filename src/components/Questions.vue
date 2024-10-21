<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";
import { IconMinus, IconPlus } from "@tabler/icons-vue";

const tab = ref(null);

const questions = ref([
  {
    id: 1,
    name: "Preparation of Sites",
    questions: [
      {
        question: "What is the difference between seo and sem?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "What is a backlink and why is it important?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "Can i do seo optimization of my site myself?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "How Much does seo services cost?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site.",
      },
    ],
  },
  {
    id: 2,
    name: "ERP System",
    questions: [
      {
        question: "How much does an erp system cost?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "How long does it take to implement an erp system?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "What are the benefits of the rp system?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
    ],
  },
  {
    id: 3,
    name: "Email Services",
    questions: [
      {
        question: "How do email archivign and backups work?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "How to create corporate email adresses?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
      {
        question: "Why are corporate email service important?",
        answer:
          "Lorem is just ipsum dolor sit amet, consectetur. Rempis just as much as possible in my site",
      },
    ],
  },
]);
</script>

<template>
  <VContainer class="pb-16">
    <SectionTitle
      title="Frequently asked questions"
      position="center"
      class="mb-6"
    />

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
