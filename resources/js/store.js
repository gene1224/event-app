import { createStore } from "Vuex";

export default createStore({
    state() {
        return {
            event: {
                id: null,
                name: "",
                from: null,
                to: null,
                days: [],
            },
        };
    },
    getters: {
        eventState: (state) => state.event,
    },
    mutations: {
        updateEvent(state, event) {
            state.event = { ...state.event, ...event };
        },
        setEvent(state, event) {
            state.event = event;
        },
    },
    actions: {
        getEvent({ commit }) {
            axios.get("api/event").then(function (response) {
                if (response.data?.id) {
                    commit("setEvent", response.data);
                }
            });
        },
        saveEvent({ commit }, event) {
            axios.post("api/event", event).then(function (response) {
                if (response.data?.id) {
                    commit("updateEvent", event);
                }
            });
        },
    },
});
