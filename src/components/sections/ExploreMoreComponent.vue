<template>
  <v-container class="page explore-more">
    <div class="page-header">
      <h2 class="page-title page-title--left text-primary">
        <span>{{ t("bloc_4.title") }}</span>
      </h2>
    </div>
    <div class="page-ctn">
      <v-row no-gutters>
        <v-col
          class="explore-more-item"
          sm="4"
          cols="12"
          v-for="item in items"
          :key="item.id"
        >
          <v-sheet class="ma-2">
            <CardComponent :card="item" />
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const items = [
  {
    id: 1,
    title: "Title",
    sub_title: "Sub Title",
    content:
      "Whitehaven Beach, Whitsunday Island, Whitsunday Islands, Whitehaven Beach, Whitsunday Island, Whitsunday Islands",
    // image_url: new URL("@/assets/images/adventure-1.png", import.meta.url).href,
    image_url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  },
  {
    id: 2,
    title: "Title",
    sub_title: "Sub Title",
    content: "Whitehaven Beach, Whitsunday Island, Whitsunday Islands",
    image_url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  },
  {
    id: 3,
    title: "Title",
    sub_title: "Sub Title",
    content: "Whitehaven Beach, Whitsunday Island, Whitsunday Islands",
    image_url: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
  },
];
</script>
<style lang="scss">
.explore-more {
  // Breakpoint Mobi
  @media (max-width: 599px) {
  }
}
</style>
