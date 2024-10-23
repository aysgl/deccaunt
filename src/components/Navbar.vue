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
        @click="() => m.path && $router.push(m.path)"
      >
        <VListItemTitle>
          <VIcon :icon="m.icon" color="primary" /> {{ m.name }}
        </VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
  <VContainer
    fluid
    class="position-fixed top-0 left-0 right-0 backdrop px-0"
    style="z-index: 1"
  >
    <VContainer elevation="0" color="light" class="py-0">
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
        <div class="d-flex">
          <div class="pa-0 ma-0 me-2" v-for="m in menu" :key="m.name">
            <v-btn
              v-if="m?.children"
              color="white"
              class="rounded-xl"
              variant="flat"
            >
              {{ m.name }}
              <v-menu activator="parent" open-on-hover>
                <v-list>
                  <v-list-item
                    v-for="(c, index) in m?.children"
                    :key="index"
                    :value="index"
                    @click="$router.push(c.path)"
                  >
                    <v-list-item-title>{{ c.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-btn>
            <VBtn
              v-else
              @click="() => m.path && $router.push(m.path)"
              color="white"
              class="rounded-xl"
              variant="flat"
              :text="m.name"
            />
          </div>
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

const menu = ref([
  { name: "Home", path: "/", icon: IconHome2 },
  { name: "About", path: "/about", icon: IconBriefcase },
  { name: "Portfolio", path: "/portfolio", icon: IconCategory },
  {
    name: "Services",
    icon: IconSettings,
    children: [
      { name: "Preparation of Sites", path: "/services/preparation_sites" },
      {
        name: "Development of Erp Systems",
        path: "/services/development_erp_systems",
      },
    ],
  },
  { name: "Contact", path: "/contact", icon: IconPhone },
]);

const { smAndDown } = useDisplay();
const isSmallScreen = smAndDown;

const drawer = ref(false);
</script>

<style scoped>
.backdrop {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7);
}
</style>
