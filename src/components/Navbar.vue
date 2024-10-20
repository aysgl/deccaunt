<template>
  <VNavigationDrawer v-model="drawer" temporary app>
    <VListItem class="mt-4">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/deccaountlogo.svg"
        width="180"
      />
    </VListItem>

    <VList nav>
      <VListItem
        v-for="m in menu"
        :key="m.name"
        class="d-flex justify-space-center"
        @click="$router.push(m.path)"
      >
        <VListItemTitle>
          <VIcon :icon="m.icon" color="primary" /> {{ m.name }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
  <VContainer>
    <nav v-if="isSmallScreen" class="d-flex align-center ga-2">
      <VBtn
        :icon="IconMenu2"
        variant="flat"
        color="light"
        class="rounded-xl"
        @click.stop="drawer = !drawer"
      />
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/deccaountlogo.svg"
        width="220"
      />
    </nav>

    <nav v-else class="d-flex justify-space-between">
      <div>
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/deccaountlogo.svg"
          width="250"
        />
      </div>
      <div class="d-flex ga-2">
        <RouterLink
          :to="m.path"
          v-for="m in menu"
          :key="m.name"
          class="ms-auto"
        >
          <VBtn
            color="light"
            class="rounded-xl"
            variant="flat"
            :text="m.name"
          />
        </RouterLink>
        <VBtn
          color="primary"
          class="rounded-xl"
          text="get a quote"
          :prepend-icon="IconPhone"
          elevation="5"
        />
      </div>
    </nav>
  </VContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
import {
  IconMenu2,
  IconHome2,
  IconBriefcase,
  IconSettings,
  IconPhone,
  IconCategory,
} from "@tabler/icons-vue";

// Navigation menu items
const menu = ref([
  { name: "Home", path: "/", icon: IconHome2 },
  { name: "About", path: "/about", icon: IconBriefcase },
  { name: "Portfolio", path: "/portfolio", icon: IconCategory },
  { name: "Services", path: "/services", icon: IconSettings },
  { name: "Contact", path: "/contact", icon: IconPhone },
]);

// Vuetify display object to handle screen size
const { smAndDown } = useDisplay();
const isSmallScreen = smAndDown;

// Drawer state
const drawer = ref(false);
</script>
