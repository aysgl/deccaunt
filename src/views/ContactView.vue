<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import ConfirmDialog from "@/components/common/ConfirmDialog.vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const countryCode = ref("AZ");
const address = ref([
  {
    title: t("contact.address"),
    description: "Zarifa Aliyeva 55, Yeni Hayat Plaza",
  },
  { title: t("contact.working_hours"), description: "09:00 - 18:00" },
  { title: t("contact.phone"), description: "+9 505 234 50 50" },
  { title: t("contact.email"), description: "info@example.com" },
]);

const data = ref({
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  message: "",
});
const errors = ref("");
const showDialog = ref(false);

const isEmailValid = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isFormValid = computed(() => {
  return (
    data.value.firstname &&
    data.value.lastname &&
    isEmailValid(data.value.email) &&
    data.value.phone &&
    data.value.message
  );
});

const handleSubmit = () => {
  if (isFormValid.value) {
    errors.value = "";
    showDialog.value = true;
  } else {
    errors.value = "Please correct the errors in the form.";
  }
};
</script>

<template>
  <VContainer>
    <SectionTitle :title="t('contact.title')" class="mb-6" position="center" />
    <VRow>
      <VCol cols="12" md="4">
        <v-list bg-color="light" lines="two" class="h-100 rounded-lg">
          <v-list-item
            v-for="n in address"
            :key="n.title"
            :title="n.title"
            :subtitle="n.description"
          />
          <v-list-item>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12048.055045373894!2d29.12743295!3d40.981179499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2str!4v1729709350083!5m2!1sen!2str"
              width="100%"
              height="150"
              style="border: 0; border-radius: 12px"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-list-item>
        </v-list>
      </VCol>
      <VCol cols="12" md="8">
        <VCard flat color="white" height="100%">
          <VAlert
            v-if="errors"
            color="error"
            variant="tonal"
            :text="errors"
            class="mb-6"
          />

          <VForm @submit.prevent="handleSubmit">
            <VRow>
              <VCol cols="12" md="6">
                <v-text-field
                  :hide-details="true"
                  variant="outlined"
                  color="primary"
                  v-model="data.firstname"
                  :label="t('contact.name')"
                  required
                />
              </VCol>
              <VCol cols="12" md="6">
                <v-text-field
                  :hide-details="true"
                  variant="outlined"
                  color="primary"
                  v-model="data.lastname"
                  :label="t('contact.surname')"
                  required
                />
              </VCol>
              <VCol cols="12" md="12">
                <v-text-field
                  :hide-details="true"
                  variant="outlined"
                  color="primary"
                  v-model="data.email"
                  :label="t('contact.email')"
                  type="email"
                  required
                />
              </VCol>
              <VCol cols="12" md="12">
                <MazPhoneNumberInput
                  class="w-100 rounded-sm"
                  v-model="data.phone"
                  v-model:country-code="countryCode"
                  show-code-on-list
                  :preferred-countries="['TR', 'AZ', 'EN', 'RU']"
                  :ignored-countries="['*']"
                  required
                />
              </VCol>
              <VCol cols="12">
                <VTextarea
                  :hide-details="true"
                  variant="outlined"
                  color="primary"
                  v-model="data.message"
                  :label="t('contact.message')"
                  required
                  auto-grow
                  rows="2"
                />
              </VCol>
              <VCol class="d-flex justify-end">
                <VBtn
                  :disabled="!isFormValid"
                  size="large"
                  class="rounded-xl"
                  type="submit"
                  :text="t('contact.send')"
                />
              </VCol>
            </VRow>
          </VForm>
        </VCard>
      </VCol>
    </VRow>

    <ConfirmDialog
      v-if="showDialog"
      :isOpen="showDialog"
      @close="showDialog = false"
    />
  </VContainer>
</template>

<style>
:root {
  --maz-border-radius: 0.4rem !important;
  --maz-color-primary: rgb(var(--v-theme-primary));
  --v-border-color: rgba(var(--v-theme-primary), 1) !important;
  --v-border-opacity: 0.1 !important;
}

.m-input {
  height: 56px !important;
}

.v-text-field--outlined fieldset {
  color: red !important;
}
</style>
