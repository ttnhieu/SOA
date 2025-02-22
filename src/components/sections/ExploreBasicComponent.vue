<template>
  <v-container class="page explore-basic">
    <div class="page-header">
      <h2 class="page-title text-primary">
        <span>{{ t("bloc_4.title") }}</span>
      </h2>
    </div>
    <div class="page-ctn"></div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="scss">
.explore-basic {
  // Breakpoint Mobi
  @media (max-width: 599px) {
  }
}
</style>
