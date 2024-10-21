<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <VApp>
    <Navbar />
    <VMain app>
      <RouterView />
    </VMain>
    <Footer />
  </VApp>
</template>
