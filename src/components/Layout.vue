<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import { ref, computed } from "vue";

const route = useRoute();

const breadcrumbs = ref(["Foo", "Bar", "Fizz"]);

const showBreadcrumbs = computed(() => route.path !== "/");
</script>

<template>
  <VApp>
    <Navbar />
    <VContainer v-if="showBreadcrumbs" class="px-0">
      <VBreadcrumbs :items="breadcrumbs" />
    </VContainer>
    <VMain app>
      <RouterView />
    </VMain>
    <Footer />
  </VApp>
</template>
