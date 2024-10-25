<template>
  <VBtn size="40" icon color="black" class="ms-2">
    <span class="text-body-2 font-weight-bold">{{
      locale.toLocaleUpperCase()
    }}</span>

    <v-menu v-model="openCountryMenu" activator="parent">
      <v-list>
        <v-list-item
          v-for="(country, index) in countries"
          :key="index"
          @click="selectCountry(country)"
        >
          <v-list-item-title>
            <span>{{ getFlagIcon(country.code) }} {{ country.name }}</span>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </VBtn>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const countries = [
  { name: "English", code: "US" },
  { name: "Azerbaijani", code: "AZ" },
  { name: "Russian", code: "RU" },
];

const selectedCountryCode = ref("US");
const openCountryMenu = ref(false);

const getFlagIcon = (countryCode: string) => {
  const countryOffset = 127397;
  return String.fromCodePoint(
    ...[...countryCode].map((char) => countryOffset + char.charCodeAt(0)),
  );
};

const selectCountry = (country: { code: string; name: string }) => {
  selectedCountryCode.value = country.code;
  locale.value = country.code.toLowerCase();
  localStorage.setItem("selectedLanguage", country.code); // Save selected language to localStorage
  openCountryMenu.value = false;
};

onMounted(() => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    selectedCountryCode.value = savedLanguage;
    locale.value = savedLanguage.toLowerCase();
  }
});
</script>
