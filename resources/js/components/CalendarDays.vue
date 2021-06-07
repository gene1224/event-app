<template>
  <div class="w-full p-6">
    <div class="text-3xl font-bold">June 2021</div>
    <div v-for="date in dates" :key="date" class="border-t-2">
      <div
        class="grid grid-cols-6 gap-6 py-4"
        v-bind:class="{ 'bg-green-500 bg-opacity-25': date.event }"
      >
        <div class="col-span-3">{{ date.date }}</div>
        <div class="col-span-3">{{ date.event }}</div>
      </div>
    </div>
  </div>
</template>



<script>
import { mapState } from "Vuex";

import calendarDays from "../helper/calendarDays";
export default {
  computed: mapState({
    dates: (state) => calendarDays(state.event),
  }),
};
</script>