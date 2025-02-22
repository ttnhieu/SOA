<template>
  <v-container class="page social">
    <div class="page-header d-flex justify-space-between ga-5">
      <p class="">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially
      </p>
      <h2 class="">
        <span class="px-0"
          >{{ t("bloc_6.title") }}
          <span class="text-primary">#BASIC</span></span
        >
      </h2>
    </div>
    <div class="page-ctn">
      <div class="social-ctn">
        <v-card flat class="mx-auto" max-width="400">
          <v-img
            class="align-end text-white"
            height="200"
            src="@/assets/images/social-bg-2.png"
            cover
          >
          </v-img>

          <v-card-item>
            <v-card-title>La famille</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </div>
          </v-card-text>
        </v-card>
      </div>

      <div class="social-footer mt-4">
        <v-row no-gutters>
          <v-col data-aos="fade-up" class="social-item" sm="3" cols="6">
            <v-sheet class="ma-2">
              <div class="position-relative social-footer-wrp">
                <div class="social-image">
                  <img src="@/assets/images/social-1.png" alt="" />
                </div>
                <div class="social-highlight">
                  <v-btn variant="flat" color="primary">
                    <v-icon>
                      <span class="icon-authen"></span>
                    </v-icon>
                    <span class="ml-2 mr-4">Anthony Durand</span>
                    <v-icon>
                      <span class="icon-arrow-up-right"></span>
                    </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-col>

          <v-col data-aos="fade-up" class="social-item" sm="3" cols="6">
            <v-sheet class="ma-2">
              <div class="position-relative social-footer-wrp">
                <div class="social-image">
                  <img src="@/assets/images/social-2.png" alt="" />
                </div>
                <div class="social-highlight">
                  <v-btn variant="flat" color="primary">
                    <v-icon>
                      <span class="icon-authen"></span>
                    </v-icon>
                    <span class="ml-2 mr-4">Anthony Durand</span>
                    <v-icon>
                      <span class="icon-arrow-up-right"></span>
                    </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-col>

          <v-col data-aos="fade-up" class="social-item" sm="3" cols="6">
            <v-sheet class="ma-2">
              <div class="position-relative social-footer-wrp">
                <div class="social-image">
                  <img src="@/assets/images/social-3.png" alt="" />
                </div>
                <div class="social-highlight">
                  <v-btn variant="flat" color="primary">
                    <v-icon>
                      <span class="icon-authen"></span>
                    </v-icon>
                    <span class="ml-2 mr-4">Anthony Durand</span>
                    <v-icon>
                      <span class="icon-arrow-up-right"></span>
                    </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-col>

          <v-col data-aos="fade-up" class="social-item" sm="3" cols="6">
            <v-sheet class="ma-2">
              <div class="position-relative social-footer-wrp">
                <div class="social-image">
                  <img src="@/assets/images/social-4.png" alt="" />
                </div>
                <div class="social-highlight">
                  <v-btn variant="flat" color="primary">
                    <v-icon>
                      <span class="icon-authen"></span>
                    </v-icon>
                    <span class="ml-2 mr-4">Anthony Durand</span>
                    <v-icon>
                      <span class="icon-arrow-up-right"></span>
                    </v-icon>
                  </v-btn>
                </div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
<style lang="scss">
.social {
  &-image {
    width: 100%;
    height: 292px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &-ctn {
    width: 100%;
    height: 694px;
    background-image: url("@/assets/images/social-bg-1.png");
    background-position: center;
    background-size: cover;
    background-repeat: none;
    border-radius: 20px;
    position: relative;
  }

  &-footer-wrp {
    overflow: hidden;
    border-radius: 20px;
  }

  .v-btn {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    backdrop-filter: blur(5px);
    background-color: rgba(86, 44, 44, 0.5) !important;
    border-radius: 0;
    height: 60px !important;
    text-align: left;
  }

  .v-card {
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    border-radius: 20px;
    width: calc(100% - 200px);
    max-width: 100% !important;

    .v-img {
      height: 463px !important;
      width: 100%;
    }
  }

  .page-header {
    p {
      width: 50%;
    }

    h2 {
      width: 50%;
      font-size: 40px;
    }
  }

  // Breakpoint Mobi
  @media (max-width: 960px) {
    .page-header {
      p {
        width: 55%;
      }

      h2 {
        width: 45%;
        font-size: 30px;
      }
    }
  }
  // Breakpoint Mobi
  @media (max-width: 599px) {
    .page-header {
      flex-direction: column-reverse;

      p {
        width: 100%;
        font-size: 14px;
      }

      h2 {
        width: 100%;
        font-size: 24px;
      }
    }

    .v-card {
      width: calc(100% - 40px);
    }

    .v-btn {
      font-size: 11px;
      height: 40px !important;
      padding: 0;
    }
  }
}
</style>

