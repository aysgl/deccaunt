<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./Navbar.vue";
</script>

<template>
  <VApp>
    <Navbar />
    <VMain app>
      <RouterView />
    </VMain>
    <footer class="text-center py-4">
      &copy; 2024 Deccaunt. All rights reserved.
    </footer>
  </VApp>
</template>
