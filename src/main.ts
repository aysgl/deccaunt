import "./scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import * as TablerIcons from "@tabler/icons-vue";

import App from "./App.vue";
import router from "./router";

const resolveIcon = (icon: string) => {
  return TablerIcons[icon] || icon; // Return the Tabler icon if found, otherwise fallback
};
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.provide("resolveIcon", resolveIcon);

app.mount("#app");
