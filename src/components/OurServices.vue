<template>
  <VContainer class="py-16">
    <VRow class="d-flex align-center">
      <VCol cols="8" class="mx-auto mb-6">
        <SectionTitle title="Our services" position="center" class="mb-4" />
        <p class="text-h4 font-weight-light text-center">
          Deccaunt as a team offers quality and reliable service with digital
          solutions, websites, ERP systems, mobile applications, email services,
          integration of payment systems and other services.
        </p>
        <div class="d-flex justify-center">
          <VBtn size="large" class="rounded-xl mt-4" text="More Details" />
        </div>
      </VCol>
      <VCol cols="12">
        <VRow>
          <VCol cols="12" md="6" lg="3" v-for="s in services" :key="s.title">
            <VCard color="primary" height="100%" class="rounded-lg text-center">
              <VImg
                :src="s.image"
                class="align-center h-100"
                gradient="to top, rgba(var(--v-theme-primary), .8), rgba(0, 0, 0, .6)"
                cover
              >
                <VCardTitle line="2" class="font-weight-bold">
                  {{ s.title }}
                </VCardTitle>
                <VCardText>
                  {{ s.description.slice(0, 100) }}...
                  <div class="d-flex flex-wrap justify-center ga-2 mt-4">
                    <VChip size="small" v-for="t in s.tags" :key="t">
                      {{ t }}
                    </VChip>
                  </div>
                </VCardText>
              </VImg>
            </VCard>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SectionTitle from "./common/SectionTitle.vue";

const services = ref([
  {
    title: "Preparation of sites",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["Landing Page", "Blog", "E-Commerce", "Business"],
    image:
      "https://images.pexels.com/photos/4981807/pexels-photo-4981807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Development of ERP systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["ERP", "CRM", "HRM", "POS"],
    image:
      "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Development of mobile applications",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["Landing Page", "Blog", "E-Commerce", "Business"],
    image:
      "https://images.pexels.com/photos/5717781/pexels-photo-5717781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Corporate Email preparation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo euismod, accumsan felis eget, vulputate nunc. Sed euismod libero vel ipsum aliquet, a mattis ligula bibendum.",
    tags: ["Landing Page", "ERP", "E-Commerce", "Business"],
    image:
      "https://images.pexels.com/photos/5467594/pexels-photo-5467594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]);
</script>
