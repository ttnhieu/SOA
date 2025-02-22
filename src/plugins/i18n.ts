import { createI18n } from "vue-i18n";
import axios from "axios";
// import { toast } from "vue3-toastify";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "fr",
  messages: {},
});
async function loadLanguage(lang: string) {
  try {
    const response = await axios.get(
      `https://api.test.soa-dev.net/api/v1/pages?lang=${lang}`
    );
    i18n.global.setLocaleMessage(lang, response.data[0]);
    i18n.global.locale = lang;
  } catch (error) {
    console.error("Error!", error);
    // toast.success("Error");
  }
}

export { i18n, loadLanguage };
