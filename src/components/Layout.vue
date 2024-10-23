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
  </VApp>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { computed, watch } from "vue";

const route = useRoute();

const breadcrumbs = computed(() => {
  // Split the path and filter out empty segments
  const paths = route.path.split("/").filter(Boolean);

  if (paths.length === 0) {
    return [{ text: "", value: "/", disabled: true }];
  }

  return paths.map((path, index) => {
    const fullPath = "/" + paths.slice(0, index + 1).join("/");

    return {
      text: path.charAt(0).toUpperCase() + path.slice(1), // Capitalize the first letter
      value: fullPath, // Full path to navigate to
      disabled: index === paths.length - 1, // Disable the last breadcrumb
    };
  });
});

// Watch for route changes to debug
watch(route, (newRoute) => {
  console.log("Updated Route:", newRoute.path);
});
</script>
