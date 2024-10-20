import "./scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import * as TablerIcons from "@tabler/icons-vue";

import App from "./App.vue";
import router from "./router";

function getIcon(icon: string): string {
  return (TablerIcons as Record<string, any>)[icon] || icon;
}

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.config.globalProperties.$getIcon = getIcon;

app.mount("#app");
