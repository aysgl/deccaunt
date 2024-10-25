import { createApp } from "vue";
import { createPinia } from "pinia";
import vuetify from "./plugins/vuetify";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import VueSplide, { Splide, SplideSlide } from "@splidejs/vue-splide";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(i18n);
app.use(VueSplide);
app.component(Splide.name ?? "Splide", Splide);
app.component(SplideSlide.name ?? "SplideSlide", SplideSlide);
app.component("MazPhoneNumberInput", MazPhoneNumberInput);
app.mount("#app");
