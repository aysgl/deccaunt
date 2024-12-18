import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { VueSplide } from "./plugins/splide";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n);
app.use(VueSplide);
app.component("MazPhoneNumberInput", MazPhoneNumberInput);
app.mount("#app");
