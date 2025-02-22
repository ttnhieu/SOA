<template>
  <v-card class="rounded-lg text-editor" max-width="100%">
    <v-card-item class="py-0 border-b">
      <v-btn-group variant="outlined" divided>
        <v-btn
          class="border-0"
          v-for="(item, index) in btnGroup"
          color="secondary"
          :key="index"
        >
          <v-icon :class="item"></v-icon>
        </v-btn>
      </v-btn-group>
    </v-card-item>
    <v-card-item>
      <v-card-title class="text-h5"> Heading </v-card-title>
    </v-card-item>

    <v-card-text class="text-h6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const btnGroup = [
  "icon-message-1",
  "icon-message-2",
  "icon-message-3",
  "icon-message-4",
  "icon-message-5",
  "icon-message-6",
  "icon-message-7",
  "icon-message-8",
  "icon-message-9",
  "icon-message-10",
  "icon-message-11",
  "icon-message-12",
  "icon-message-13",
  "icon-message-14",
];
</script>


<style scoped lang="scss">
.text-editor.v-btn-group--density-default.v-btn-group {
  height: 35px;
}

.text-editor.v-card {
  max-width: 100%;
  border: 1px solid rgb(var(--v-border-color));
  box-shadow: 0px 0px 30px 0px rgba(242, 84, 45, 0.1);
  border-radius: 10px;
}
</style>
