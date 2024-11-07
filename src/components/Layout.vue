<template>
  <VApp>
    <Navbar />
    <VContainer v-if="breadcrumbs.length" class="px-0 pt-16 pb-0">
      <VBreadcrumbs :items="breadcrumbs.map((i) => i.text)" />
    </VContainer>
    <VMain app>
      <RouterView />
    </VMain>
    <Footer />
    <div class="position-relative" style="z-index: 2">
      <VBtn
        href="https://wa.me/+994505551438"
        target="_blank"
        color="success"
        class="position-fixed right-0 bottom-0 ma-4"
        size="large"
        :icon="IconBrandWhatsapp"
      ></VBtn>
      <VBtn
        href="/quote"
        target="_blank"
        color="primary"
        class="position-fixed right-0 ma-4"
        size="large"
        style="bottom: 66px"
        :icon="IconPhoneCall"
      ></VBtn>
    </div>
  </VApp>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { computed } from "vue";
import "maz-ui/styles";
import "@splidejs/splide/dist/css/splide.min.css";
import { IconBrandWhatsapp, IconPhoneCall } from "@tabler/icons-vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter(Boolean);

  if (paths.length === 0) {
    return [{ text: "", value: "/", disabled: true }];
  }

  return paths.map((path, index) => {
    const fullPath = "/" + paths.slice(0, index + 1).join("/");

    return {
      text: path.charAt(0).toUpperCase() + path.slice(1),
      value: fullPath,
      disabled: index === paths.length - 1,
    };
  });
});
</script>
