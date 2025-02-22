<template>
  <v-container class="page adventure">
    <div class="page-header">
      <h2 class="page-title text-primary">
        <span>{{ t("bloc_1.title") }}</span>
      </h2>
      <p class="page-subtitle pt-sm-5 pt-0">Sous-titre Bloc 1</p>
    </div>
    <div class="page-ctn">
      <v-row no-gutters>
        <v-col
          class="adventure-item"
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
.adventure {
  &-item {
    &:nth-child(1),
    &:nth-child(3) {
      padding-top: 45px !important;
    }
  }

  // Breakpoint Mobi
  @media (max-width: 599px) {
    &-item {
      &:nth-child(1),
      &:nth-child(3) {
        padding-top: 0 !important;
      }
    }
  }
}
</style>
