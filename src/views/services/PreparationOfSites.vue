<template>
  <VContainer>
    <SectionTitle title="Preparation of sites" position="center" />

    <h2 class="text-h2 text-center mt-6">
      Site Development: What Kinds of Sites Do We Build?
    </h2>
    <v-card flat color="light" class="mt-6 rounded-lg">
      <v-tabs v-model="tab" grow align-tabs="center">
        <v-tab v-for="(s, i) in sites" :key="s.title" :value="i">
          {{ s.title }}
        </v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="(s, i) in sites" :key="s.title" :value="i">
            {{ s.description }}
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </VContainer>
</template>

<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import { ref } from "vue";

const tab = ref(null);
const sites = ref([
  {
    title: "Corporate Sites",
    description:
      "Corporate websites are used to promote the company's services, products, projects and team. The main purpose of the corporate website is to provide extensive information about the company to customers and partners, to gain their trust. Some key features of corporate websites are:",
  },
  {
    title: "E-commerce Sites",
    description:
      "E-commerce sites are platforms that sell products or services over the Internet. Through these types of sites, customers order products online, pay for them, and wait for them to be delivered to their homes. E-commerce sites are a 24/7 one-stop shop for businesses. It provides a convenient shopping environment for users and is an ideal tool for business owners to expand and attract more customers.",
  },
  {
    title: "Blog and News Sites",
    description:
      "Blogs and news sites are considered content-based sites. This type of sites can be used by individuals or organizations. Blogs are mainly created to write articles about personal experiences, tips, guides and various topics. News sites are used to convey the main events and news of the day.",
  },
  {
    title: "Portfolio Sites",
    description:
      "Portfolio sites are used to showcase the work of individuals or companies. Especially for those in creative fields (designers, photographers, writers, etc.), portfolio sites are a great way to showcase their work and present it to potential clients. These types of sites present their work in a more visual form and attract the interest of customers.",
  },
]);

const questions = ref([
  {
    question: "How long does it take to develop websites?",
    answer:
      "Website development can take weeks or months, depending on the complexity of the project. Simple sites are faster to develop, while sites that require complex features take longer to develop.",
  },
  {
    question: "What information is needed for the development of sites?",
    answer:
      "When developing websites, detailed information about your business is required. This information includes service and product descriptions, logos, images, and your site development goals.",
  },
  {
    question: "Will my site work on mobile devices?",
    answer:
      "Yes, modern website development is mobile-friendly, allowing users to easily access it from both mobile devices and computers.",
  },
  {
    question:
      "Will there be technical support after the development of the sites?",
    answer:
      "Yes, we offer 6 months of technical support and 1 year of hosting after the site development process.",
  },
  {
    question: "Is SEO service included in website development?",
    answer:
      "If the client wants, SEO service is included in the website development package. Thanks to SEO service, your site can attract more users.",
  },
  {
    question: "How is security ensured during the development of websites?",
    answer:
      "SSL certificate, security updates and other protective measures are taken during the development of the sites. Back-up copies are kept during the site development process so that data is not lost.",
  },
  {
    question: "Will I be able to make changes to my site?",
    answer:
      "Yes, a user-friendly dashboard is provided when developing websites. Through this panel, you can easily manage your site.",
  },
  {
    question: "How much does it cost to develop websites?",
    answer:
      "The cost of developing websites depends on the requirements and functions of the project. A specific price offer is given based on your requirements for website development.",
  },
]);
</script>
