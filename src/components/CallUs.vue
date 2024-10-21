<template>
  <VContainer class="py-16">
    <VCard flat color="light">
      <VCardText>
        <VRow align="center">
          <VCol cols="4" class="text-end">
            <IconPhoneCalling color="rgb(var(--v-theme-primary))" size="120" />
          </VCol>
          <VCol cols="8">
            <h4 class="text-h4 mb-6 mt-2">
              If you have any idea or project in mind, give us a call.
              <br />
              <span class="font-weight-bold"
                >Let's do it as soon as possible.</span
              >
            </h4>

            <VBtn
              href="tel:+994501234567"
              class="rounded-xl me-2 mb-2"
              variant="outlined"
            >
              +994 50 123 45 67
            </VBtn>
            <RouterLink to="/contact">
              <VBtn class="rounded-xl mb-2" variant="flat">Contact Us</VBtn>
            </RouterLink>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { IconPhoneCalling } from "@tabler/icons-vue";
</script>
