import { App } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export const VueSplide = {
  install(app: App): void {
    app.component("Splide", Splide); // Doğrudan isim verin
    app.component("SplideSlide", SplideSlide); // Doğrudan isim verin
  },
};
