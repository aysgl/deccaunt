import { createI18n } from "vue-i18n";
import en from "./lang/en.json";
import az from "./lang/az.json";
import ru from "./lang/ru.json";

const i18n = createI18n({
  legacy: false,

  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages: {
    en,
    az,
    ru,
  },
});

export default i18n;
