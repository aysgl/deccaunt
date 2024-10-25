<template>
  <VContainer class="py-16">
    <VCard flat color="light">
      <VCardText>
        <VRow align="center">
          <VCol cols="12" md="4" class="text-md-end text-center">
            <IconPhoneCalling color="rgb(var(--v-theme-primary))" size="120" />
          </VCol>
          <VCol cols="12" md="8" class="text-md-start text-center">
            <h4 class="text-h4 mb-6 mt-2">
              {{ t("home.call_us.title") }}
              <br />
              <span class="font-weight-bold">
                {{ t("home.call_us.subtitle") }}
              </span>
            </h4>

            <VBtn
              :href="'tel:' + t('home.call_us.phone')"
              class="rounded-xl me-2 mb-2"
              variant="outlined"
            >
              {{ t("home.call_us.phone") }}
            </VBtn>
            <RouterLink to="/contact">
              <VBtn class="rounded-xl mb-2" variant="flat">
                {{ t("home.call_us.contact_us") }}
              </VBtn>
            </RouterLink>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { IconPhoneCalling } from "@tabler/icons-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
