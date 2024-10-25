import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default {
  install(app) {
    app.component("Splide", Splide);
    app.component("SplideSlide", SplideSlide);
  },
};
