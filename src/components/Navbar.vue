<template>
  <VNavigationDrawer v-model="drawer" temporary app>
    <div class="mt-4 ms-4">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/deccaountlogo.svg"
        width="180"
      />
    </div>
    <v-list>
      <v-list-group
        v-for="m in menu"
        :key="m.name"
        :value="m.name"
        prepend-icon="mdi-menu"
      >
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            :prepend-icon="m.icon"
            :title="m.name"
            @click="() => m.path && $router.push({ path: m.path })"
          />
        </template>

        <v-list-group v-for="s in m.children" :key="s.name" :value="s.name">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="s.name"
              @click="() => s.path && $router.push({ path: s.path })"
            />
          </template>
        </v-list-group>
      </v-list-group>
    </v-list>
  </VNavigationDrawer>
  <VContainer
    fluid
    class="position-fixed top-0 left-0 backdrop px-0"
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
        <RouterLink to="/">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/deccaountlogo.svg"
            width="220"
          />
        </RouterLink>
      </nav>

      <nav v-else class="d-flex justify-space-between">
        <div>
          <RouterLink to="/">
            <img
              alt="Vue logo"
              class="logo"
              src="@/assets/deccaountlogo.svg"
              width="250"
            />
          </RouterLink>
        </div>
        <div class="d-flex">
          <div class="pa-0 ma-0" v-for="m in menu" :key="m.name">
            <VBtn
              v-if="m?.children"
              class="rounded-xl"
              :color="isActiveMenu(m) ? 'primary' : 'white'"
            >
              {{ m.name }}
              <v-menu activator="parent" open-on-hover>
                <v-list>
                  <v-list-item
                    v-for="(c, index) in m?.children"
                    :key="index"
                    :value="index"
                    @click="$router.push({ path: c.path })"
                  >
                    <v-list-item-title>{{ c.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </VBtn>
            <VBtn
              v-else
              @click="() => m.path && $router.push({ path: m.path })"
              class="rounded-xl"
              variant="flat"
              :text="m.name"
              :color="isActiveMenu(m) ? 'primary' : 'white'"
            />
          </div>
          <VBtn
            @click="() => $router.push('quote')"
            color="primary"
            class="rounded-xl"
            :text="t('sidebar.get_a_quote')"
            :prepend-icon="IconPhone"
            elevation="5"
          />

          <SelectLanguage />
        </div>
      </nav>
    </VContainer>
  </VContainer>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useDisplay } from "vuetify";
import {
  IconMenu2,
  IconHome2,
  IconBriefcase,
  IconSettings,
  IconPhone,
  IconCategory,
} from "@tabler/icons-vue";
import SelectLanguage from "./common/SelectLanguage.vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const route = useRoute();
const { t } = useI18n();

const isActiveMenu = (item) => {
  if (item.path === route.path) {
    return true;
  }
  console.log(item);

  if (item.children && item.children.length > 0) {
    return item.children.some((c) => c.path === route.path);
  }
};

const menu = computed(() => [
  { name: t("sidebar.home"), path: "/", icon: IconHome2 },
  { name: t("sidebar.about"), path: "/about", icon: IconBriefcase },
  { name: t("sidebar.portfolio"), path: "/portfolio", icon: IconCategory },
  {
    name: t("sidebar.service"),
    icon: IconSettings,
    children: [
      { name: "Preparation of Sites", path: "/services/preparation_sites" },
      {
        name: "Development of Erp Systems",
        path: "/services/development_erp_systems",
      },
    ],
  },
  { name: t("sidebar.contact"), path: "/contact", icon: IconPhone },
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
