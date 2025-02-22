<template>
  <v-app>
    <v-card>
      <v-layout>
        <!--Header-->
        <v-app-bar
          scroll-behavior="elevate"
          flat
          class="header px-4"
          :height="heightDisplay"
        >
          <!--Header-->
          <div class="d-flex align-center ga-16">
            <v-toolbar-title>LOGO SAMPLE</v-toolbar-title>

            <v-tabs
              align-with-title
              class="menu-pc"
              v-if="$vuetify.display.mdAndUp"
            >
              <v-tab
                v-for="item in menu"
                :key="item.title"
                :id="`${item.id}`"
                class="text-capitalize"
              >
                {{ item.title }}
              </v-tab>
            </v-tabs>
          </div>

          <v-spacer></v-spacer>

          <template v-if="$vuetify.display.mdAndUp">
            <v-btn class="header-btn-icon" icon>
              <v-icon><span class="header-icon icon-mountains"></span></v-icon>
            </v-btn>
            <v-btn class="header-btn-icon" icon>
              <v-icon><span class="header-icon icon-fishing"></span></v-icon>
            </v-btn>
            <v-btn class="header-btn-icon" icon>
              <v-icon><span class="header-icon icon-crosshair"></span></v-icon>
            </v-btn>

            <v-btn class="header-btn-icon bg-primary mr-3">
              <v-icon
                ><span class="header-icon icon-arrow-up-right"></span
              ></v-icon>
            </v-btn>

            <v-btn class="header-btn-icon bg-primary" @click="changeLanguage">
              <v-icon class="mr-1" icon="mdi-earth"></v-icon>
              {{ $i18n.locale }}
            </v-btn>
          </template>

          <v-app-bar-nav-icon
            v-if="!$vuetify.display.mdAndUp"
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-app-bar>

        <!--Header Menu Mobi-->
        <v-navigation-drawer
          v-if="!$vuetify.display.mdAndUp"
          v-model="drawer"
          location="right"
          temporary
        >
          <v-list :items="menu"></v-list>
        </v-navigation-drawer>

        <!--Content-->
        <v-main class="main">
          <!--Section Banner-->
          <BannerComponent />

          <!--Section Adventure-->
          <AdventureComponent />

          <!--Section Activities-->
          <ActivitiesComponent />

          <!--Section Schedule-->
          <ScheduleComponent />

          <!--Section Explore More-->
          <ExploreMoreComponent />

          <!--Section Experiences-->
          <ExperiencesComponent />

          <!--Section Social Media-->
          <SocialMediaComponent />

          <!--Footer-->
          <FooterComponent />
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";

import { useTheme, useDisplay } from "vuetify";
import { useI18n } from "vue-i18n";
import { loadLanguage } from "./plugins/i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import { MENU } from "./shared/constants/common";

// Theme
const theme = useTheme();
const { smAndDown, mdAndUp, xs } = useDisplay();

// Layout
const drawer = ref(false);
const menu = MENU;
const heightDisplay = computed(() => {
  let result = 42; // Mobi

  // Screen > 960, PC
  if (mdAndUp.value) {
    result = 72;
  }
  // Screen < 960 and > 600, Tablet
  else if (smAndDown.value && !xs.value) {
    result = 56;
  }

  return result;
});

// Language
const { locale } = useI18n();
const changeLanguage = async (lang: string) => {
  console.log();

  locale.value = locale.value === "en" ? "fr" : "en";
  await loadLanguage(locale.value);
};

// Animate AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
  });
});
</script>
<style scoped lang="scss">
.header {
  position: fixed !important;
  backdrop-filter: blur(5px);
  background-color: rgba(86, 44, 44, 0.7) !important;
  color: #fff !important;

  .v-toolbar-title {
    font-size: 15px;
    font-weight: 700;
  }

  // Breakpoint Tablet
  @media (max-width: 960px) {
    .v-toolbar-title {
      font-size: 10px;
    }
  }
}

.main {
  padding: 0 !important;
}
</style>
