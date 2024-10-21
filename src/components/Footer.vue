<template>
  <footer class="py-4">
    <VContainer>
      <VRow>
        <VCol cols="12" md="4" class="text-md-left text-center">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/deccaountlogo.svg"
            width="250"
          />
        </VCol>
        <VCol cols="12" md="8" class="d-flex justify-md-end">
          <VFlex class="d-flex justify-center flex-wrap ga-1">
            <VChip color="primary" v-for="item in menu" :key="item.name">
              {{ item.name }}
            </VChip>
          </VFlex>
        </VCol>
        <VCol cols="12" md="4" class="text-md-left text-center">
          <small class="mb-3">Contact Us</small>
          <div>
            <div>050 253 46 47</div>
            <div>info@deccaount.az</div>
          </div>
        </VCol>
        <VCol
          cols="12"
          md="4"
          class="d-flex flex-column text-md-left text-center"
        >
          <small class="mb-3">Get a Quote</small>
          <div>
            <VBtn
              :prepend-icon="IconSend"
              text="Write to Us"
              class="rounded-xl"
            />
          </div>
        </VCol>
        <VCol
          cols="12"
          md="4"
          class="d-flex flex-column justify-start align-md-end align-center"
        >
          <small class="mb-3">Follow Us</small>
          <div class="d-flex justify-md-start justify-center ga-1">
            <VBtn size="small" :icon="IconBrandInstagram" variant="elevated" />
            <VBtn size="small" :icon="IconBrandFacebook" variant="elevated" />
            <VBtn size="small" :icon="IconBrandLinkedin" variant="elevated" />
          </div>
        </VCol>
        <VCol cols="12" class="text-md-left text-center">
          <small> &copy; 2024 Deccaunt. All rights reserved.</small>
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
import { ref } from "vue";

// Navigation menu items
const menu = ref([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]);
</script>
