<template>
  <div class="activities page">
    <v-container class="pt-md-4 pt-0">
      <div class="page-header">
        <h2 class="page-title text-primary">
          <span>{{ t("bloc_2.title") }}</span>
        </h2>
      </div>
      <div class="page-ctn">
        <div class="d-flex align-center activities-btn-group">
          <v-btn class="btn-default btn--size-default" variant="flat">
            <span class="icon icon-mountains-outline"></span>
            <span>Activity 1</span>
          </v-btn>

          <v-btn class="btn-default btn--size-default" variant="flat">
            <span class="icon icon-fishing-outline"></span>
            <span>Activity 2</span>
          </v-btn>

          <v-btn class="btn-default btn--size-default" variant="flat">
            <span class="icon icon-crosshair-outline"></span>
            <span>Activity 3</span>
          </v-btn>
        </div>

        <MapComponent />
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="scss">
.activities {
  width: 100%;
  // height: 100vh;
  background-image: url("@/assets/images/activities-bg.svg");
  background-color: #fff6f4;
  background-blend-mode: normal;
  background-size: cover;
  background-position: center;

  &-btn-group {
    width: fit-content;
    margin: auto;
    gap: 20px;
  }

  .btn-default {
    font-weight: 600;

    .icon {
      margin-right: 5px;
    }

    .icon::before {
      color: rgb(var(--text-color));
      font-size: 20px;
    }
  }

  .page-title {
    span {
      background-color: #fff6f4;
    }
  }

  // Breakpoint Mobi
  @media (max-width: 599px) {
  }
}
</style>
