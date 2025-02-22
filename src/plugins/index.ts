import vuetify from "./vuetify";
import { register } from "swiper/element/bundle";
import { i18n } from "./i18n";

import type { App } from "vue";

export function registerPlugins(app: App) {
  app.use(vuetify);
  app.use(i18n);

  register();
}
