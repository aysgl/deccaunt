<script setup lang="ts">
import SectionTitle from "@/components/common/SectionTitle.vue";
import ConfirmDialog from "@/components/common/ConfirmDialog.vue";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const countryCode = ref("TR");

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
    <SectionTitle
      :title="t('get_a_quote.title')"
      class="mb-6"
      position="center"
    />
    <VRow>
      <VCol cols="12" md="8" class="mx-auto">
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
                  :label="t('get_a_quote.name')"
                  required
                />
              </VCol>
              <VCol cols="12" md="6">
                <v-text-field
                  :hide-details="true"
                  variant="outlined"
                  color="primary"
                  v-model="data.lastname"
                  :label="t('get_a_quote.surname')"
                  required
                />
              </VCol>
              <VCol cols="12" md="12">
                <v-text-field
                  :hide-details="true"
                  variant="outlined"
                  color="primary"
                  v-model="data.email"
                  :label="t('get_a_quote.email')"
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
                  :label="t('get_a_quote.message')"
                  required
                  auto-grow
                  rows="4"
                />
              </VCol>
              <VCol class="d-flex justify-end">
                <VBtn
                  :disabled="!isFormValid"
                  size="large"
                  class="rounded-xl"
                  type="submit"
                  :text="t('get_a_quote.send')"
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
/* .v-field * {
  border-color: red !important;
} */
.v-text-field--outlined fieldset {
  color: red !important;
}
</style>
