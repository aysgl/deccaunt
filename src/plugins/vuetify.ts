import { createVuetify } from "vuetify";
import type { ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const theme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#002FB1",
    secondary: "#8e44ad",
    background: "#fff",
    error: "#c0392b",
    info: "#2980b9",
    success: "#27ae60",
    warning: "#f1c40f",
    light: "#f5f5f5",
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: theme,
    },
  },
  defaults: {
    VBtn: {
      variant: "flat",
      color: "primary",
      size: "default",
    },
  },
});
