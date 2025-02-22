<template>
  <v-card flat class="mx-auto" max-width="400" data-aos="fade-up">
    <v-img
      class="align-end text-white"
      height="200"
      :src="card.image_url"
      cover
    >
    </v-img>

    <v-card-item>
      <v-card-title class="text-primary">{{ card.title }}</v-card-title>
      <v-card-subtitle class="me-1">
        {{ card.sub_title }}
        <!-- <span class="me-1 text-primary tex">{{ card.title }}</span> -->
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <div>{{ card.content }}</div>
    </v-card-text>

    <v-card-actions class="pt-5">
      <v-btn class="btn-default btn--size-default" variant="flat"
        ><span>Forfait 1</span>
        <span class="icon-arrow-up-right"></span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  card: {
    type: Object,
    default: {
      title: "",
      sub_title: "",
      content: "",
      image_url: "",
    },
  },
});
</script>


<style scoped lang="scss">
.v-card {
  &-title {
    font-size: 20px;
    font-weight: 500;
  }

  &-subtitle {
    opacity: 1;
    font-size: 28px;
    font-weight: 500;
    line-height: 32px;
  }

  &-text {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.18px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-bottom: 0;
  }

  .v-btn {
    text-transform: capitalize;
    font-weight: 500;
  }

  .icon-arrow-up-right::before {
    color: rgb(var(--v-theme-secondary));
    font-size: 20px;
  }

  // Breakpoint Tablet
}
</style>
