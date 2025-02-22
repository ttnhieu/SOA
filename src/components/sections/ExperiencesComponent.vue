<template>
  <v-container class="page experiences">
    <div class="d-flex ga-6 experiences-wrp">
      <div class="experiences-left">
        <div class="page-header">
          <h2 class="page-title page-title--left text-primary">
            <!-- <span class="px-0">{{ t("bloc_5.title") }}</span> -->
            <span class="px-0"
              >Des expériences inoubliables<span class="opacity-50"
                >Lorem Ipsum truc</span
              >
            </span>
          </h2>
        </div>

        <div class="page-ctn">
          <h4>À propos de BASIC</h4>
          <p class="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div class="experiences-right"></div>
    </div>

    <div class="experiences-footer">
      <div
        class="experiences-item text-center"
        v-for="(item, index) in items"
        :key="index"
      >
        <v-btn class="experiences-circle" color="secondary" icon>
          <v-icon><span class="icon-authen"></span></v-icon
        ></v-btn>
        <h4 class="mt-3">{{ item.title }}</h4>
        <p>{{ item.sub_title }}</p>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const items = [
  {
    title: "Authenticité",
    sub_title: "Sous-titre",
    icon: "icon-authen",
  },
  {
    title: "Respect",
    sub_title: "Sous-titre",
    icon: "icon-respect",
  },
  {
    title: "Diversité",
    sub_title: "Sous-titre",
    icon: "icon-deversity",
  },
  {
    title: "Personnalisation",
    sub_title: "Sous-titre",
    icon: "icon-personalization",
  },
  {
    title: "Confort",
    sub_title: "Sous-titre",
    icon: "icon-confort",
  },
];
</script>
<style lang="scss">
.experiences {
  &-wrp {
    position: relative;
  }

  &-left {
    flex: 1;
  }

  &-right {
    width: 503px;
    height: 574px;
    background-image: url("@/assets/images/experiences.png");
    background-position: center;
    background-size: cover;
    background-repeat: none;
    border-radius: 10px;
  }

  &-footer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto auto;
    width: 100%;
    gap: 10px;
    margin-top: 50px;
  }

  &-item {
    //
  }

  &-circle.v-btn {
    border-radius: 50% !important;
    width: 58px !important;
    height: 58px !important;
  }

  .page-title span {
    background: transparent;
  }

  // Breakpoint Tablet
  @media (max-width: 960px) {
    &-footer {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
    }

    &-item {
      .item:nth-child(4),
      .item:nth-child(5) {
        grid-column: span 1;
        justify-self: center;
      }
    }
  }

  // Breakpoint Mobi
  @media (max-width: 599px) {
    &-left {
      position: absolute;
      top: 20px;
      left: 20px;
      bottom: 20px;
      width: calc(100% - 40px);
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      backdrop-filter: blur(5px);
      background-color: rgba(255, 255, 255, 0.7);

      p {
        font-size: 15px;
      }
    }

    &-right {
      width: 100%;
    }

    &-footer {
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
    }

    &-item {
      .item:nth-child(5) {
        grid-column: span 2;
      }
    }

    &-circle.v-btn {
      width: 40px !important;
      height: 40px !important;
    }
  }
}
</style>
