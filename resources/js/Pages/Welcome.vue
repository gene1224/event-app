<template>
  <div class="grid grid-cols-12 gap-10 w-full">
    <event-form class="col-span-4"></event-form>
    <calendar-days class="col-span-8"></calendar-days>
  </div>
</template>


<script>
import { mapActions, mapState } from "Vuex";

import EventForm from "../components/EventForm.vue";
import CalendarDays from "../components/CalendarDays.vue";

export default {
  components: { EventForm, CalendarDays },
  computed: mapState({
    event: (state) => state.event,
  }),
  methods: {
    ...mapActions(["getEvent"]),
  },

  beforeMount() {
    this.getEvent();
  },
};
</script>
