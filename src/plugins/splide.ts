import { App } from "vue";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

export const VueSplide = {
  install(app: App): void {
    app.component("Splide", Splide);
    app.component("SplideSlide", SplideSlide);
  },
};
