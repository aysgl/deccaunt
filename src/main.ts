import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import splide from "./plugins/splide";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n);
app.use(splide);
app.component("MazPhoneNumberInput", MazPhoneNumberInput);
app.mount("#app");
