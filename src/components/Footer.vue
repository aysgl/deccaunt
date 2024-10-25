<template>
  <footer class="py-4">
    <VContainer>
      <VRow>
        <VCol cols="12" md="4" class="text-md-left text-center">
          <a href="/">
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/deccaountlogo.svg"
              width="250"
            />
          </a>
        </VCol>
        <VCol cols="12" md="8" class="d-flex justify-md-end">
          <VFlex class="d-flex justify-center flex-wrap ga-1">
            <RouterLink :to="item.path" v-for="item in menu" :key="item.name">
              <VChip color="primary"> {{ item.name }} </VChip>
            </RouterLink>
          </VFlex>
        </VCol>
        <VCol cols="12" md="4" class="text-md-left text-center">
          <small class="mb-3">{{ t("footer.contact_us") }}</small>
          <div class="d-flex flex-column">
            <a class="text-primary text-decoration-none" href="tel:0502534647"
              >050 253 46 47
            </a>
            <a
              class="text-primary text-decoration-none"
              href="mailto:info@deccaount.az"
            >
              info@deccaount.az
            </a>
          </div>
        </VCol>
        <VCol
          cols="12"
          md="4"
          class="d-flex flex-column text-md-left text-center"
        >
          <small class="mb-3">{{ t("footer.get_a_quote") }}</small>
          <RouterLink to="/quote">
            <VBtn
              :prepend-icon="IconSend"
              :text="t('footer.write_to_us')"
              class="rounded-xl"
            />
          </RouterLink>
        </VCol>
        <VCol
          cols="12"
          md="4"
          class="d-flex flex-column justify-start align-md-end align-center"
        >
          <small class="mb-3">{{ t("footer.follow_us") }}</small>
          <div class="d-flex justify-md-start justify-center ga-1">
            <VBtn
              href="https://www.instagram.com"
              target="_blank"
              size="small"
              :icon="IconBrandInstagram"
              variant="elevated"
              rel="noopener noreferrer"
            />
            <VBtn
              href="https://www.facebook.com"
              target="_blank"
              size="small"
              :icon="IconBrandFacebook"
              variant="elevated"
            />
            <VBtn
              href="https://www.linkedin.com"
              target="_blank"
              size="small"
              :icon="IconBrandLinkedin"
              variant="elevated"
            />
          </div>
        </VCol>
        <VCol cols="12" class="text-md-left text-center">
          <small>
            &copy; {{ date.getFullYear() }} Deccaunt. All rights reserved.
          </small>
        </VCol>
      </VRow>
    </VContainer>
  </footer>
</template>

<script setup lang="ts">
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconSend,
} from "@tabler/icons-vue";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const date = new Date();
const menu = computed(() => [
  { name: t("sidebar.home"), path: "/" },
  { name: t("sidebar.about"), path: "/about" },
  { name: t("sidebar.portfolio"), path: "/portfolio" },
  { name: t("sidebar.service"), path: "/services" },
  { name: t("sidebar.contact"), path: "/contact" },
]);
</script>
