<template>
  <VContainer class="py-16">
    <VRow class="d-flex align-center">
      <VCol>
        <h2 class="text-h1 mb-4">Our services</h2>
        <p class="text-h4 font-weight-light">
          Deccaunt as a team offers quality and reliable service with digital
          solutions, websites, ERP systems, mobile applications, email services,
          integration of payment systems and other services.
        </p>
        <VBtn size="large" class="rounded-xl mt-4" text="More Details" />
      </VCol>
      <VCol>
        <VRow>
          <VCol cols="12" md="6" v-for="s in services" :key="s.title">
            <VCard color="white" height="100%" class="rounded-lg">
              <VCardTitle line="2">
                {{ s.title }}
              </VCardTitle>
              <VCardText>
                {{ s.description.slice(0, 100) }}...
                <div class="d-flex flex-wrap ga-2 mt-4">
                  <VChip
                    color="primary"
                    size="small"
                    v-for="t in s.tags"
                    :key="t"
                  >
                    {{ t }}
                  </VChip>
                </div>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const services = ref([
  {
    title: "Preparation of sites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["Landing Page", "Blog", "E-Commerce", "Business"],
  },
  {
    title: "Development of ERP systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["ERP", "CRM", "HRM", "POS"],
  },
  {
    title: "Development of mobile applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["Landing Page", "Blog", "E-Commerce", "Business"],
  },
  {
    title: "Corporate Email preparation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["Landing Page", "ERP", "E-Commerce", "Business"],
  },
]);
</script>
