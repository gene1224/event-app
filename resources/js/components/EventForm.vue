<template>
  <form @submit.prevent="submit">
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Event</label
            >
            <input
              type="text"
              name="name"
              id="name"
              v-model="form.name"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <div class="col-span-6 sm:col-span-3">
            <label for="from" class="block text-sm font-medium text-gray-700"
              >From</label
            >
            <input
              type="date"
              name="from"
              v-model="form.from"
              id="from"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="to" class="block text-sm font-medium text-gray-700"
              >To</label
            >
            <input
              type="date"
              name="to"
              id="to"
              :min="form.from"
              v-model="form.to"
              class="
                mt-1
                focus:ring-indigo-500
                focus:border-indigo-500
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-md
              "
            />
          </div>
          <div class="col-span-6">
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="0" />
              Mon
            </label>
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="1" />
              Tue
            </label>
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="2" />
              Wed
            </label>
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="3" />
              Thu
            </label>
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="4" />
              Fri
            </label>
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="5" />
              Sat
            </label>
            <label class="m-r-1">
              <input type="checkbox" name="day" v-model="form.days" value="6" />
              Sun
            </label>
          </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
</template>



<script>
import { mapActions, mapState, mapGetters } from "Vuex";
export default {
  data() {
    return {
      form: {
        days: [],
      },
    };
  },
  computed: mapState({
    ...mapGetters({
      event: "eventState",
    }),
  }),
  methods: {
    ...mapActions(["saveEvent"]),
    submit: function (e) {
      this.saveEvent(this.form);
    },
  },
  watch: {
    event(newEvent, _oldEvent) {
      this.form = { ...newEvent };
    },
  },
};
</script>