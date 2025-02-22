<template>
  <div class="calendar" data-aos="zoom-in">
    <VueDatePicker
      v-model="date"
      inline
      auto-apply
      :enable-time-picker="false"
      :disabled-dates="disabledDates"
      :month-change-on-scroll="false"
    >
      <template #calendar-header="{ index }">
        <div>
          {{ months[index] }}
        </div>
      </template>

      <template #day="{ day, date }">
        <div class="d-flex flex-column">
          <span>{{ day }}</span>
          <span
            v-if="!xs"
            class="calendar-status"
            :class="{ 'calendar-status--free': !checkIsBusy(date) }"
            >{{ checkIsBusy(date) ? "Busy" : "Free" }}</span
          >
        </div>
      </template>
    </VueDatePicker>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useDisplay } from "vuetify";
import VueDatePicker, { type Highlight } from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { format } from "date-fns";

const date = ref(new Date());
const busyDates = ["2025-01-28", "2025-01-29", "2025-02-04"];
const months = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const { xs } = useDisplay();

const disabledDates = computed(() => {
  return busyDates.map((day: string) => new Date(day));
});

const checkIsBusy = (date: Date) => {
  const formattedDate = format(new Date(date), "yyyy-MM-dd");
  return busyDates.includes(formattedDate);
};
</script>

<style lang="scss">
.calendar {
  &-status {
    font-size: 12px;
    font-weight: 400;

    &--free {
      color: rgb(var(--v-theme-primary));
    }
  }

  div:has(> .dp__outer_menu_wrap) {
    width: 100%;
  }

  .dp__main {
    box-shadow: 0px 0px 30px 0px rgba(242, 84, 45, 0.1);
  }

  .dp__month_year_wrap {
    width: 125px;
    margin: auto;
  }

  .dp__calendar_row {
    gap: 10px;
  }

  .dp__calendar_item {
    width: 100%;
    height: 50px;
  }

  // Day cell
  .dp__cell_inner {
    border: 1px solid rgb(var(--v-border-color));
    width: 100%;
    height: 100%;
    padding: 0;
    font-weight: 500;
  }

  // Days in past
  .dp--past {
    background: #f5f5f5;
    color: #999999 !important;
    .calendar-status {
      visibility: hidden;
    }
  }

  // Days in future
  .dp--future {
    border-color: rgb(var(--v-theme-primary));
    background: #fff4f1;
  }

  // Special Days
  .dp__cell_disabled {
    background-color: #fff;
    border-color: rgb(var(--v-border-color));
    color: #999999;
  }

  // Days are not in month
  .dp__cell_offset {
    color: inherit;
  }

  // Today
  .dp__today {
    border-color: rgb(var(--v-theme-primary));
    background-color: rgb(var(--v-theme-primary));
    color: #fff;

    .calendar-status--free {
      color: #fff;
    }
  }

  .dp__inner_nav {
    color: rgb(var(--v-theme-primary));
  }
}

.red-color {
  color: red;
}

@media (max-width: 599px) {
  .calendar .dp__calendar_item {
    height: 40px;
  }
}
</style>
