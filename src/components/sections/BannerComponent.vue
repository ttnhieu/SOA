<template>
  <div class="banner">
    <v-container class="banner-footer">
      <div class="d-flex">
        <div class="banner-item">
          <span class="icon-mountains-outline"></span>
          <span>Activy 1</span>
        </div>
        <div class="banner-item">
          <span class="icon-fishing-outline"></span>
          <span>Activy 2</span>
        </div>
        <div class="banner-item">
          <span class="icon-crosshair-outline"></span>
          <span>Activy 3</span>
        </div>
      </div>
    </v-container>
    <v-btn class="banner-message" color="primary" icon>
      <img src="@/assets/icons/icon-chats.svg" alt="" />
    </v-btn>
  </div>
</template>

<script setup lang="ts">
//
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/images/banner.png");
  background-position: center;
  background-size: cover;
  background-repeat: none;
  position: relative;

  &-item {
    width: 360px;
    font-size: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 15px;

    span {
      &:last-child {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.9px;
        text-transform: uppercase;
      }
    }
  }

  &-footer {
    position: absolute;
    left: 50%;
    bottom: 80px;
    transform: translate(-50%, 0);
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  &-message.v-btn {
    position: absolute;
    bottom: 92px;
    right: 130px;
    border-radius: 50%;
  }
}

// Breakpoint Tablet
@media (max-width: 960px) {
  .banner {
    &-message.v-btn {
      right: 24px;
      bottom: 40px;
    }
  }
}

// Breakpoint Mobi
@media (max-width: 599px) {
  .banner {
    &-message.v-btn {
      right: 16px;
      bottom: 20px;
    }
  }
}
</style>
