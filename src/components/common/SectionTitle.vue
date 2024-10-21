<template>
  <h1 class="text-h2 font-weight-bold" :class="'text-' + position">
    {{ title }}
  </h1>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "left",
  },
});
</script>
