<script setup lang="ts">
import OurServices from "@/components/OurServices.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

// Access the current route object
const route = useRoute();

// Define a condition to hide the component based on the current route
const shouldShowServices = computed(() => {
  // Show OurServices only if not on a child route of /services
  return !(route.path.startsWith("/services/") && route.path !== "/services");
});
</script>

<template>
  <OurServices v-if="shouldShowServices" />
  <router-view></router-view>
</template>
