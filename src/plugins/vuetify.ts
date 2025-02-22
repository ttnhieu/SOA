import { createVuetify, type ThemeDefinition } from "vuetify";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const themeCustom: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#f2542d",
    secondary: "#0e9594",
    "header-color": "rgba(86, 44, 44, 0.7)",
  },
  variables: {
    "border-color": "#ccc0c0",
  },
};
export default createVuetify({
  defaults: {
    VBtn: {
      rounded: true,
      variant: "flat",
    },
  },
  theme: {
    defaultTheme: "themeCustom",
    themes: {
      themeCustom,
    },
  },
});
