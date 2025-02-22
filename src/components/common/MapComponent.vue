<template>
  <div class="map mt-7" data-aos="zoom-in-up">
    <div class="map-ctn">
      <img
        src="@/assets/images/map.png"
        alt="Zoomable Image"
        class="map-cover"
        :class="{ 'map-cover--active ': activeIndex !== null }"
      />

      <span
        class="map-mark"
        v-for="(item, index) in data"
        :key="index"
        @click="onClickMark(item, index)"
      >
        <v-icon
          class="map-icon"
          :class="{ 'map-mark--active ': activeIndex === index }"
        >
          <img src="@/assets/icons/icon-mark.svg" alt="" />
          <span :class="item.icon"></span>
        </v-icon>
        <v-card v-show="activeIndex === index">
          <v-card-item class="px-2 py-2">
            <v-card-title class="text-subtitle-1 text-center ga-2">{{
              item.name
            }}</v-card-title>
          </v-card-item>
        </v-card>
      </span>

      <v-scale-transition>
        <v-btn
          v-if="activeIndex !== null"
          rounded="lg"
          class="map-btn-back"
          icon="mdi-keyboard-return"
          size="x-small"
          @click="onResetMap"
        >
        </v-btn
      ></v-scale-transition>

      <div class="map-placement">
        <img src="@/assets/images/emplacement.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

interface MARK_INTERFACE {
  name: string;
  icon: string;
}
const data = ref([
  { name: "Active 3", icon: "icon-crosshair-outline" },
  { name: "Active 1", icon: "icon-mountains-outline" },
  { name: "Active 2", icon: "icon-fishing-outline" },
]);

let activeIndex: any = ref(null);
const { t } = useI18n();

function onClickMark(item: MARK_INTERFACE, index: number) {
  // Hightlight Mark
  activeIndex.value = index;
}

function onResetMap() {
  // Reset
  activeIndex.value = null;
}
</script>


<style scoped lang="scss">
.map {
  height: 700px;
  background: #bd6b6b;
  overflow: hidden;

  &-ctn {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
  }

  &-cover--active {
    transform: scale(1.5);
  }

  &-icon {
    position: relative;

    span {
      position: absolute;
      font-size: 18px;
      width: 24px;
      height: 24px;
      background-color: #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;

      &::before {
        color: var(--text-color);
      }
    }
  }

  &-mark {
    cursor: pointer;
    font-size: 20px;

    &:nth-child(2) {
      position: absolute;
      left: 29%;
      top: 60%;
    }

    &:nth-child(3) {
      position: absolute;
      left: 31%;
      top: 40%;
    }

    &:nth-child(4) {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
  }

  &-mark--active {
    filter: drop-shadow(9px 7px 2px #000);
    animation: blink 1s infinite alternate;
  }

  &-btn-back {
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  &-placement {
    position: absolute;
    top: 5px;
    left: 5px;
  }
}

.v-card {
  position: absolute;
  top: 55px;
  width: 130px;
  z-index: 1;
}

// @media (max-width: 959px) {
//   .map {
//     width: 100%;
//     height: 200px;
//   }
// }

// Breakpoint Mobi
@media (max-width: 599px) {
  .map {
    height: 500px;
  }
}
</style>
