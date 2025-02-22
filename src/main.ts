// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";
import { loadLanguage } from "@/plugins/i18n";

// Composables
import { createApp } from "vue";
import "@/styles/main.scss";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
loadLanguage("en");
