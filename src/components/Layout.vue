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
    <div class="position-relative">
      <VBtn
        href="https://wa.me/+905393242038"
        target="_blank"
        color="success"
        class="position-fixed right-0 bottom-0 ma-4"
        size="large"
        :icon="IconBrandWhatsapp"
      ></VBtn>
    </div>
  </VApp>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { computed, watch } from "vue";
import "maz-ui/styles";
import { IconBrandWhatsapp } from "@tabler/icons-vue";

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
