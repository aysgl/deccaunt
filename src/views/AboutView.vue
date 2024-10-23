<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import CustomerReview from "@/components/CustomerReview.vue";
</script>

<template>
  <VContainer>
    <SectionTitle
      class="mb-6"
      title="Let us tell you a little about ourselves"
    />
    <VRow>
      <VCol cols="6">
        <VCard color="primary" flat class="rounded-lg">
          <VImg
            class="align-end h-100"
            gradient="to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"
            src="https://images.pexels.com/photos/3228684/pexels-photo-3228684.jpeg"
          >
            <VCardTitle class="text-h3 font-weight-bold">
              Our mission
            </VCardTitle>
            <VCardText>
              Deccaount aims for customer satisfaction and we understand that a
              satisfied customer is the best form of promotion. By solving the
              digital-technical problems of our customers, we ensure that they
              are ahead of the competition.
            </VCardText>
          </VImg>
        </VCard>
      </VCol>
      <VCol cols="6">
        <VCard color="primary" flat class="rounded-lg">
          <VImg
            class="align-end h-100"
            gradient="to top, rgba(var(--v-theme-primary), 1), rgba(0, 0, 0, .4)"
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          >
            <VCardTitle class="text-h3 font-weight-bold"
              >Our vision
            </VCardTitle>
            <VCardText>
              As a team of Deccaount, we offer quality and reliable services for
              your business, organization and even personal integration of
              digital solutions, websites, ERP systems, mobile applications,
              email services, payment systems.
            </VCardText>
          </VImg>
        </VCard>
      </VCol>
    </VRow>
    <SectionTitle class="mb-6 mt-16" title="References" position="center" />
    <VRow>
      <VCol cols="2" v-for="item in 18" :key="item">
        <VCard color="light" flat class="pa-10 rounded-lg">
          <div class="text-center">
            Logo
            <p>{{ item }}</p>
          </div>
        </VCard>
      </VCol>
    </VRow>
    <SectionTitle
      class="mb-6 mt-16"
      title="Reviews of our customers"
      position="center"
    />
    <CustomerReview />
  </VContainer>
</template>
